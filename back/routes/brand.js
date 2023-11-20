const express = require('express');

const { Product, Brand } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

// 브랜드 정보 불러오기
router.get('/', async (req, res, next) => {
  // GET /brand?category_id=${categoryId}
  try {
    const brand_tuples = await Product.findAll({
      where: { category_index: parseInt(req.query.category_id, 10) },
      attributes: ['brand_name'],
    });

    const brands = [];

    for (let i = 0; i < brand_tuples.length; i++) {
      brands.push(brand_tuples[i].toJSON().brand_name);
    }

    console.log(brands);

    const response = [...new Set(brands)];

    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 검색 상품 브랜드 정보 불러오기
router.get('/search', async (req, res, next) => {
  // GET /brand?keyword=${keyword}
  try {
    const brand_tuples = await Product.findAll({
      where: {
        product_name: { [Op.like]: `%${req.query.keyword}%` },
      },
      attributes: ['brand_name'],
    });

    const brands = [];

    for (let i = 0; i < brand_tuples.length; i++) {
      brands.push(brand_tuples[i].toJSON().brand_name);
    }

    console.log(brands);

    const response = [...new Set(brands)];

    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
