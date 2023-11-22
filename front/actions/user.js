import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import modalSlice from '../reducers/modalSlice';
import productionsSlice from '../reducers/productionsSlice';
import userSlice from '../reducers/userSlice';
import toastSlice from '../reducers/toastSlice';

axios.defaults.withCredentials = true;
axios.defaults.headers = {
  'Content-type': 'application/json',
  Accept: 'application/json',
};

export const getMyInfo = createAsyncThunk(
  'user/getMyInfo',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/me`
    );
    return response.data;
  }
);

export const logOut = createAsyncThunk(
  'user/logOut',
  async (data, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/auth`
    );
    return response.data;
  }
);

export const updateBookmark = createAsyncThunk(
  'user/updateBookmark',
  async (data, thunkAPI) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/bookmark/${
        data.productId
      }?add=${data.add}`
    );

    thunkAPI.dispatch(toastSlice.actions.closeToast());
    if (data.add) {
      thunkAPI.dispatch(toastSlice.actions.bookmarkToastFromAdd());
    } else {
      thunkAPI.dispatch(toastSlice.actions.bookmarkToastFromRemove());
    }

    return response.data;
  }
);

export const getScrapBook = createAsyncThunk(
  'user/getScrapBook',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/${data.userId}/scrapbook`
    );
    return response.data;
  }
);

export const removeScrapBook = createAsyncThunk(
  'user/removeScrapBook',
  async (data, thunkAPI) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/${data.userId}/scrapbook`,
      { checkedItems: data.checkedItems }
    );
    thunkAPI.dispatch(
      modalSlice.actions.openMessageModal({
        message: `선택한 컨텐츠가 스크랩북에서 삭제되었습니다.`,
      })
    );
    return response.data;
  }
);

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/${data.userId}`
    );
    return response.data;
  }
);

export const getUserFollowers = createAsyncThunk(
  'user/getUserFollowers',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/${data.userId}/followers`
    );
    return response.data;
  }
);

export const getUserFollowings = createAsyncThunk(
  'user/getUserFollowings',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/${data.userId}/followings`
    );
    return response.data;
  }
);

export const followUser = createAsyncThunk(
  'user/followUser',
  async (data, thunkAPI) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/${data.userId}/follow`
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.followToastFromAdd());
    return response.data;
  }
);

export const unfollowUser = createAsyncThunk(
  'user/unfollowUser',
  async (data, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/${data.userId}/follow`
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.followToastFromRemove());
    return response.data;
  }
);

export const removeFollower = createAsyncThunk(
  'user/removeFollowUser',
  async (data, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/follower/${data.userId}`
    );
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.followToastFromRemove());
    return response.data;
  }
);

export const likeReview = createAsyncThunk(
  'user/likeReview',
  async (data, thunkAPI) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/like/${data.reviewId}`
    );
    if (data.route === 'productions') {
      thunkAPI.dispatch(
        productionsSlice.actions.addLikersInProductionReview(response.data)
      );
    } else if (data.route === 'users') {
      thunkAPI.dispatch(userSlice.actions.addLikersInMyLiked(response.data));
    }
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.likeToastFromAdd());

    return response.data;
  }
);

export const unlikeReview = createAsyncThunk(
  'user/unlikeReview',
  async (data, thunkAPI) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/like/${data.reviewId}`
    );
    if (data.route === 'productions') {
      thunkAPI.dispatch(
        productionsSlice.actions.removeLikersInProductionReview(response.data)
      );
    } else if (data.route === 'users') {
      thunkAPI.dispatch(userSlice.actions.removeLikersInMyLiked(response.data));
    }
    thunkAPI.dispatch(toastSlice.actions.closeToast());
    thunkAPI.dispatch(toastSlice.actions.likeToastFromCancel());
    return response.data;
  }
);

export const getMyLiked = createAsyncThunk(
  'user/getMyLiked',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/like/me${data.query}`
    );
    return response.data;
  }
);

export const withdrawAccount = createAsyncThunk(
  'user/withdrawAccount',
  async (data, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACK_END_DOMAIN}/user/me`
      );
      thunkAPI.dispatch(
        modalSlice.actions.openMessageModal({
          message: response.data,
        })
      );
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(
        modalSlice.actions.openMessageModal({
          message: error.response.data,
        })
      );
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const uploadProfileImage = createAsyncThunk(
  'user/uploadProfileImage',
  async (data, thunkAPI) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/me/profile_image`,
      data.data
    );
    return response.data[0];
  }
);

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (data, thunkAPI) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/me`,
      data.data
    );

    thunkAPI.dispatch(
      modalSlice.actions.openMessageModal({
        message: '회원 정보가 수정되었습니다.',
      })
    );
    return response.data;
  }
);

export const getMyReviews = createAsyncThunk(
  'user/getMyReviews',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/review${data.query}`
    );
    return response.data;
  }
);

export const getMyInquirys = createAsyncThunk(
  'user/getMyInquirys',
  async (data, thunkAPI) => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACK_END_DOMAIN}/user/inquiry${data.query}`
    );
    return response.data;
  }
);
