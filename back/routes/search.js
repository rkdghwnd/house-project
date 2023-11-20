const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const {
  User,
  Product,
  Review,
  Product_Question,
  Product_image,
} = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

// 내 리뷰작성 페이지 상품 검색
router.get('/review_product', async (req, res, next) => {
  // GET /search/review_product
  try {
    if (req.user) {
      const keyword = req.query.keyword;

      const reviewProducts = await Product.findAll({
        where: {
          [Op.or]: [
            { brand_name: { [Op.like]: `%${keyword}%` } },
            { product_name: { [Op.like]: `%${keyword}%` } },
          ],
        },
        attributes: ['id', 'image_url', 'brand_name', 'product_name'],
      });
      res.status(201).json(reviewProducts);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
