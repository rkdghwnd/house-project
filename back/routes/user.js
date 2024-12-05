const express = require('express');
const bcrypt = require('bcrypt');
const {
  User,
  Product,
  Review,
  Product_question,
  Product_answer,
  Product_image,
  Exhibition,
} = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const db = require('../models');

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads'); // uploads 폴더에 저장
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' + new Date().getTime() + ext); // 파일이름 지정
    },
  }),
  // 20MB로 용량 제한
  limits: { fileSize: 20 * 1024 * 1024 },
});

// 프로필 이미지 업로드
router.post(
  '/me/profile_image',
  isLoggedIn,
  upload.array('image'), // 이미지(여러개)를 저장소에 업로드한다.
  async (req, res, next) => {
    // console.log(req.files); // 업로드한 이미지에 대한 정보
    res.json(req.files.map((y) => y.filename));
  }
);

// 로그인 정보 유지
router.get('/me', async (req, res, next) => {
  // GET /user/me
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt', 'snsId', 'withdraw'],
        }, // password 제외하고 가져오기
        include: [
          { model: Review, as: 'Liked', attributes: ['id'] },
          { model: Review, attributes: ['id'] },
          { model: Product, as: 'Bookmarked', attributes: ['id'] },
          {
            model: User,
            as: 'Followings',
            attributes: ['id'],
          },
          {
            model: User,
            as: 'Followers',
            attributes: ['id'],
          },
          { model: Exhibition, as: 'ExhibitionBookmarked', attributes: ['id'] },
        ],
      });

      return res.status(201).json({ me: fullUserWithoutPassword });
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 카카오 로그인
router.get(
  '/kakao/auth',
  isNotLoggedIn,
  (req, res, next) => {
    res.cookie('redir', req.query.redir);
    next();
  },
  passport.authenticate('kakao')
);

router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect(`${process.env.FRONT_END_DOMAIN}${req.cookies.redir}`);
  }
);

// 페이스북 로그인
router.get(
  '/facebook/auth',
  isNotLoggedIn,
  (req, res, next) => {
    res.cookie('redir', req.query.redir);
    next();
  },
  passport.authenticate('facebook')
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect(`${process.env.FRONT_END_DOMAIN}${req.cookies.redir}`);
  }
);

// 구글 로그인
router.get(
  '/google/auth',
  isNotLoggedIn,
  (req, res, next) => {
    res.cookie('redir', req.query.redir);
    next();
  },
  passport.authenticate('google', {
    scope: ['email'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
  }),
  function (req, res) {
    res.redirect(`${process.env.FRONT_END_DOMAIN}${req.cookies.redir}`);
  }
);

// 로그아웃
router.delete('/auth', isLoggedIn, (req, res, next) => {
  // DELETE /user/auth
  req.logout(() => {
    req.session.destroy();
  });
  res.clearCookie('connect.sid');
  return res.status(200).send('log out');
});

// 회원가입
router.post('/info', async (req, res, next) => {
  // POST /user/info
  const exUser = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (exUser) {
    return res.status(403).send('이미 사용중인 아이디입니다.');
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 13);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      introduce: '',
      password: hashedPassword,
      provider: 'local',
    });

    res.status(200).send('sign up success');
  } catch (error) {
    console.error(error);
    next(error); // 상태코드 500
  }
});

// 내 문의 가져오기
router.get('/inquiry', isLoggedIn, async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;

    if (req.user) {
      const myInquirys = await Product_question.findAll({
        where: {
          UserId: req.user.id,
        },
        limit: 5,
        offset: (page - 1) * 5,
        include: [
          {
            model: Product_answer,
          },
          { model: Product, attributes: ['product_name'] },
        ],
        order: [['createdAt', 'DESC']],
      });
      const count = await Product_question.count({
        where: { UserId: req.user.id },
      });

      const response = { inquirys: myInquirys, count };

      return res.status(201).json(response);
    } else {
      return res.status(401).json('로그인되지 않았습니다.');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/:userId/scrapbook', async (req, res, next) => {
  // GET /user/scrapbook
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    const bookmarked = await user.getBookmarked({ id: userId });

    const scrap = [];

    for (let i = 0; i < bookmarked.length; i++) {
      scrap.push({
        id: bookmarked[i].id,
        image_url: bookmarked[i].image_url,
        on: false,
      });
    }

    const response = {
      name: user.nickname,
      profile_image: user.profile_img,
      scrap,
    };

    return res.status(201).json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 스크랩북 삭제
router.post('/:userId/scrapbook', async (req, res, next) => {
  // post /user/scrapbook
  try {
    if (req.user.id) {
      const userId = req.user.id;
      const user = await User.findOne({
        where: {
          id: userId,
        },
      });

      await user.removeBookmarked(req.body.checkedItems.map((el) => el.id));

      const bookmarked = await user.getBookmarked({ id: userId });
      const scrap = [];
      for (let i = 0; i < bookmarked.length; i++) {
        scrap.push({
          id: bookmarked[i].id,
          image_url: bookmarked[i].image_url,
          on: false,
        });
      }

      const response = {
        name: user.nickname,
        profile_image: user.profile_img,
        scrap,
      };
      return res.json(response);
    } else {
      return res.status(404).json('로그인되지 않았습니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 북마크 추가/삭제
router.patch('/bookmark/:productId', isLoggedIn, async (req, res, next) => {
  // /user/bokkmark/:productId?add=true
  try {
    const product = await Product.findOne({
      where: { id: parseInt(req.params.productId) },
    });
    if (!product) {
      return res.status(403).send('상품이 존재하지 않습니다.');
    }

    const response = {
      productId: product.id,
      userId: req.user.id,
    };

    if (req.query.add === 'true') {
      await product.addBookmarkers(req.user.id);
      response.add = true;
    } else {
      await product.removeBookmarkers(req.user.id);
      response.add = false;
    }

    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 팔로워 불러오기
router.get('/:userId/followers', async (req, res, next) => {
  // GET /user/1/followers
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send('없는 사람을 찾으려고 하시네요?');
    }
    const followers = await user.getFollowers({
      attributes: ['id', 'nickname', 'profile_img'],
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 팔로잉 불러오기
router.get('/:userId/followings', async (req, res, next) => {
  // GET /user/1/followings
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    if (!user) {
      res.status(403).send('없는 사람을 찾으려고 하시네요?');
    }
    const followings = await user.getFollowings({
      attributes: ['id', 'nickname', 'profile_img'],
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 팔로우
router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {
  // PATCH /user/1/follow
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      res.status(403).send('없는 사람을 팔로우하려고 하시네요?');
    }
    await user.addFollowers(req.user.id);

    res.status(201).json({ UserId: parseInt(req.params.userId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 언팔로우
router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {
  // DELETE /user/1/follow
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      res.status(403).send('없는 사람을 언팔로우하려고 하시네요?');
    }
    await user.removeFollowers(req.user.id);

    res.status(201).json({ UserId: parseInt(req.params.userId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 팔로워 끊기
router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => {
  // DELETE /user/follower/:userId
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
    });
    if (!user) {
      res.status(403).send('없는 사람을 차단하시려고 하시네요?');
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// like
router.patch('/like/:reviewId', isLoggedIn, async (req, res, next) => {
  try {
    const review = await Review.findOne({
      where: { id: parseInt(req.params.reviewId) },
    });
    if (!review) {
      return res.status(403).send('리뷰가 존재하지 않습니다.');
    }

    await review.addLikers(req.user.id);
    res.json({ ReviewId: parseInt(req.params.reviewId), UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// unlike
router.delete('/like/:reviewId', isLoggedIn, async (req, res, next) => {
  try {
    const review = await Review.findOne({
      where: { id: parseInt(req.params.reviewId) },
    });
    if (!review) {
      return res.status(403).send('리뷰가 존재하지 않습니다.');
    }

    await review.removeLikers(req.user.id);
    res.json({ ReviewId: parseInt(req.params.reviewId), UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 좋아요한 리뷰 가져오기
router.get('/like/me', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({ where: { id: req.user.id } });

      const page = parseInt(req.query.page);

      const count = await db.sequelize.models.Like.count({
        where: {
          UserId: req.user.id,
        },
      });

      const liked = await user.getLiked({
        limit: 5,
        offset: 5 * (page - 1),
        include: [{ model: User, as: 'Likers', attributes: ['id'] }],
      });

      const response = { page, count, liked };
      res.status(201).json(response);
    } else {
      res.status(404).json('로그인되지 않았습니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 회원정보 수정
router.patch('/me', upload.none(), isLoggedIn, async (req, res, next) => {
  // PATCH /user/me
  try {
    if (req.user) {
      await User.update(
        {
          email: req.body.email,
          profile_img: req.body.profile_img,
          nickname: req.body.nickname,
          homepage: req.body.homepage,
          gender: req.body.gender,
          birth: req.body.birth,
          introduce: req.body.introduce,
        },
        {
          where: { id: req.user.id },
        }
      );

      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },

        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] }, // password 제외하고 가져오기
        include: [
          { model: Review, as: 'Liked', attributes: ['id'] },
          { model: Review, attributes: ['id'] },
          { model: Product, as: 'Bookmarked', attributes: ['id'] },
          {
            model: User,
            as: 'Followings',
            attributes: ['id'],
          },
          {
            model: User,
            as: 'Followers',
            attributes: ['id'],
          },
        ],
      });
      return res.status(201).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 회원 탈퇴
router.delete('/me', isLoggedIn, async (req, res, next) => {
  // DELETE `/user/me
  try {
    if (req.user) {
      await User.destroy({ where: { id: req.user.id } });
      req.logout(() => {
        req.session.destroy();
      });
      res.clearCookie('connect.sid');
      return res.status(201).send('회원탈퇴 완료');
    } else {
      return res.status(401).send('로그인 되어 있지 않음');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 내 리뷰 가져오기
router.get('/review', isLoggedIn, async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const sort = req.query.order;

    const order = [];
    switch (sort) {
      case 'best':
        order.push(['praise_count', 'DESC']);
        break;
      case 'recently':
        order.push(['createdAt', 'DESC']);
        break;
      default:
        order.push(['createdAt', 'DESC']);
    }

    // order: [['praise_count','DESC'] or [['createdAt','DESC']]
    if (req.user) {
      const myReviews = await Review.findAll({
        where: {
          UserId: req.user.id,
        },
        limit: 5,
        offset: (page - 1) * 5,
        include: [
          {
            model: Product,
            attributes: ['id', 'product_name', 'image_url', 'brand_name'],
          },
        ],
        order,
      });
      const count = await Review.count({ where: { UserId: req.user.id } });

      const response = { reviews: myReviews, count };

      return res.status(201).json(response);
    } else {
      return res.status(401).json('로그인되지 않았습니다.');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 유저정보 불러오기
router.get('/:userId', async (req, res, next) => {
  console.log(12);
  // GET /user/:userId
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt', 'snsId', 'withdraw'],
      },
      include: [
        { model: Review, as: 'Liked', attributes: ['id'] },
        { model: Product, as: 'Bookmarked', attributes: ['id'] },
        {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        },
        {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        },
        { model: Exhibition, as: 'ExhibitionBookmarked', attributes: ['id'] },
      ],
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
