const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Product } = require('../models');

// 스토어 페이지 오늘의딜
router.get('/store/hotdeal', async (req, res, next) => {
  try {
    // hotdeal 데이터 가져오기
    const hotdealDatas = await Product.findAll({
      limit: 4,
      where: {
        hotdeal_end_at: { [Op.gt]: 0 },
      },
    });

    res.status(201).json(hotdealDatas);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 스토어 페이지 인기상품 로드
router.get('/store/popular', async (req, res, next) => {
  // GET /store/popular
  try {
    const where = { hotdeal_end_at: 0 };

    if (req.query.free_delivery) {
      where.free_delivery = true;
    }

    let orderArray = [
      ['createdAt', 'DESC'],
      ['id', 'ASC'],
    ];

    switch (req.query.order) {
      case 'review_avg':
        orderArray.unshift(['review_avg', 'DESC']);
        break;
      case 'price_desc':
        orderArray.unshift(['selling_price', 'DESC']);
        break;
      case 'price_asc':
        orderArray.unshift(['selling_price', 'ASC']);
        break;
      case 'review_count':
        orderArray.unshift(['review_count', 'DESC']);
        break;
      case 'created_at':
        orderArray.unshift(['createdAt', 'DESC']);
        break;
      default:
        break;
    }

    const products = await Product.findAll({
      where,
      limit: 12,
      offset: (parseInt(req.query.page, 10) - 1) * 12,
      order: orderArray,
    });

    const response = {
      query: req.query,
      products,
    };

    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 카테고리 상품 로드
router.get('/category', async (req, res, next) => {
  try {
    let where = {};

    where.category_index = parseInt(req.query.category_id, 10);

    if (req.query.category_id !== '90') {
      where.hotdeal_end_at = 0;
    } else {
      where.hotdeal_end_at = { [Op.ne]: 0 };
    }

    if (req.query.free_delivery === 'true') {
      where.free_delivery = true;
    }
    if (req.query.is_special_price === 'true') {
      where.is_special_price = true;
    }
    if (req.query.is_departure_today === 'true') {
      where.is_departure_today = true;
    }
    if (req.query.overseas_purchase) {
      const overseasData = JSON.parse(
        decodeURIComponent(req.query.overseas_purchase)
      );
      console.log(overseasData);
      if (
        overseasData.includes('해외직구 제외') &&
        overseasData.includes('해외직구 보기')
      ) {
      } else if (overseasData.includes('해외직구 제외')) {
        where.is_overseas_purchase = false;
      } else if (overseasData.includes('해외직구 보기')) {
        where.is_overseas_purchase = true;
      }
    }

    if (req.query.price) {
      const prices = JSON.parse(req.query.price);
      const minPrice = prices[0];
      const maxPrice = prices[1];
      where.selling_price = { [Op.between]: [minPrice, maxPrice] };
    }

    if (req.query.brand_name && req.query.brand_name !== '[]') {
      const brandNames = JSON.parse(decodeURIComponent(req.query.brand_name));
      const brandObject = brandNames.map((el) => {
        return { brand_name: el };
      });

      const brandWhere = { [Op.or]: brandObject };
      where = { ...where, ...brandWhere };
    }

    let orderArray = [
      ['createdAt', 'DESC'],
      ['id', 'ASC'],
    ];

    switch (req.query.order) {
      case 'review_avg':
        orderArray.unshift(['review_avg', 'DESC']);
        break;
      case 'price_desc':
        orderArray.unshift(['selling_price', 'DESC']);
        break;
      case 'price_asc':
        orderArray.unshift(['selling_price', 'ASC']);
        break;
      case 'review_count':
        orderArray.unshift(['review_count', 'DESC']);
        break;
      case 'created_at':
        break;
      default:
        break;
    }

    const products = await Product.findAll({
      where,
      limit: 12,
      offset: (parseInt(req.query.page, 10) - 1) * 12,
      order: orderArray,
    });

    const count = await Product.count({
      where,
    });

    const response = {
      query: req.query,
      products,
      count,
    };

    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/ranks', async (req, res, next) => {
  // GET /product/ranks?alltime=true&category_id=0&page=1
  try {
    const where = { hotdeal_end_at: 0 };

    if (req.query.category_id) {
      console.log(req.query.category_id);
      where.category_index = {
        [Op.between]: [
          parseInt(req.query.category_id),
          parseInt(req.query.category_id) + 9,
        ],
      };
    }

    let order = [];
    if (req.query.alltime === 'true') {
      order = [
        ['id', 'ASC'],
        ['wish_count', 'DESC'],
        ['review_avg', 'DESC'],
        ['review_count', 'DESC'],
      ];
    } else {
      order = [
        ['createdAt', 'DESC'],
        ['review_count', 'DESC'],
        ['review_avg', 'DESC'],
        ['wish_count', 'ASC'],
      ];
    }

    const products = await Product.findAll({
      where,
      limit: 12,
      offset: (parseInt(req.query.page, 10) - 1) * 12,
      order,
    });

    const time = new Date().toLocaleString();

    const response = { products, time, query: req.query };

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/today_deals', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {
        hotdeal_end_at: { [Op.gt]: 0 },
      },
      limit: 12,
      offset: (parseInt(req.query.page, 10) - 1) * 12,
    });

    const response = { products, query: req.query };

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/search_result', async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10);
    const keyword = decodeURIComponent(req.query.keyword);

    let where = {
      [Op.or]: [{ product_name: { [Op.like]: `%${keyword}%` } }],
    };

    if (req.query.free_delivery === 'true') {
      where.free_delivery = true;
    }
    if (req.query.is_special_price === 'true') {
      where.is_special_price = true;
    }
    if (req.query.is_departure_today === 'true') {
      where.is_departure_today = true;
    }
    if (req.query.overseas_purchase) {
      const overseasData = JSON.parse(
        decodeURIComponent(req.query.overseas_purchase)
      );
      console.log(overseasData);
      if (
        overseasData.includes('해외직구 제외') &&
        overseasData.includes('해외직구 보기')
      ) {
      } else if (overseasData.includes('해외직구 제외')) {
        where.is_overseas_purchase = false;
      } else if (overseasData.includes('해외직구 보기')) {
        where.is_overseas_purchase = true;
      }
    }

    if (req.query.price) {
      console.log(req.query.price);
      const prices = JSON.parse(req.query.price);
      const minPrice = prices[0];
      const maxPrice = prices[1];
      where.selling_price = { [Op.between]: [minPrice, maxPrice] };
    }

    if (req.query.brand_name && req.query.brand_name !== '[]') {
      const brandNames = JSON.parse(decodeURIComponent(req.query.brand_name));
      const brandObject = brandNames.map((el) => {
        return { brand_name: el };
      });

      const brandWhere = { [Op.or]: brandObject };
      where = { ...where, ...brandWhere };
    }

    let orderArray = [
      ['createdAt', 'DESC'],
      ['id', 'ASC'],
    ];

    switch (req.query.order) {
      case 'review_avg':
        orderArray.unshift(['review_avg', 'DESC']);
        break;
      case 'price_desc':
        orderArray.unshift(['selling_price', 'DESC']);
        break;
      case 'price_asc':
        orderArray.unshift(['selling_price', 'ASC']);
        break;
      case 'review_count':
        orderArray.unshift(['review_count', 'DESC']);
        break;
      case 'created_at':
        break;
      default:
        break;
    }

    const products = await Product.findAll({
      where,
      limit: 16,
      offset: (page - 1) * 16,
      order: orderArray,
    });

    const response = { products, query: req.query };

    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 스토어 페이지 오늘의딜
router.get('/weekly', async (req, res, next) => {
  try {
    const keyword1 = '프리미엄';
    const keyword2 = '고급';
    const keyword3 = '냉장고';
    const weeklyProducts = await Product.findAll({
      limit: 10,
      where: {
        [Op.or]: [
          { product_name: { [Op.like]: `%${keyword1}%` } },
          { product_name: { [Op.like]: `%${keyword2}%` } },
          { product_name: { [Op.like]: `%${keyword3}%` } },
        ],
      },
    });
    res.status(201).json(weeklyProducts);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
