import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  communityDrawerMenuVisible: false,
  storeDrawerMenuVisible: false,
  expertDrawerMenuVisible: false,
  panelScrollTop: 0,
};

const sideBarMenuSlice = createSlice({
  name: 'sideBarMenu',
  initialState,
  reducers: {
    // 동기적 실행인 리듀서
    toggleCommunityDrawerMenu(state, action) {
      state.communityDrawerMenuVisible = !state.communityDrawerMenuVisible;
    },
    toggleStoreDrawerMenu(state, action) {
      state.storeDrawerMenuVisible = !state.storeDrawerMenuVisible;
    },
    toggleExpertDrawerMenu(state, action) {
      state.expertDrawerMenuVisible = !state.expertDrawerMenuVisible;
    },
    updatePanelScrollTop(state, action) {
      state.panelScrollTop = action.payload.scrollTop;
    },
  },
});

export default sideBarMenuSlice;
