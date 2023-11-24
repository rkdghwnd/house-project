import { createSlice } from '@reduxjs/toolkit';
import {
  followUser,
  getMyInfo,
  getMyInquirys,
  getMyLiked,
  getMyReviews,
  getScrapBook,
  getUserFollowers,
  getUserFollowings,
  getUserInfo,
  likeReview,
  logOut,
  removeFollower,
  removeScrapBook,
  unfollowUser,
  unlikeReview,
  updateBookmark,
  updateUserProfile,
  uploadProfileImage,
  withdrawAccount,
} from '../actions/user';
import { LOADING, REJECTED, SUCCEEDED } from '../datas/statusConstants';
import {
  addExhibitionsBookmark,
  getExhibitionsScrapBook,
  removeExhibitionsBookmark,
  removeExhibitionsScrapBook,
} from '../actions/exhibitions';

const initialState = {
  me: null,
  getMyInfoStatus: 'idle',
  getMyInfoError: null,
  logOutStatus: 'idle',
  logOutError: null,
  updateBookmarkStatus: 'idle',
  updateBookmarkError: null,
  scrapBook: { name: '', scrap: [] },
  getScrapBookStatus: 'idle',
  getScrapBookError: null,
  removeScrapBookStatus: 'idle',
  removeScrapBookError: null,
  user: null,
  getUserInfoStatus: 'idle',
  getUserInfoError: null,
  userFollowers: [],
  getUserFollowersStatus: 'idle',
  getUserFollowersError: null,
  userFollowings: [],
  getUserFollowingsStatus: 'idle',
  getUserFollowingsError: null,
  followUserStatus: 'idle',
  followUserError: null,
  unfollowUserStatus: 'idle',
  unfollowUserError: null,
  removeFollowerStatus: 'idle',
  removeFollowerError: null,
  likeReviewStatus: 'idle',
  likeReviewError: null,
  unlikeReviewStatus: 'idle',
  unlikeReviewError: null,
  myLiked: {},
  getMyLikedStatus: 'idle',
  getMyLikedError: null,
  withdrawAccountStatus: 'idle',
  withdrawAccountError: null,
  uploadedProfileImageName: '',
  uploadProfileImageStatus: 'idle',
  uploadProfileImageError: null,
  updateUserProfileStatus: 'idle',
  updateUserProfileError: null,
  myReviews: {},
  getMyReviewsStatus: 'idle',
  getMyReviewsError: null,
  exhibitionsScrapBook: [],
  addExhibitionsBookmarkStatus: 'idle',
  addExhibitionsBookmarkError: null,
  removeExhibitionsBookmarkStatus: 'idle',
  removeExhibitionsBookmarkError: null,
  getExhibitionsScrapBookStatus: 'idle',
  getExhibitionsScrapBookError: null,
  removeExhibitionsScrapBookStatus: 'idle',
  removeExhibitionsScrapBookError: null,
  myInquirys: {
    inquirys: [],
  },
  getMyInquirysStatus: 'idle',
  getMyInquirysError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkScrap(state, action) {
      state.scrapBook.scrap[action.payload.index].on =
        !state.scrapBook.scrap[action.payload.index].on;
    },
    checkExhibitionsScrap(state, action) {
      state.exhibitionsScrapBook[action.payload.index].on =
        !state.exhibitionsScrapBook[action.payload.index].on;
    },
    addLikersInMyLiked(state, action) {
      const reviewLikers = state.myLiked.liked.find(
        (el) => el.id === action.payload.ReviewId
      ).Likers;
      reviewLikers.push({ id: action.payload.UserId });
    },
    removeLikersInMyLiked(state, action) {
      const reviewLikers = state.myLiked.liked.find(
        (el) => el.id === action.payload.ReviewId
      ).Likers;
      state.myLiked.liked.find(
        (el) => el.id === action.payload.ReviewId
      ).Likers = reviewLikers.filter((el) => el.id !== action.payload.UserId);
    },
  },
  // 비동기 실행인 리듀서
  extraReducers: (builder) =>
    builder
      .addCase(getMyInfo.pending, (state, action) => {
        state.getMyInfoStatus = LOADING;
      })
      .addCase(getMyInfo.fulfilled, (state, action) => {
        state.getMyInfoStatus = SUCCEEDED;
        state.me = action.payload?.me;
        state.uploadedProfileImageName = action.payload?.me?.profile_img;
      })
      .addCase(getMyInfo.rejected, (state, action) => {
        state.getMyInfoStatus = REJECTED;
        state.getMyInfoError = action.payload;
      })
      .addCase(logOut.pending, (state, action) => {
        state.logOutStatus = LOADING;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.logOutStatus = SUCCEEDED;
        state.me = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.logOutStatus = REJECTED;
        state.logOutError = action.payload;
      })
      .addCase(updateBookmark.pending, (state, action) => {
        state.updateBookmarkStatus = LOADING;
      })
      .addCase(updateBookmark.fulfilled, (state, action) => {
        state.updateBookmarkStatus = SUCCEEDED;
        if (action.payload.add) {
          state.me.Bookmarked.push({ id: action.payload.productId });
        } else {
          state.me.Bookmarked = state.me.Bookmarked.filter(
            (product) => product.id !== action.payload.productId
          );
        }
      })
      .addCase(updateBookmark.rejected, (state, action) => {
        state.updateBookmarkStatus = REJECTED;
        state.updateBookmarkError = action.payload;
      })
      .addCase(getScrapBook.pending, (state, action) => {
        state.getScrapBookStatus = LOADING;
      })
      .addCase(getScrapBook.fulfilled, (state, action) => {
        state.getScrapBookStatus = SUCCEEDED;
        state.scrapBook = action.payload;
      })
      .addCase(getScrapBook.rejected, (state, action) => {
        state.getScrapBookStatus = REJECTED;
        state.getScrapBookError = action.payload;
      })
      .addCase(removeScrapBook.pending, (state, action) => {
        state.removeScrapBookStatus = LOADING;
      })
      .addCase(removeScrapBook.fulfilled, (state, action) => {
        state.removeScrapBookStatus = SUCCEEDED;
        state.scrapBook = action.payload;
      })
      .addCase(removeScrapBook.rejected, (state, action) => {
        state.removeScrapBookStatus = REJECTED;
        state.removeScrapBookError = action.payload;
      })
      .addCase(getUserInfo.pending, (state, action) => {
        state.getUserInfoStatus = LOADING;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.getUserInfoStatus = SUCCEEDED;
        state.user = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.getUserInfoStatus = REJECTED;
        state.getUserInfoError = action.payload;
      })
      .addCase(getUserFollowers.pending, (state, action) => {
        state.getUserFollowersStatus = LOADING;
      })
      .addCase(getUserFollowers.fulfilled, (state, action) => {
        state.getUserFollowersStatus = SUCCEEDED;
        state.userFollowers = action.payload;
      })
      .addCase(getUserFollowers.rejected, (state, action) => {
        state.getUserFollowersStatus = REJECTED;
        state.getUserFollowersError = action.payload;
      })
      .addCase(getUserFollowings.pending, (state, action) => {
        state.getUserFollowingsStatus = LOADING;
      })
      .addCase(getUserFollowings.fulfilled, (state, action) => {
        state.getUserFollowingsStatus = SUCCEEDED;
        state.userFollowings = action.payload;
      })
      .addCase(getUserFollowings.rejected, (state, action) => {
        state.getUserFollowingsStatus = REJECTED;
        state.getUserFollowingsError = action.payload;
      })
      .addCase(followUser.pending, (state, action) => {
        state.followUserStatus = LOADING;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.followUserStatus = SUCCEEDED;
        state.me.Followings.push({ id: action.payload.UserId });

        if (state.user.id === action.payload.UserId) {
          // 유저프로필의 버튼을 클릭했을때
          state.user.Followers.push({ id: state.me.id });
          state.userFollowers.push({
            id: state.me.id,
            nickname: state.me.nickname,
            profile_img: state.me.profile_img,
          });
        }

        if (state.user.id === state.me?.id) {
          // 내 페이지에서 팔로우 버튼 클릭한경우
          state.user.Followings.push({ id: action.payload.UserId });
        }
      })
      .addCase(followUser.rejected, (state, action) => {
        state.followUserStatus = REJECTED;
        state.followUserError = action.payload;
      })
      .addCase(unfollowUser.pending, (state, action) => {
        state.unfollowUserStatus = LOADING;
      })
      .addCase(unfollowUser.fulfilled, (state, action) => {
        state.unfollowUserStatus = SUCCEEDED;
        state.me.Followings = state.me.Followings.filter(
          (following) => following.id !== action.payload.UserId
        );

        if (state.user.id === action.payload.UserId) {
          // 유저프로필의 버튼을 클릭했을때
          state.user.Followers = state.user.Followers.filter(
            (follower) => follower.id !== state.me.id
          );
          state.userFollowers = state.userFollowers.filter(
            (follower) => follower.id !== state.me.id
          );
        }

        if (state.user.id === state.me.id) {
          // 내 페이지에서 팔로우 버튼 클릭한경우
          state.user.Followings = state.user.Followings.filter(
            (following) => following.id !== action.payload.UserId
          );
        }
      })
      .addCase(unfollowUser.rejected, (state, action) => {
        state.unfollowUserStatus = REJECTED;
        state.unfollowUserError = action.payload;
      })
      .addCase(removeFollower.pending, (state, action) => {
        state.removeFollowerStatus = LOADING;
      })
      .addCase(removeFollower.fulfilled, (state, action) => {
        state.removeFollowerStatus = SUCCEEDED;
        state.me.Followers = state.me.Followers.filter(
          (follower) => follower.id !== action.payload.UserId
        );
        state.user.Followers = state.user.Followers.filter(
          (follower) => follower.id !== action.payload.UserId
        );
        state.userFollowers = state.userFollowers.filter(
          (follower) => follower.id !== action.payload.UserId
        );
      })
      .addCase(removeFollower.rejected, (state, action) => {
        state.removeFollowerStatus = REJECTED;
        state.removeFollowerError = action.payload;
      })
      .addCase(likeReview.pending, (state, action) => {
        state.likeReviewStatus = LOADING;
      })
      .addCase(likeReview.fulfilled, (state, action) => {
        state.likeReviewStatus = SUCCEEDED;
        state.me.Liked.push({ id: action.payload.ReviewId });
        if (state.user && state.me && state.me.id === state.user.id) {
          state.user.Liked.push({ id: action.payload.ReviewId });
        }
      })
      .addCase(likeReview.rejected, (state, action) => {
        state.likeReviewStatus = REJECTED;
        state.likeReviewError = action.payload;
      })
      .addCase(unlikeReview.pending, (state, action) => {
        state.unlikeReviewStatus = LOADING;
      })
      .addCase(unlikeReview.fulfilled, (state, action) => {
        state.unlikeReviewStatus = SUCCEEDED;
        state.me.Liked = state.me.Liked.filter(
          (review) => review.id !== action.payload.ReviewId
        );
        if (state.user && state.me && state.me.id === state.user.id) {
          state.user.Liked = state.user.Liked.filter(
            (review) => review.id !== action.payload.ReviewId
          );
        }
      })
      .addCase(unlikeReview.rejected, (state, action) => {
        state.unlikeReviewStatus = REJECTED;
        state.unlikeReviewError = action.payload;
      })
      .addCase(getMyLiked.pending, (state, action) => {
        state.getMyLikedStatus = LOADING;
      })
      .addCase(getMyLiked.fulfilled, (state, action) => {
        state.getMyLikedStatus = SUCCEEDED;
        state.myLiked = action.payload;
      })
      .addCase(getMyLiked.rejected, (state, action) => {
        state.getMyLikedStatus = REJECTED;
        state.getMyLikedError = action.payload;
      })
      .addCase(withdrawAccount.pending, (state, action) => {
        state.withdrawAccountStatus = LOADING;
      })
      .addCase(withdrawAccount.fulfilled, (state, action) => {
        state.withdrawAccountStatus = SUCCEEDED;
      })
      .addCase(withdrawAccount.rejected, (state, action) => {
        state.withdrawAccountStatus = REJECTED;
        state.withdrawAccountError = action.payload;
      })
      .addCase(uploadProfileImage.pending, (state, action) => {
        state.uploadProfileImageStatus = LOADING;
      })
      .addCase(uploadProfileImage.fulfilled, (state, action) => {
        state.uploadProfileImageStatus = SUCCEEDED;
        state.uploadedProfileImageName = action.payload;
      })
      .addCase(uploadProfileImage.rejected, (state, action) => {
        state.uploadProfileImageStatus = REJECTED;
        state.uploadProfileImageError = action.payload;
      })
      .addCase(updateUserProfile.pending, (state, action) => {
        state.updateUserProfileStatus = LOADING;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.updateUserProfileStatus = SUCCEEDED;
        state.me = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.updateUserProfileStatus = REJECTED;
        state.updateUserProfileError = action.payload;
      })
      .addCase(getMyReviews.pending, (state, action) => {
        state.getMyReviewsStatus = LOADING;
      })
      .addCase(getMyReviews.fulfilled, (state, action) => {
        state.getMyReviewsStatus = SUCCEEDED;
        state.myReviews = action.payload;
      })
      .addCase(getMyReviews.rejected, (state, action) => {
        state.getMyReviewsStatus = REJECTED;
        state.getMyReviewsError = action.payload;
      })
      .addCase(addExhibitionsBookmark.pending, (state, action) => {
        state.addExhibitionsBookmarkStatus = LOADING;
      })
      .addCase(addExhibitionsBookmark.fulfilled, (state, action) => {
        state.addExhibitionsBookmarkStatus = SUCCEEDED;
        state.me.ExhibitionBookmarked.push({
          id: action.payload.exhibitionsId,
        });
      })
      .addCase(addExhibitionsBookmark.rejected, (state, action) => {
        state.addExhibitionsBookmarkStatus = REJECTED;
        state.addExhibitionsBookmarkError = action.payload;
      })
      .addCase(removeExhibitionsBookmark.pending, (state, action) => {
        state.removeExhibitionsBookmarkStatus = LOADING;
      })
      .addCase(removeExhibitionsBookmark.fulfilled, (state, action) => {
        state.removeExhibitionsBookmarkStatus = SUCCEEDED;
        state.me.ExhibitionBookmarked = state.me.ExhibitionBookmarked.filter(
          (exhibition) => exhibition.id !== action.payload.exhibitionsId
        );
      })
      .addCase(removeExhibitionsBookmark.rejected, (state, action) => {
        state.removeExhibitionsBookmarkStatus = REJECTED;
        state.removeExhibitionsBookmarkError = action.payload;
      })
      .addCase(getExhibitionsScrapBook.pending, (state, action) => {
        state.getExhibitionsScrapBookStatus = LOADING;
      })
      .addCase(getExhibitionsScrapBook.fulfilled, (state, action) => {
        state.getExhibitionsScrapBookStatus = SUCCEEDED;
        state.exhibitionsScrapBook = action.payload;
      })
      .addCase(getExhibitionsScrapBook.rejected, (state, action) => {
        state.getExhibitionsScrapBookStatus = REJECTED;
        state.getExhibitionsScrapBookError = action.payload;
      })
      .addCase(removeExhibitionsScrapBook.pending, (state, action) => {
        state.removeExhibitionsScrapBookStatus = LOADING;
      })
      .addCase(removeExhibitionsScrapBook.fulfilled, (state, action) => {
        state.removeExhibitionsScrapBookStatus = SUCCEEDED;
        state.exhibitionsScrapBook = action.payload;
      })
      .addCase(removeExhibitionsScrapBook.rejected, (state, action) => {
        state.removeExhibitionsScrapBookStatus = REJECTED;
        state.removeExhibitionsScrapBookError = action.payload;
      })
      .addCase(getMyInquirys.pending, (state, action) => {
        state.getMyInquirysStatus = LOADING;
      })
      .addCase(getMyInquirys.fulfilled, (state, action) => {
        state.getMyInquirysStatus = SUCCEEDED;
        state.myInquirys = action.payload;
      })
      .addCase(getMyInquirys.rejected, (state, action) => {
        state.getMyInquirysStatus = REJECTED;
        state.getMyInquirysError = action.payload;
      }),
});

export default userSlice;
