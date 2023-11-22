const express = require('express');
const { Op } = require('sequelize');
const { Product, User, Exhibition } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

// exhibitions 스크랩북 삭제
router.post('/scrapbook', async (req, res, next) => {
  // DELETE /exhibitions/scrapbook
  try {
    if (req.user.id) {
      const userId = req.user.id;
      const user = await User.findOne({
        where: {
          id: userId,
        },
      });

      await user.removeExhibitionBookmarked(
        req.body.checkedItems.map((el) => el.id)
      );

      const bookmarked = await user.getExhibitionBookmarked({ id: userId });
      const scrap = [];
      for (let i = 0; i < bookmarked.length; i++) {
        scrap.push({
          id: bookmarked[i].id,
          image_url: bookmarked[i].image_url,
          on: false,
        });
      }

      return res.json(scrap);
    } else {
      return res.status(404).json('로그인되지 않았습니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// exhibition 북마크 추가
router.post('/bookmark/:exhibitionsId', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const exhibition = await Exhibition.findOne({
        where: { id: parseInt(req.params.exhibitionsId) },
      });
      if (!exhibition) {
        return res.status(403).send('존재하지 않는 exhibition');
      }

      const response = {
        exhibitionsId: parseInt(req.params.exhibitionsId),
        userId: req.user.id,
      };

      await exhibition.addExhibitionBookmarkers(req.user.id);

      return res.status(201).json(response);
    } else {
      return res.status(401).json('로그인 되지 않았습니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// exhibition 북마크 삭제
router.delete(
  '/bookmark/:exhibitionsId',
  isLoggedIn,
  async (req, res, next) => {
    try {
      if (req.user) {
        const exhibition = await Exhibition.findOne({
          where: { id: parseInt(req.params.exhibitionsId) },
        });
        if (!exhibition) {
          return res.status(403).send('존재하지 않는 exhibition');
        }

        const response = {
          exhibitionsId: parseInt(req.params.exhibitionsId),
          userId: req.user.id,
        };

        await exhibition.removeExhibitionBookmarkers(req.user.id);

        return res.status(201).json(response);
      } else {
        return res.status(401).json('로그인 되지 않았습니다.');
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
);

// exhibition 스크랩북 불러오기
router.get('/scrapbook', async (req, res, next) => {
  // GET /exhibitions/scrapbook?userId=${}
  try {
    const userId = parseInt(req.query.userId);
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    const bookmarked = await user.getExhibitionBookmarked();

    const scrap = [];

    for (let i = 0; i < bookmarked.length; i++) {
      scrap.push({
        id: bookmarked[i].id,
        image_url: bookmarked[i].image_url,
        on: false,
      });
    }

    return res.status(201).json(scrap);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/category/:exhibitionsId', async (req, res, next) => {
  // GET /exhibitions/category/:exhibitionsId?category_id=1
  try {
    const exhibitionsId = parseInt(req.params.exhibitionsId, 10);
    const categoryId = parseInt(req.query.category_id);
    let response = {};
    let where = {};
    switch (exhibitionsId) {
      case 1:
        if (categoryId === -1) {
          where.category_index = [
            0, 1, 2, 3, 4, 20, 21, 22, 23, 24, 31, 40, 41, 42, 10, 11, 12, 13,
            14, 100, 80, 81, 82,
          ];
        } else if (categoryId == -2) {
          // 추천
          where.category_index = [3, 23, 25, 26, 24, 100];
        } else {
          where.category_index = categoryId;
        }
        response = await Product.findAll({
          where,
          limit: 24,
        });

        break;
      case 2:
        if (categoryId === -1) {
          where.category_index = [0, 2, 3, 4, 5, 6, 20, 21, 22, 23, 24, 30];
        } else if (categoryId === -2) {
          where.category_index = [4, 5, 6, 20, 24, 30];
        } else {
          where.category_index = categoryId;
        }
        response = await Product.findAll({
          where,
          limit: 12,
        });
        break;
      case 3:
        if (categoryId === -1) {
          where.category_index = [110, 111, 112, 113, 114, 115, 116];
        } else if (categoryId === -2) {
          where.category_index = [112, 113, 114];
        } else {
          where.category_index = categoryId;
        }
        response = await Product.findAll({
          where,
          limit: 12,
        });
        break;
      default:
    }
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  //
  try {
    const exhibitionsId = parseInt(req.params.id, 10);
    // const popularProducts = { digital: '',furniture: '',kitchen: '',camping: ''}
    const response = {};
    switch (exhibitionsId) {
      case 1:
        response.popular = {};
        response.popular.digital = await Product.findAll({
          where: {
            category_index: 23,
          },
          limit: 4,
          order: [['id', 'ASC']],
        });
        response.popular.furniture = await Product.findAll({
          where: {
            category_index: 2,
          },
          limit: 4,
          order: [['id', 'ASC']],
        });
        response.popular.kitchen = await Product.findAll({
          where: {
            category_index: 31,
          },
          limit: 4,
          order: [['id', 'ASC']],
        });
        response.popular.camping = await Product.findAll({
          where: {
            category_index: 100,
          },
          limit: 4,
          order: [['id', 'ASC']],
        });

        response.season = await Product.findAll({
          where: {
            category_index: { [Op.Between]: [40, 42] },
          },
          offset: 40,
          limit: 6,
        });

        break;
      case 2:
        break;
      case 3:
        response.selfInterior = await Product.findAll({
          where: {
            category_index: { [Op.Between]: [110, 116] },
          },
          limit: 12,
        });
        break;
      default:
    }
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
