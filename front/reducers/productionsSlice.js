import { createSlice } from '@reduxjs/toolkit';
import {
  getProductFormData,
  getProductionInquiry,
  getProductionReviews,
  getProductions,
  getReviewScoreStats,
  removeInquiry,
  removeReview,
  updateInquiry,
  updateReview,
  uploadReviewImage,
  writeInquiry,
  writeReview,
} from '../actions/productions';
import { LOADING, REJECTED, SUCCEEDED } from '../datas/statusConstants';

const initialState = {
  productions: {},
  productionsStatus: 'idle',
  productionsError: null,
  carouselImages: [],
  usersCarouselImages: [],
  productDescriptionImages: [],
  productionOptions: [],
  selectedOptions: [],
  productDescriptionTable: [],
  productionReviews: { reviews: [], count: 0 },
  productionInquiry: {},
  recommendedProducts: [],
  reviewUploadedImage: '',
  writeReviewStatus: 'idle',
  writeReviewError: null,
  getProductionReviewsStatus: 'idle',
  getProductionReviewsError: null,
  reviewScoreStats: {},
  getReviewScoreStatsStatus: 'idle',
  getReviewScoreStatsError: null,
  getProductionInquiryStatus: 'idle',
  getProductionInquiryError: null,
  writeInquiryStatus: 'idle',
  writeInquiryError: null,
  writingInquiryFormData: {},
  writingReviewFormData: {},
  getProductFormDataStatus: 'idle',
  getProductFormDataError: null,
  updateReviewStatus: 'idle',
  updateReviewError: null,
  removeReviewStatus: 'idle',
  removeReviewError: null,
  updateInquiryStatus: 'idle',
  updateInquiryError: null,
  removeInquiryStatus: 'idle',
  removeInquiryError: null,
};

const productionsSlice = createSlice({
  name: 'productions',
  initialState,
  reducers: {
    resetSelectedOptionCount(state, action) {
      const findedOption = state.selectedOptions.find(
        (el) => el.optionIndex === action.payload.optionIndex
      );
      findedOption.optionCount = 0;
    },
    plusSelectedOptionCount(state, action) {
      const findedOption = state.selectedOptions.find(
        (el) => el.optionIndex === action.payload.optionIndex
      );
      findedOption.optionCount += 1;
    },
    minusSelectedOptionCount(state, action) {
      const findedOption = state.selectedOptions.find(
        (el) => el.optionIndex === action.payload.optionIndex
      );
      findedOption.optionCount -= 1;
      if (findedOption.optionCount < 0) {
        findedOption.optionCount = 0;
      }
    },
    resetReviewUploadedImage(state, action) {
      state.reviewUploadedImage = '';
    },
    addLikersInProductionReview(state, action) {
      const targetLikers = state.productionReviews.reviews.find(
        (el) => el.id === action.payload.ReviewId
      ).Likers;
      targetLikers.push({ id: action.payload.UserId });
    },
    removeLikersInProductionReview(state, action) {
      const targetLikers = state.productionReviews.reviews.find(
        (el) => el.id === action.payload.ReviewId
      ).Likers;

      state.productionReviews.reviews.find(
        (el) => el.id === action.payload.ReviewId
      ).Likers = targetLikers.filter(
        (liker) => liker.id !== action.payload.UserId
      );
    },
    updateWritingReviewFormData(state, action) {
      state.writingReviewFormData = action.payload;
      state.reviewUploadedImage = '';
    },
    updateWritingInquiryFormData(state, action) {
      state.writingInquiryFormData = action.payload;
    },
  },
  // 비동기 실행인 리듀서
  extraReducers: (builder) =>
    builder
      .addCase(getProductions.pending, (state, action) => {
        state.productionsStatus = LOADING;
      })
      .addCase(getProductions.fulfilled, (state, action) => {
        state.productionsStatus = SUCCEEDED;
        state.productions = action.payload.productionsData;
        state.carouselImages = JSON.parse(
          action.payload.productionsData.Product_images[0].src
        );
        state.productionOptions = JSON.parse(
          action.payload.productionsData.options
        ).slice(1);
        state.selectedOptions = JSON.parse(
          action.payload.productionsData.options
        )
          .slice(1)
          .map((option, index) => {
            return {
              optionName: option,
              optionIndex: index + 1,
              optionCount: 0,
              price: action.payload.productionsData.selling_price,
            };
          });
        state.usersCarouselImages = JSON.parse(
          action.payload.productionsData.Product_images[1].src
        );
        state.productDescriptionImages = JSON.parse(
          action.payload.productionsData.Product_images[2].src
        );
        state.productDescriptionTable = Object.entries(
          JSON.parse(action.payload.productionsData.product_description_table)
        );
        state.recommendedProducts = action.payload.recommendedProducts;
      })
      .addCase(getProductions.rejected, (state, action) => {
        state.productionsStatus = REJECTED;
        state.productionsError = action.payload;
      })
      .addCase(uploadReviewImage.pending, (state, action) => {
        state.productionsStatus = LOADING;
      })
      .addCase(uploadReviewImage.fulfilled, (state, action) => {
        state.productionsStatus = SUCCEEDED;
        state.reviewUploadedImage = action.payload;
      })
      .addCase(uploadReviewImage.rejected, (state, action) => {
        state.productionsStatus = REJECTED;
        state.productionsError = action.payload;
      })
      .addCase(writeReview.pending, (state, action) => {
        state.writeReviewStatus = LOADING;
      })
      .addCase(writeReview.fulfilled, (state, action) => {
        state.writeReviewStatus = SUCCEEDED;
        if (state.productions.id) {
          state.productions.review_avg = action.payload;
        }
      })
      .addCase(writeReview.rejected, (state, action) => {
        state.writeReviewStatus = REJECTED;
        state.writeReviewError = action.payload;
      })
      .addCase(updateReview.pending, (state, action) => {
        state.updateReviewStatus = LOADING;
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.updateReviewStatus = SUCCEEDED;
        if (state.productions.id) {
          state.productions.review_avg = action.payload;
        }
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.updateReviewStatus = REJECTED;
        state.updateReviewError = action.payload;
      })
      .addCase(getProductionReviews.pending, (state, action) => {
        state.getProductionReviewsStatus = LOADING;
      })
      .addCase(getProductionReviews.fulfilled, (state, action) => {
        state.getProductionReviewsStatus = SUCCEEDED;
        state.productionReviews = action.payload;
      })
      .addCase(getProductionReviews.rejected, (state, action) => {
        state.getProductionReviewsStatus = REJECTED;
        state.getProductionReviewsError = action.payload;
      })
      .addCase(getReviewScoreStats.pending, (state, action) => {
        state.getReviewScoreStatsStatus = LOADING;
      })
      .addCase(getReviewScoreStats.fulfilled, (state, action) => {
        state.getReviewScoreStatsStatus = SUCCEEDED;
        state.reviewScoreStats = action.payload;
        state.reviewScoreStats.mostCountedStar = Math.max(
          ...state.reviewScoreStats.starCountArray
        );
      })
      .addCase(getReviewScoreStats.rejected, (state, action) => {
        state.getReviewScoreStatsStatus = REJECTED;
        state.getReviewScoreStatsError = action.payload;
      })
      .addCase(getProductionInquiry.pending, (state, action) => {
        state.getProductionInquiryStatus = LOADING;
      })
      .addCase(getProductionInquiry.fulfilled, (state, action) => {
        state.getProductionInquiryStatus = SUCCEEDED;
        state.productionInquiry = action.payload;
      })
      .addCase(getProductionInquiry.rejected, (state, action) => {
        state.getProductionInquiryStatus = REJECTED;
        state.getProductionInquiryError = action.payload;
      })
      .addCase(writeInquiry.pending, (state, action) => {
        state.writeInquiryStatus = LOADING;
      })
      .addCase(writeInquiry.fulfilled, (state, action) => {
        state.writeInquiryStatus = SUCCEEDED;
      })
      .addCase(writeInquiry.rejected, (state, action) => {
        state.writeInquiryStatus = REJECTED;
        state.writeInquiryError = action.payload;
      })
      .addCase(getProductFormData.pending, (state, action) => {
        state.getProductFormDataStatus = LOADING;
      })
      .addCase(getProductFormData.fulfilled, (state, action) => {
        state.getProductFormDataStatus = SUCCEEDED;
        state.writingReviewFormData = action.payload;
        state.reviewUploadedImage = action.payload.review_img;
      })
      .addCase(getProductFormData.rejected, (state, action) => {
        state.getProductFormDataStatus = REJECTED;
        state.getProductFormDataError = action.payload;
      })
      .addCase(removeReview.pending, (state, action) => {
        state.removeReviewStatus = LOADING;
      })
      .addCase(removeReview.fulfilled, (state, action) => {
        state.removeReviewStatus = SUCCEEDED;
        if (state.productions.id) {
          state.productions.review_avg = action.payload;
        }
      })
      .addCase(removeReview.rejected, (state, action) => {
        state.removeReviewStatus = REJECTED;
        state.removeReviewError = action.payload;
      })
      .addCase(updateInquiry.pending, (state, action) => {
        state.updateInquiryStatus = LOADING;
      })
      .addCase(updateInquiry.fulfilled, (state, action) => {
        state.updateInquiryStatus = SUCCEEDED;
      })
      .addCase(updateInquiry.rejected, (state, action) => {
        state.updateInquiryStatus = REJECTED;
        state.updateInquiryError = action.payload;
      })
      .addCase(removeInquiry.pending, (state, action) => {
        state.removeInquiryStatus = LOADING;
      })
      .addCase(removeInquiry.fulfilled, (state, action) => {
        state.removeInquiryStatus = SUCCEEDED;
      })
      .addCase(removeInquiry.rejected, (state, action) => {
        state.removeInquiryStatus = REJECTED;
        state.removeInquiryError = action.payload;
      }),
});

export default productionsSlice;
