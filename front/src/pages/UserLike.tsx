import { useEffect } from 'react';
import UserProfile from '../components/users/UserProfile';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMyLiked } from '../actions/user';
import shortid from 'shortid';
import ReviewCard from '../components/productions/ReviewCard';
import Pagination from '../components/productions/Pagination';
import { SUCCEEDED } from '../datas/statusConstants';
import EmptyBox from '../components/users/EmptyBox';
import { RootState } from '../reducers';
import { useAppDispatch } from '../../reduxToolkitStore';

const UserLike = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const me = useSelector((state: RootState) => state.user.me);
  const myLiked = useSelector((state: RootState) => state.user.myLiked);
  const getMyInfoStatus = useSelector(
    (state: RootState) => state.user.getMyInfoStatus
  );

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
              actionFunction={getMyLiked}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserLike;
