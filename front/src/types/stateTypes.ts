export type CartProductType = {
  product_count: number;
  product_option: string;
  productId: number;
}[];

export type UserType = null | {
  id: number;
  email: string;
  nickname: string;
  introduce: string;
  provider: string;
  profile_img: string;
  homepage: string;
  gender: string;
  birth: string;
  FinalOrderId: null | number;
  Liked: {
    id: number;
    Like?: {
      createdAt: string;
      updatedAt: string;
      ReviewId: number;
      UserId: number;
    };
  }[];
  Review: { id: number }[];
  Bookmarked: {
    id: number;
    Bookmark?: {
      createdAt: string;
      updatedAt: string;
      ProductId: number;
      UserId: number;
    };
  }[];
  Followings: {
    id: number;
    Follow?: {
      createdAt: string;
      updatedAt: string;
      followingId: number;
      followerId: number;
    };
  }[];
  Followers: {
    id: number;
    Follow?: {
      createdAt: string;
      updatedAt: string;
      followingId: number;
      followerId: number;
    };
  }[];
  ExhibitionBookmarked: { id: number }[];
};

export type FollowFollowerType = {
  id: number;
  nickname: string;
  profile_img: string;
  Follow?: {
    createdAt: string;
    updatedAt: string;
    followingId: number;
    followerId: number;
  };
}[];

export type UserSliceStateType = {
  me: UserType;
  getMyInfoStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getMyInfoError: null | unknown;
  logOutStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  logOutError: null | unknown;
  updateBookmarkStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  updateBookmarkError: null | unknown;
  scrapBook: {
    name: string;
    profile_image: string;
    scrap:
      | {
          id: number;
          image_url: string;
          on: boolean;
        }[]
      | [];
  };
  getScrapBookStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getScrapBookError: null | unknown;
  removeScrapBookStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  removeScrapBookError: null | unknown;
  user: UserType;
  getUserInfoStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getUserInfoError: null | unknown;
  userFollowers: FollowFollowerType;
  getUserFollowersStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getUserFollowersError: null | unknown;
  userFollowings: FollowFollowerType;
  getUserFollowingsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getUserFollowingsError: null | unknown;
  followUserStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  followUserError: null | unknown;
  unfollowUserStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  unfollowUserError: null | unknown;
  removeFollowerStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  removeFollowerError: null | unknown;
  likeReviewStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  likeReviewError: null | unknown;
  unlikeReviewStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  unlikeReviewError: null | unknown;
  myLiked: {
    page: number;
    count: number;
    liked: {
      id: number;
      content: string;
      review_star: number;
      review_img: string;
      praise_count: number;
      review_type: string;
      writer_id: number;
      writer_nickname: string;
      writer_profile_image_url: string;
      writer_thumnail_profile_image_url: string;
      createdAt: string;
      updatedAt: string;
      ProductId: number;
      UserId: null | number;
      Likers?: { id: number }[] | [];
      page: number;
    }[];
  };

  getMyLikedStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getMyLikedError: null | unknown;
  withdrawAccountStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  withdrawAccountError: null | unknown;
  uploadedProfileImageName: '';
  uploadProfileImageStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  uploadProfileImageError: null | unknown;
  updateUserProfileStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  updateUserProfileError: null | unknown;
  myReviews: {
    reviews: {
      id: number;
      content: string;
      review_star: number;
      review_img: string;
      praise_count: number;
      review_type: string;
      writer_id: number;
      writer_nickname: string;
      writer_profile_image_url: string;
      writer_thumnail_profile_image_url: null | string;
      createdAt: string;
      updatedAt: string;
      ProductId: number;
      UserId: number;
      Product: {
        id: number;
        product_name: string;
        image_url: string;
        brand_name: string;
      };
    }[];
    count: number;
  };
  getMyReviewsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getMyReviewsError: null | unknown;
  exhibitionsScrapBook: {
    id: number;
    image_url: string;
    on: boolean;
  }[];
  addExhibitionsBookmarkStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  addExhibitionsBookmarkError: null | unknown;
  removeExhibitionsBookmarkStatus:
    | 'idle'
    | 'loading'
    | 'succeeded'
    | 'rejected';
  removeExhibitionsBookmarkError: null | unknown;
  getExhibitionsScrapBookStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getExhibitionsScrapBookError: null | unknown | unknown;
  removeExhibitionsScrapBookStatus:
    | 'idle'
    | 'loading'
    | 'succeeded'
    | 'rejected';
  removeExhibitionsScrapBookError: null | unknown;
  myInquirys: {
    inquirys:
      | []
      | {
          id: number;
          question_type: string;
          is_buyer: boolean;
          question_nickname: string;
          question: string;
          is_secret: boolean;
          createdAt: string;
          updatedAt: string;
          UserId: number;
          ProductId: number;
          Product_answer: null | {
            id: number;
            answer_nickname: string;
            is_secret: boolean;
            answer: string;
          };
          Product: {
            product_name: string;
          };
        }[];
    count: number;
  };
  getMyInquirysStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getMyInquirysError: null | unknown;
};

export type ExhibitionsSliceType = {
  exhibitions: {
    selfInterior: ProductType[];
    season: ProductType[];
    popular: {
      [key in string]: ProductType[];
    };
  };
  getExhibitionsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getExhibitionsError: null | unknown;
  categoryExhibitions: ProductType[];
  getCategoryExhibitionsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getCategoryExhibitionsError: null | unknown;
  currentCategoryTag: string;
};

export type FinalorderSliceType = {
  finalOrders: {
    id: number;
    product_name: string;
    brand_name: string;
    image_url: string;
    free_delivery: boolean;
    selling_price: number;
    Final_cart_products: {
      product_option: string;
      product_count: number;
    }[];
  }[];
  addFinalOrderStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  addFinalOrderError: null | unknown;
  getFinalOrderStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getFinalOrderError: null | unknown;
};

export type PaymentSliceType = {
  getTOSSPaymentStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getTOSSPaymentError: null | unknown;
};

export type ProductType = {
  id: number;
  product_name: string;
  brand_id: number;
  brand_name: string;
  original_price: number;
  image_url: string;
  free_delivery: boolean;
  is_departure_today: boolean;
  is_special_price: boolean;
  is_overseas_purchase: boolean;
  delivery_restrict: null;
  refund_fee: number;
  exchange_fee: number;
  refund_address: string;
  review_avg: number;
  review_count: number;
  scrap_count: number;
  wish_count: number;
  selling_price: number;
  product_description_table: string;
  seller_info: string;
  category_index: number;
  hotdeal_end_at: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductionsSliceType = {
  productions: {
    id: number;
    product_name: string;
    brand_id: number;
    brand_name: string;
    original_price: number;
    image_url: string;
    free_delivery: boolean;
    is_departure_today: boolean;
    is_special_price: boolean;
    is_overseas_purchase: boolean;
    delivery_restrict: null | boolean;
    refund_fee: number;
    exchange_fee: number;
    refund_address: string;
    review_avg: number;
    review_count: number;
    scrap_count: number;
    wish_count: number;
    selling_price: number;
    product_description_table: string;
    options: string;
    seller_info: string;
    category_index: number;
    hotdeal_end_at: string;
    createdAt: string;
    updatedAt: string;
    Product_images: {
      id: number;
      src: string;
      belong: string;
      createdAt: string;
      updatedAt: string;
      ProductId: number;
    }[];
  };
  productionsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  productionsError: null | unknown;
  carouselImages: [];
  usersCarouselImages: [];
  productDescriptionImages: [];
  productionOptions: [];
  selectedOptions:
    | []
    | {
        id: number;
        optionName: string;
        optionIndex: number;
        optionCount: number;
        price: number;
      }[];
  productDescriptionTable: [] | [string, string][];
  productionReviews: {
    reviews:
      | []
      | {
          id: number;
          content: string;
          review_star: number;
          review_img: string;
          praise_count: number;
          review_type: string;
          writer_id: number;
          writer_nickname: string;
          writer_profile_image_url: string;
          writer_thumnail_profile_image_url: string;
          createdAt: string;
          updatedAt: string;
          ProductId: number;
          UserId: null | number;
          Likers: [] | { id: number }[];
        }[];
    count: 0;
  };
  productionInquiry: {
    inquiry:
      | []
      | {
          id: number;
          question_type: string;
          is_buyer: boolean;
          question_nickname: string;
          question: string;
          is_secret: boolean;
          createdAt: string;
          updatedAt: string;
          UserId: number;
          ProductId: number;
          Product_answer: null;
        }[];
    count: number;
  };
  recommendedProducts: [] | ProductType[];
  reviewUploadedImage: string;
  writeReviewStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  writeReviewError: null | unknown;
  getProductionReviewsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getProductionReviewsError: null | unknown;
  reviewScoreStats: {
    totalCount: number;
    mostCountedStar: number;
    starCountArray: [] | number[];
  };
  getReviewScoreStatsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getReviewScoreStatsError: null | unknown;
  getProductionInquiryStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getProductionInquiryError: null | unknown;
  writeInquiryStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  writeInquiryError: null | unknown;
  writingInquiryFormData: {
    question_type: string;
    question: string;
    is_secret: boolean;
    productId: number;
    inquiryId: number;
  };
  writingReviewFormData: {
    id: number;
    content: string;
    review_star: number;
    Product: {
      id: number;
      image_url: string;
      brand_name: string;
      product_name: string;
    };
  };
  getProductFormDataStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getProductFormDataError: null | unknown;
  updateReviewStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  updateReviewError: null | unknown;
  removeReviewStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  removeReviewError: null | unknown;
  updateInquiryStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  updateInquiryError: null | unknown;
  removeInquiryStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  removeInquiryError: null | unknown;
};

export type CartItem = {
  id: number;
  product_name: string;
  brand_name: string;
  image_url: string;
  productId?: number;
  free_delivery: boolean;
  selling_price: number;
  Cart_product: {
    product_count: number;
    product_option: string;
    productId?: number;
  }[];
};

export type CartType = {
  id: number;
  product_name: string;
  brand_name: string;
  image_url: string;
  free_delivery: boolean;
  selling_price: number;
  Cart_product: {
    id: number;
    product_count: number;
    product_option: string;
    ProductId: number;
    UserId: number;
  }[];
};

export type ProductSlice = {
  storeHotdeals: [] | ProductType[];
  getStoreHotdealsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getStoreHotdealsError: null | unknown;
  popularProducts: [] | ProductType[];
  getStorePopularProductsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  loadPopularProductsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  loadPopularProductsError: null | unknown;
  hasMorePopularProducts: boolean;
  popularProductsFilter: {
    content: string;
    filterProperty: string;
    isOn: boolean;
    button: string;
  }[];
  popularProductsSortFilter: {
    content: string;
    filterProperty: string;
    isOn: boolean;
    button: string;
  }[];
  modalFilters: {
    title: string;
    filterList:
      | []
      | {
          content: string;
          button: string;
          filterProperty: string;
          isOn: boolean;
        }[];
    thunkName: string;
    filterActionName: string;
    productsFilter: {
      content: string;
      filterProperty: string;
      isOn: boolean;
      isSubFilterOn: boolean;
      isSubFilter: boolean;
      subFilter?: { filterProperty: string; isOn: boolean; content: string }[];
    }[];
    productsSortFilter: {
      content: string;
      filterProperty: string;
      isOn: boolean;
      button: string;
    }[];
  };
  categoryProducts: [] | ProductType[];
  hasMoreCategoryProducts: boolean;
  loadCategoryProductsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  loadCategoryProductsError: null | unknown;
  categoryProductsFilter: {
    content: string;
    filterProperty: string;
    isOn: boolean;
    isSubFilterOn: boolean;
    isSubFilter: boolean;
    subFilter?: { filterProperty: string; isOn: boolean; content: string }[];
  }[];
  categoryProductsSortFilter: {
    content: string;
    filterProperty: string;
    isOn: boolean;
    button: string;
  }[];
  productTotalCount: number;
  getCategoryBrandListStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getCategoryBrandListError: null | unknown;
  ranksProducts: [] | ProductType[];
  getRanksProductsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getRanksProductsError: null | unknown;
  hasMoreRanksProducts: boolean;
  ranksTime: null;
  todayDealsProducts: [] | ProductType[];
  getTodayDealsProductsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getTodayDealsProductsError: null | unknown;
  hasMoreTodayDealsProducts: boolean;
  searchProducts: [] | ProductType[];
  loadSearchProductsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  loadSearchProductsError: null | unknown;
  hasMoreSearchProducts: boolean;
  searchProductsFilter:
    | []
    | {
        content: string;
        filterProperty: string;
        isOn: boolean;
        isSubFilterOn: boolean;
        isSubFilter: boolean;
        subFilter?: {
          content: string;
          filterProperty: string;
          isOn: boolean;
        }[];
      }[];
  searchProductsSortFilter: {
    content: string;
    filterProperty: string;
    isOn: boolean;
    button: string;
  }[];
  weeklyPromotionProducts: [] | ProductType[];
  getWeeklyPromotionStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getWeeklyPromotionError: null | unknown;
  browserCart: [] | CartType[];
  browserCartProductCount: number;
  checkedBrowserCartIds: number[];
  getSearchBrandListStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getSearchBrandListError: null | unknown;
};

export type SearchSliceType = {
  searchReviewProducts: [];
  getSearchReviewProductsStatus: 'idle' | 'loading' | 'succeeded' | 'rejected';
  getSearchReviewProductsError: null | unknown;
  searchReviewProductsVisible: boolean;
  gnbSearchHistoryList: [] | string[];
};

export type ModalSliceType = {
  sideBarVisible: boolean;
  searchModalVisible: boolean;
  orderFormModalVisible: boolean;
  cartModalVisible: boolean;
  logInModalVisibile: boolean;
  filterModalVisible: boolean;
  shareModalVisible: boolean;
  messageModalVisible: boolean;
  message: string;
  copyToClipMessageVisible: boolean;
  withdrawModalVisible: boolean;
  writingReviewFormVisible: boolean;
  writingInquiryFormVisible: boolean;
  imagePreviewVisible: boolean;
  removeReviewConfirmModalVisible: boolean;
  removeReviewId: number;
  removeReviewProductId: number;
  writingReviewFormMode: string;
  writingInquiryFormMode: string;
  removeInquiryConfirmModalVisible: boolean;
  removeInquiryId: number;
  removeInquiryProductId: number;
  overlay: boolean;
};
