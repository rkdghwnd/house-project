import React, { useEffect } from 'react';
import UserProfile from '../components/users/UserProfile';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyLiked } from '../actions/user';
import shortid from 'shortid';
import ReviewCard from '../components/productions/ReviewCard';
import Pagination from '../components/productions/Pagination';
import { SUCCEEDED } from '../hooks/statusConstants';
import EmptyBox from '../components/users/EmptyBox';

const UserLike = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me, myLiked, getMyInfoStatus } = useSelector((state) => state.user);

  useEffect(() => {
    if (getMyInfoStatus === SUCCEEDED && !me) {
      navigate('/');
    }
  }, [me, getMyInfoStatus]);

  useEffect(() => {
    dispatch(
      getMyLiked({
        query: '?page=1',
      })
    );
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-lg-4">
          <UserProfile />
        </div>
        <div className="col-sm-4 col-lg-8">
          <section className="user-like">
            <ul>
              {myLiked?.liked?.length === 0 ? (
                <EmptyBox message={'좋아요한 리뷰가 없습니다.'} />
              ) : (
                myLiked?.liked?.map((review) => {
                  return (
                    <li key={shortid.generate()}>
                      <ReviewCard {...review} />
                    </li>
                  );
                })
              )}
            </ul>
            <Pagination
              totalCount={myLiked?.count}
              countPerPage={5}
              currentPage={myLiked?.page}
              actionFunction={getMyLiked}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserLike;
