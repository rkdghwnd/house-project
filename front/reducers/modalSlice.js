import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideBarVisible: false,
  searchModalVisible: false,
  orderFormModalVisible: false,
  cartModalVisible: false,
  logInModalVisibile: false,
  filterModalVisible: false,
  shareModalVisible: false,
  messageModalVisible: false,
  message: '',
  copyToClipMessageVisible: false,
  withdrawModalVisible: false,
  writingReviewFormVisible: false,
  writingInquiryFormVisible: false,
  imagePreviewVisible: false,
  removeReviewConfirmModalVisible: false,
  removeReviewId: null,
  removeReviewProductId: null,
  writingReviewFormMode: '',
  writingInquiryFormMode: '',
  removeInquiryConfirmModalVisible: false,
  removeInquiryId: null,
  removeInquiryProductId: null,
  overlay: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    // 동기적 실행인 리듀서
    openSideBar(state, action) {
      state.sideBarVisible = true;
      state.overlay = true;
    },
    openSearchModal(state, action) {
      state.searchModalVisible = true;
      state.overlay = true;
    },
    openOrderFormModal(state, action) {
      state.orderFormModalVisible = true;
      state.overlay = true;
    },
    openCartModal(state, action) {
      state.cartModalVisible = true;
      state.overlay = true;
    },
    openLogInModal(state, action) {
      state.logInModalVisibile = true;
      state.overlay = true;
    },
    openFilterModal(state, action) {
      state.filterModalVisible = true;
      state.overlay = true;
    },
    openShareModal(state, action) {
      state.shareModalVisible = true;
      state.overlay = true;
    },
    openMessageModal(state, action) {
      state.messageModalVisible = true;
      state.overlay = true;
      state.message = action.payload.message;
      state.withdrawModalVisible = false;
    },
    closeMessageModal(state, action) {
      state.messageModalVisible = false;
      state.orderFormModalVisible = false;
      state.overlay = false;
      state.message = action.payload.message;
    },
    openCopyToClipMessage(state, action) {
      state.copyToClipMessageVisible = true;
    },
    closeCopyToClipMessage(state, action) {
      state.copyToClipMessageVisible = false;
    },
    openWithdrawModal(state, action) {
      state.withdrawModalVisible = true;
      state.overlay = true;
    },
    openWritingReviewForm(state, action) {
      state.writingReviewFormVisible = true;
      state.writingReviewFormMode = action.payload.mode;
      if (action.payload.mode === 'update') {
        state.imagePreviewVisible = true;
      }
      state.overlay = true;
    },
    updateImagePreview(state, action) {
      state.imagePreviewVisible = action.payload.visible;
    },
    openWritingInquiryForm(state, action) {
      state.writingInquiryFormVisible = true;
      state.writingInquiryFormMode = action.payload.mode;
      state.overlay = true;
    },
    openRemoveReviewConfirmModal(state, action) {
      state.removeReviewConfirmModalVisible = true;
      state.removeReviewId = action.payload.reviewId;
      state.removeReviewProductId = action.payload.productId;
      state.overlay = true;
    },
    openRemoveInquiryConfirmModal(state, action) {
      state.removeInquiryConfirmModalVisible = true;
      state.removeInquiryId = action.payload.inquiryId;
      state.removeInquiryProductId = action.payload.productId;
      state.overlay = true;
    },
    closeModal(state, action) {
      state.sideBarVisible = false;
      state.searchModalVisible = false;
      state.orderFormModalVisible = false;
      state.cartModalVisible = false;
      state.logInModalVisibile = false;
      state.filterModalVisible = false;
      state.shareModalVisible = false;
      state.withdrawModalVisible = false;
      state.writingReviewFormVisible = false;
      state.writingInquiryFormVisible = false;
      state.removeReviewConfirmModalVisible = false;
      state.removeInquiryConfirmModalVisible = false;
      state.messageModalVisible = false;
      state.overlay = false;
    },
  },
  extraReducers: (builder) => builder,
});

export default modalSlice;
