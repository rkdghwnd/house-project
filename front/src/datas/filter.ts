import {
  getStoreHotdeals,
  getStorePopularProducts,
  getCategoryProducts,
} from '../actions/product';

export const pricePanelRadioButtons = [
  {
    content: '전체',
    filterProperty: '[0, 999999999999]',
    isOn: true,
  },
  {
    content: '50,000원 이하',
    filterProperty: '[0, 50000]',
    isOn: false,
  },
  {
    content: '50,000원 ~ 100,000원',
    filterProperty: '[50000, 100000]',
    isOn: false,
  },
  {
    content: '100,000원 ~ 200,000원',
    filterProperty: '[100000, 200000]',
    isOn: false,
  },
  {
    content: '200,000원 ~ 300,000원',
    filterProperty: '[200000, 300000]',
    isOn: false,
  },
  {
    content: '300,000원 ~ 400,000원',
    filterProperty: '[300000, 400000]',
    isOn: false,
  },
  {
    content: '400,000원 ~ 500,000원',
    filterProperty: '[400000, 500000]',
    isOn: false,
  },
  {
    content: '500,000원 ~ 600,000원',
    filterProperty: '[500000, 600000]',
    isOn: false,
  },

  {
    content: '600,000원 ~ 700,000원',
    filterProperty: '[600000, 700000]',
    isOn: false,
  },
  {
    content: '700,000원 ~ 800,000원',
    filterProperty: '[700000, 800000]',
    isOn: false,
  },
  {
    content: '800,000원 ~ 900,000원',
    filterProperty: '[800000, 900000]',
    isOn: false,
  },
  {
    content: '900,000원 ~ 1,000,000원',
    filterProperty: '[900000, 1000000]',
    isOn: false,
  },
  {
    content: '1,000,000원 이상',
    filterProperty: '[1000000, 999999999999]',
    isOn: false,
  },
];

export const productsSortFilter = [
  {
    content: '인기순',
    filterProperty: 'review_avg',
    isOn: true,
    button: 'radio',
  },
  {
    content: '낮은가격순',
    filterProperty: 'price_asc',
    isOn: false,
    button: 'radio',
  },
  {
    content: '높은가격순',
    filterProperty: 'price_desc',
    isOn: false,
    button: 'radio',
  },
  {
    content: '리뷰많은순',
    filterProperty: 'review_count',
    isOn: false,
    button: 'radio',
  },
  {
    content: '최신순',
    filterProperty: 'created_at',
    isOn: false,
    button: 'radio',
  },
];

export const categoryButtonsFilter = [
  {
    content: '오늘출발',
    filterProperty: 'is_departure_today',
    isOn: false,
    isSubFilterOn: false,
    isSubFilter: false,
  },
  {
    content: '특가',
    filterProperty: 'is_special_price',
    isSubFilter: false,
    isSubFilterOn: false,
    isOn: false,
  },
  {
    content: '무료배송',
    filterProperty: 'free_delivery',
    isOn: false,
    isSubFilter: false,
    isSubFilterOn: false,
  },
  {
    content: '가격',
    filterProperty: 'price',
    isOn: false,
    isSubFilter: true,
    isSubFilterOn: false,
    subFilter: pricePanelRadioButtons,
  },
  {
    content: '브랜드',
    filterProperty: 'brand_name',
    isOn: false,
    isSubFilter: true,
    isSubFilterOn: false,
    subFilter: [
      // {
      //   content: brandName,
      //   filterProperty: 'brand_name',
      //   isOn: false,
      // };
    ],
  },

  {
    content: '상품유형',
    filterProperty: 'overseas_purchase',
    isOn: false,
    isSubFilter: true,
    isSubFilterOn: false,
    subFilter: [
      {
        content: '해외직구 보기',
        filterProperty: 'overseas_purchase',
        isOn: false,
      },
      {
        content: '해외직구 제외',
        filterProperty: 'overseas_purchase',
        isOn: false,
      },
    ],
  },
];

export const thunkArray: { [key in string]: any } = {
  getStoreHotdeals,
  getStorePopularProducts,
  getCategoryProducts,
};
