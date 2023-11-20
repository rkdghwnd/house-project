const express = require('express');
// const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Op } = require('sequelize');

const {
  Product,
  Product_image,
  Product_question,
  Review,
  Product_answer,
  Exhibition,
} = require('../models');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bathroom3 = require('../dummy/bathroom3.json');
const beddingSet3 = require('../dummy/beddingSet3.json');
const beds3 = require('../dummy/beds3.json');
const bowl3 = require('../dummy/bowl3.json');
const cabinet3 = require('../dummy/cabinet3.json');

const carpet3 = require('../dummy/carpet3.json');
const ceilingLamp3 = require('../dummy/ceilingLamp3.json');
const chiffonier3 = require('../dummy/chiffonier3.json');
const cleaner3 = require('../dummy/cleaner3.json');
const cleaningDetergent3 = require('../dummy/cleaningDetergent3.json');

const cleaningSupplies3 = require('../dummy/cleaningSupplies3.json');
const cup3 = require('../dummy/cup3.json');
const curtain3 = require('../dummy/curtain3.json');
const defuser3 = require('../dummy/defuser3.json');
const deodorant3 = require('../dummy/deodorant3.json');

const flower3 = require('../dummy/flower3.json');
const hamper3 = require('../dummy/hamper3.json');
const homeGallery3 = require('../dummy/homeGallery3.json');
const hotdeal3 = require('../dummy/hotdeal3.json');
const kitchenAppliance3 = require('../dummy/kitchenAppliance3.json');

const laundryDetergent3 = require('../dummy/laundryDetergent3.json');
const livingBox3 = require('../dummy/livingBox3.json');
const longStand3 = require('../dummy/longStand3.json');
const mattress3 = require('../dummy/mattress3.json');
const pillow3 = require('../dummy/pillow3.json');

const pot3 = require('../dummy/pot3.json');
const quilit3 = require('../dummy/quilit3.json');
const refrigerator3 = require('../dummy/refrigerator3.json');
const shortStand3 = require('../dummy/shortStand3.json');
const sofa3 = require('../dummy/sofa3.json');

const spaceLight3 = require('../dummy/spaceLight3.json');
const table3 = require('../dummy/table3.json');
const towel3 = require('../dummy/towel3.json');
const tv3 = require('../dummy/tv3.json');
const washingMachine3 = require('../dummy/washingMachine3.json');

const camping = require('../dummy/camping.json');
const cellphone = require('../dummy/cellphone.json');
const computer = require('../dummy/computer.json');
const flooring = require('../dummy/flooring.json');
const homeOffice = require('../dummy/homeOffice.json');
const multitap = require('../dummy/multitap.json');
const paint = require('../dummy/paint.json');
const safety = require('../dummy/safety.json');
const showcase = require('../dummy/showcase.json');
const switchButton = require('../dummy/switchButton.json');
const tool = require('../dummy/tool.json');
const wallpaper = require('../dummy/wallpaper.json');
const dressroom = require('../dummy/dressroom.json');

// camping
// cellphone
// computer
// flooring
// homeOffice
// multitap
// paint
// safety
// showcase
// switch
// tool
// wallpaper

router.get('/', async (req, res, next) => {
  // POST /post
  try {
    const dummyDatas = [
      // ...dressroom,
      // ...camping,
      // ...cellphone,
      // ...computer,
      // ...flooring,
      // ...homeOffice,
      // ...multitap,
      // ...paint,
      // ...safety,
      // ...showcase,
      // ...switchButton,
      // ...tool,
      // ...wallpaper,
      // ...bathroom3,
      // ...beddingSet3,
      ...beds3,
      // ...bowl3,
      // ...cabinet3,
      // ...ceilingLamp3,
      // ...carpet3,
      // ...chiffonier3,
      // ...cleaner3,
      // ...cleaningDetergent3,
      // ...cleaningSupplies3,
      // ...cup3,
      // ...curtain3,
      // ...defuser3,
      // ...deodorant3,
      // ...flower3,
      // ...hamper3,
      // ...homeGallery3,
      // ...kitchenAppliance3,
      // ...laundryDetergent3,
      // ...livingBox3,
      // ...longStand3,
      // ...mattress3,
      // ...pillow3,
      // ...pot3,
      // ...quilit3,
      // ...refrigerator3,
      // ...shortStand3,
      // ...sofa3,
      // ...spaceLight3,
      // ...table3,
      // ...towel3,
      // ...tv3,
      // ...washingMachine3,
      // ...hotdeal3,
    ];

    const dummyIds = dummyDatas.map((el) => {
      return el.id;
    });

    const uniqueIds = [...new Set(Array.from(new Set(dummyIds)))];

    const dummy = dummyDatas.filter((el) => {
      if (uniqueIds.includes(el.id)) {
        uniqueIds.splice(uniqueIds.indexOf(el.id), 1);
        return true;
      }
    });

    for (let i = 0; i < dummy.length; i++) {
      // product
      let newReviewAVG = 0;
      for (let j = 0; j < dummy[i].production_detail.reviews.length; j++) {
        newReviewAVG += dummy[i].production_detail.reviews[j].review.star_avg;
      }

      newReviewAVG = Number(
        (newReviewAVG / dummy[i].production_detail.reviews.length).toFixed(2)
      );

      if (!newReviewAVG) {
        newReviewAVG = 0;
      }

      const newReviewCount = dummy[i].production_detail.reviews.length;
      const newOptions =
        dummy[i].production_detail.options[0].length === 0
          ? JSON.stringify(['선택', dummy[i].name])
          : JSON.stringify(dummy[i].production_detail.options[0]);

      const product_tuple = await Product.create({
        id: dummy[i].id,
        product_name: dummy[i].name,
        brand_id: dummy[i].brand_id,
        brand_name: dummy[i].brand_name,
        is_special_price: dummy[i].is_special_price,
        original_price: dummy[i].original_price,
        image_url: dummy[i].image_url,
        free_delivery: dummy[i].free_delivery,
        delivery_restrict: dummy[i].delivery_etc,
        is_departure_today: Boolean(Math.round(Math.random())),
        is_overseas_purchase: dummy[i].is_overseas_purchase,
        refund_fee:
          dummy[i].production_detail.delivery.refund_exchange_info.refund_fee,
        exchange_fee:
          dummy[i].production_detail.delivery.refund_exchange_info.exchange_fee,
        refund_address:
          dummy[i].production_detail.delivery.refund_exchange_info.address,
        review_avg: newReviewAVG,
        review_count: newReviewCount,
        wish_count: dummy[i].wish_count,
        selling_price: dummy[i].selling_price,
        product_description_table: JSON.stringify(
          dummy[i].production_detail.productDescriptionTable
        ),
        options: newOptions,
        seller_info: JSON.stringify(
          dummy[i].production_detail.delivery.seller_info
        ),
        category_index: dummy[i].production_detail.categoryIndex,
        hotdeal_end_at: 0,
        // hotdeal_end_at: new Date().getTime() + 172800000,
        delivery_restrict:
          dummy[i].production_detail.delivery.delivery.restrict.etc,
      });

      // cart product -> 비어있음
      // product-images

      const resizedCarousel = dummy[i].production_detail.carousel.map(
        (el, id) => {
          return el.split('?gif')[0] + '?gif=1&w=600&h=600&c=c&webp=1';
        }
      );

      const resizedUsersCarousel = dummy[i].production_detail.usersCarousel.map(
        (el, id) => {
          return el.split('?gif')[0] + '?gif=1&w=600&h=600&c=c&webp=1';
        }
      );

      const productImagesArr = Object.entries({
        carousel: resizedCarousel.slice(1, 7),
        usersCarousel: resizedUsersCarousel,
        productDescription: dummy[i].production_detail.productDescription,
      });

      let product_image_tuple_array = [];
      for (let j = 0; j < productImagesArr.length; j++) {
        const product_image_tuple = await Product_image.create({
          src: JSON.stringify(productImagesArr[j][1]),
          belong: productImagesArr[j][0],
        });
        product_image_tuple_array =
          product_image_tuple_array.concat(product_image_tuple);
      }
      product_tuple.addProduct_images(product_image_tuple_array);

      // product-question
      let product_question_tuple_array = [];
      for (
        let j = 0;
        j < dummy[i].production_detail.productionQuestions.question.length;
        j++
      ) {
        const questionTimeString =
          dummy[i].production_detail.productionQuestions.question[j].question
            .question_at;
        const questionTimeSplitArray = questionTimeString
          .split(' ')
          .map((el) => el.slice(el.length - 1));
        const questionUTCTime = new Date(
          questionTimeSplitArray[0],
          questionTimeSplitArray[1],
          questionTimeSplitArray[2],
          questionTimeSplitArray[3],
          questionTimeSplitArray[4]
        );

        const answerTimeString =
          dummy[i].production_detail.productionQuestions.question[j].answer
            .answer_at;
        const answerTimeSplitArray = answerTimeString
          .split(' ')
          .map((el) => el.slice(el.length - 1));
        const answerUTCTime = new Date(
          answerTimeSplitArray[0],
          answerTimeSplitArray[1],
          answerTimeSplitArray[2],
          answerTimeSplitArray[3],
          questionTimeSplitArray[4]
        );

        const isSecret =
          dummy[i].production_detail.productionQuestions.question[j].question
            .question === '비밀글입니다.'
            ? true
            : false;

        console.log(
          dummy[i].production_detail.productionQuestions.question[j].question
            .user_id
        );
        console.log(dummy[i].id);

        const product_question_tuple = await Product_question.create({
          question_type:
            dummy[i].production_detail.productionQuestions.question[j].type,
          is_buyer:
            dummy[i].production_detail.productionQuestions.question[j].is_buyer,
          question_nickname:
            dummy[i].production_detail.productionQuestions.question[j].question
              .nickname,
          question:
            dummy[i].production_detail.productionQuestions.question[j].question
              .question,
          is_secret: isSecret,
          ProductId: dummy[i].id,
        });

        const product_answer_tuple = await Product_answer.create({
          is_secret: isSecret,
          answer_nickname:
            dummy[i].production_detail.productionQuestions.question[j].answer
              .nickname,
          answer:
            dummy[i].production_detail.productionQuestions.question[j].answer
              .answer,
          ProductId: dummy[i].id,
          ProductQuestionId: product_question_tuple.dataValues.id,
        });
      }

      // review
      let product_review_tuple_array = [];
      for (let j = 0; j < dummy[i].production_detail.reviews.length; j++) {
        const product_review_tuple = await Review.create({
          id: dummy[i].production_detail.reviews[j].id,
          content: dummy[i].production_detail.reviews[j].review.comment,
          review_star: dummy[i].production_detail.reviews[j].review.star_avg,
          review_img: dummy[i].production_detail.reviews[j].card.image_url,
          praise_count: dummy[i].production_detail.reviews[j].praise_count,
          review_type: dummy[i].production_detail.reviews[j].review_type.label,
          writer_id: dummy[i].production_detail.reviews[j].writer_id,
          writer_nickname:
            dummy[i].production_detail.reviews[j].writer_nickname,
          writer_profile_image_url:
            dummy[i].production_detail.reviews[j].writer_profile_image_url,
          writer_thumnail_profile_image_url:
            dummy[i].production_detail.reviews[j]
              .writer_thumnail_profile_image_url,
          product_explain:
            dummy[i].production_detail.reviews[j].production_information
              .explain,
        });

        product_review_tuple_array =
          product_review_tuple_array.concat(product_review_tuple);
      }
      product_tuple.addReviews(product_review_tuple_array);
    }

    res.status(201).json('상품데이터 주입 완료 !');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/hotdealtime/reset', async (req, res, next) => {
  try {
    const oneDay = 1000 * 60 * 60 * 24;
    const result = await Product.update(
      { hotdeal_end_at: new Date().getTime() + oneDay },
      {
        where: {
          hotdeal_end_at: { [Op.ne]: 0 },
        },
      }
    );
    res.status(201).json('핫딜 상품들 시간 리셋 완료 !');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/exhibition', async (req, res, next) => {
  try {
    const exhibitionsImages = [
      'assets/images/refur/refur_market_banner.gif',
      'assets/images/fastdelivery/delivery_banner.avif',
      'assets/images/selfinterior/self_interior_banner.webp',
    ];

    for (let i = 0; i < exhibitionsImages.length; i++) {
      await Exhibition.create({
        id: i + 1,
        image_url: exhibitionsImages[i],
      });
    }
    res.status(201).json('exhibition 주입 완료 !');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
