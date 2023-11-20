const express = require('express');

const {
  Product,
  Brand,
  User,
  Final_order,
  Final_cart_product,
} = require('../models');
const { Op } = require('sequelize');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

// 장바구니에서 파이널오더 상품 추가(업데이트)
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    // 기존 것 지우고
    // 새로운것 넣는다
    if (req.user) {
      const a = await Final_order.destroy({
        where: {
          UserId: req.user.id,
        },
      });
      const b = await Final_cart_product.destroy({
        where: {
          UserId: req.user.id,
        },
      });

      console.log(a, b);

      const userCart = req.body.cart;

      for (let i = 0; i < userCart.length; i++) {
        const newFinalOrder = await Final_order.create({
          id: userCart[i].id,
          product_name: userCart[i].product_name,
          brand_name: userCart[i].brand_name,
          image_url: userCart[i].image_url,
          free_delivery: userCart[i].free_delivery,
          selling_price: userCart[i].selling_price,
          UserId: req.user.id,
        });
        userCart[i].Cart_product.forEach(
          async ({ id, product_count, product_option }) => {
            await Final_cart_product.create({
              id,
              product_count,
              product_option,
              UserId: req.user.id,
              FinalOrderId: userCart[i].id,
            });
          }
        );
      }

      res.status(201).json('final order 추가 완료');
    } else {
      res.status(401).json('로그인되지 않았습니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 파이널오더 상품 가져오기
router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const finalOrders = await Final_order.findAll({
        where: {
          UserId: req.user.id,
        },
        include: [{ model: Final_cart_product }],
      });

      res.status(201).json(finalOrders);
    } else {
      res.status(401).json('로그인되지 않았습니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
