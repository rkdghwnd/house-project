const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
  Product,
  Product_image,
  Product_question,
  Review,
  User,
  Product_answer,
} = require('../models');
const { isLoggedIn } = require('./middlewares');
const e = require('express');
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

// 이미지 업로드
router.post(
  '/review_image',
  // isLoggedIn,
  upload.array('image'), // 이미지(여러개)를 저장소에 업로드한다.
  async (req, res, next) => {
    // console.log(req.files); // 업로드한 이미지에 대한 정보
    res.json(
      req.files.map((y) => `${process.env.BACK_END_DOMAIN}/${y.filename}`)
    );
  }
);

// 리뷰 폼 데이터(리뷰 요약정보)
router.get('/review/:reviewId/form', async (req, res, next) => {
  try {
    const reviewId = parseInt(req.params.reviewId);
    const reviewForm = await Review.findOne({
      where: {
        id: reviewId,
      },
      attributes: ['id', 'content', 'review_img', 'review_star'],
      include: [
        {
          model: Product,
          attributes: ['id', 'image_url', 'brand_name', 'product_name'],
        },
      ],
    });

    res.status(201).json(reviewForm);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 문의 가져오기
router.get('/:productId/inquiry', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page);

    const inquiry = await Product_question.findAll({
      where: { ProductId: parseInt(req.params.productId) },
      limit: 5,
      offset: (page - 1) * 5,
      include: [{ model: Product_answer }],
      order: [['createdAt', 'DESC']],
    });
    const count = await Product_question.count({
      where: { ProductId: parseInt(req.params.productId) },
    });
    res.status(201).json({ inquiry, count });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 문의 작성하기
router.post('/:productId/inquiry', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const ProductId = parseInt(req.params.productId);
      const newQuestion = await Product_question.create({
        ProductId,
        question_nickname: req.body.question_nickname,
        question_type: req.body.question_type,
        question: req.body.question,
        is_buyer: req.body.is_buyer,
        is_secret: req.body.is_secret,
        UserId: req.user.id,
      });

      return res.status(201).json('문의가 작성되었습니다.');
    } else {
      return res.status(401).json('로그인되지 않았습니다.');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 문의 수정하기
router.patch(
  '/:productId/inquiry/:inquiryId',
  isLoggedIn,
  async (req, res, next) => {
    try {
      if (req.user) {
        await Product_question.update(
          {
            question_type: req.body.question_type,
            question: req.body.question,
            is_secret: req.body.is_secret,
          },
          {
            where: {
              id: parseInt(req.body.inquiryId),
            },
          }
        );
        const result = await Product_question.findOne({
          where: {
            id: parseInt(req.body.inquiryId),
          },
        });
        console.log(JSON.parse(JSON.stringify(result)));
        return res.status(201).json('문의가 수정되었습니다.');
      } else {
        return res.status(401).json('로그인되지 않았습니다.');
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

// 문의 삭제하기
router.delete(
  '/:productId/inquiry/:inquiryId',
  upload.none(),
  isLoggedIn,
  async (req, res, next) => {
    try {
      if (req.user) {
        await Product_question.destroy({
          where: {
            id: parseInt(req.params.inquiryId),
          },
        });

        res.status(201).json('문의 삭제 완료');
      } else {
        return res.status(401).json('로그인되지 않았습니다.');
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

// 리뷰 스탯 가져오기
router.get('/:productId/review/stats', async (req, res, next) => {
  try {
    const oneStarCount = await Review.count({
      where: { ProductId: parseInt(req.params.productId), review_star: 1 },
    });
    const twoStarCount = await Review.count({
      where: { ProductId: parseInt(req.params.productId), review_star: 2 },
    });
    const threeStarCount = await Review.count({
      where: { ProductId: parseInt(req.params.productId), review_star: 3 },
    });
    const fourStarCount = await Review.count({
      where: { ProductId: parseInt(req.params.productId), review_star: 4 },
    });
    const fiveStarCount = await Review.count({
      where: { ProductId: parseInt(req.params.productId), review_star: 5 },
    });
    const totalReviewCount = await Review.count({
      where: { ProductId: parseInt(req.params.productId) },
    });

    const starCountArray = [
      fiveStarCount,
      fourStarCount,
      threeStarCount,
      twoStarCount,
      oneStarCount,
    ];
    res.status(201).json({ starCountArray, totalCount: totalReviewCount });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 리뷰 삭제하기
router.delete(
  '/:productId/review/:reviewId',
  upload.none(),
  isLoggedIn,
  async (req, res, next) => {
    try {
      if (req.user) {
        await Review.destroy({
          where: {
            id: parseInt(req.params.reviewId),
          },
        });

        const productId = parseInt(req.params.productId);

        const productReviews = await Review.findAll({
          where: {
            ProductId: productId,
          },
          attribtues: ['review_star'],
        });
        const JSONProductReviews = JSON.parse(JSON.stringify(productReviews));
        const totalStars = JSONProductReviews.reduce((acc, cur) => {
          return acc + cur.review_star;
        }, 0);
        const reviewAVG = totalStars / productReviews.length;

        await Product.update(
          {
            review_avg: reviewAVG,
          },
          {
            where: {
              id: productId,
            },
          }
        );

        res.status(201).json(reviewAVG);
      } else {
        return res.status(401).json('로그인되지 않았습니다.');
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

// 리뷰 수정하기
router.patch(
  '/:productId/review',
  upload.none(),
  isLoggedIn,
  async (req, res, next) => {
    try {
      if (req.user) {
        const updatedReview = await Review.update(
          {
            ProductId: parseInt(req.body.product_id),
            review_star: parseInt(req.body.review_star),
            review_img: req.body.review_img || '',
            content: req.body.content,
            writer_id: parseInt(req.body.writer_id),
            writer_nickname: req.body.writer_nickname,
            writer_profile_image_url: req.body.writer_profile_image_url,
            UserId: req.user.id,
          },
          {
            where: {
              id: req.body.review_id,
            },
          }
        );

        const productReviews = await Review.findAll({
          where: {
            ProductId: parseInt(req.body.product_id),
          },
          attribtues: ['review_star'],
        });
        const JSONProductReviews = JSON.parse(JSON.stringify(productReviews));
        const totalStars = JSONProductReviews.reduce((acc, cur) => {
          return acc + cur.review_star;
        }, 0);
        const reviewAVG = totalStars / productReviews.length;

        await Product.update(
          {
            review_avg: reviewAVG,
          },
          {
            where: {
              id: parseInt(req.body.product_id),
            },
          }
        );

        res.status(201).json(reviewAVG);
      } else {
        return res.status(401).json('로그인되지 않았습니다.');
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

// 리뷰 작성하기
router.post(
  '/:productId/review',
  upload.none(),
  isLoggedIn,
  async (req, res, next) => {
    try {
      if (req.user) {
        // Review에 작성하기
        console.log(req.body);
        const newReview = await Review.create({
          ProductId: parseInt(req.body.product_id),
          review_star: parseInt(req.body.review_star),
          review_img: req.body.review_img || '',
          content: req.body.content,
          writer_id: parseInt(req.body.writer_id),
          writer_nickname: req.body.writer_nickname,
          writer_profile_image_url: req.body.writer_profile_image_url,
          UserId: req.user.id,
        });

        const count = await Review.count({
          where: {
            ProductId: parseInt(req.body.product_id),
          },
        });

        const product = await Product.findOne({
          where: {
            id: parseInt(req.body.product_id),
          },
          attribtues: ['review_avg', 'review_count'],
        });

        const productJSON = JSON.parse(JSON.stringify(product));

        console.log(count, 'ㅁㅁㅁㅁ', parseInt(req.body.review_star));
        const reviewAVG =
          (productJSON.review_avg * (count - 1) +
            parseInt(req.body.review_star)) /
          count;

        await Product.update(
          {
            review_count: count,
            review_avg: reviewAVG,
          },
          {
            where: { id: parseInt(req.body.product_id) },
          }
        );
        return res.status(201).json(reviewAVG);
      } else {
        return res.status(401).json('로그인되지 않았습니다.');
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

// productions 리뷰 페이지네이션
router.get('/:productId/review', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page);

    const pageReviews = await Review.findAll({
      limit: 5,
      offset: 5 * (page - 1),
      where: {
        ProductId: parseInt(req.params.productId),
      },
      order: [['createdAt', 'DESC']],
      include: [{ model: User, as: 'Likers', attributes: ['id'] }],
    });
    const count = await Review.count({
      where: {
        ProductId: parseInt(req.params.productId),
      },
    });
    res.status(201).json({ reviews: pageReviews, count });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 제품 상세 페이지
router.get('/:id', async (req, res, next) => {
  try {
    const productionsData = await Product.findOne({
      where: {
        id: parseInt(req.params.id),
      },
      include: [{ model: Product_image }],
    });

    const recommendedProducts = await Product.findAll({
      limit: 4,
      offset: 5,
      where: {
        category_index: productionsData.category_index,
      },
    });

    const resultData = { recommendedProducts, productionsData };

    res.status(201).json(resultData);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
