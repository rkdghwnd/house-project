const express = require('express');
const got = require('got');
const uuid = require('uuid').v4;

const { Product, Brand, User } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

// @docs https://docs.tosspayments.com/reference/using-api/api-keys
const secretKey = 'test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6';

router.get('/', function (req, res) {
  res.render('checkout', {
    title: '구매하기',
    orderId: uuid(),
    orderName: '토스 티셔츠',
    price: 50000,
    customerName: '김토스',
    customerKey: uuid(),
  });
});

// ------  결제 승인 ------
// @docs https://docs.tosspayments.com/guides/payment-widget/integration#3-결제-승인하기
router.get('/success', function (req, res) {
  got
    .post('https://api.tosspayments.com/v1/payments/confirm', {
      headers: {
        Authorization:
          'Basic ' + Buffer.from(secretKey + ':').toString('base64'),
        'Content-Type': 'application/json',
      },
      json: {
        orderId: req.query.orderId,
        amount: req.query.amount,
        paymentKey: req.query.paymentKey,
      },
      responseType: 'json',
    })
    .then(function (response) {
      // TODO: 구매 완료 비즈니스 로직 구현
      console.log(response.body);
      res.render('success', {
        amount: response.body.totalAmount,
        paymentKey: response.body.paymentKey,
        orderId: response.body.orderId,
      });
    })
    .catch(function (error) {
      // TODO: 구매 실패 비즈니스 로직 구현
      res.redirect(
        `/fail?code=${error.response?.body?.code}&message=${error.response?.body?.message}`
      );
    });
});

router.get('/fail', function (req, res) {
  res.render('fail', {
    message: req.query.message,
    code: req.query.code,
  });
});

module.exports = router;
