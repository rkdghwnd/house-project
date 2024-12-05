import { useEffect, useState } from 'react';
import Pagination from '../components/productions/Pagination';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { getMyReviews } from '../actions/user';
import { SUCCEEDED } from '../datas/statusConstants';
import MyReviewItem from '../components/users_reviews/MyReviewItem';
import EmptyBox from '../components/users/EmptyBox';
import { useAppDispatch } from '../../reduxToolkitStore';
import { RootState } from '../reducers';

const MyReviews = () => {
  const dispatch = useAppDispatch();
  const myReviews = useSelector((state: RootState) => state.user.myReviews);

  const updateReviewStatus = useSelector(
    (state: RootState) => state.productions.updateReviewStatus
  );
  const removeReviewStatus = useSelector(
    (state: RootState) => state.productions.removeReviewStatus
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMyReviews({ query: `?page=1` }));
  }, []);

  useEffect(() => {
    if (updateReviewStatus === SUCCEEDED) {
      dispatch(getMyReviews({ query: `?page=${page}` }));
    }
  }, [updateReviewStatus]);

  useEffect(() => {
    if (removeReviewStatus === SUCCEEDED) {
      dispatch(getMyReviews({ query: `?page=${page}` }));
    }
  }, [removeReviewStatus]);

  return (
    <section className="my-reviews">
      <article className="my-reviews-main">
        <div className="my-reviews-main-contents">
          {myReviews.reviews?.length === 0 ? (
            <EmptyBox message={'해당 페이지에 작성한 리뷰가 없습니다.'} />
          ) : (
            myReviews.reviews?.map((review) => {
              return <MyReviewItem key={shortid.generate()} {...review} />;
            })
          )}

          <Pagination
            totalCount={myReviews.count}
            countPerPage={5}
            actionFunction={getMyReviews}
            page={page}
            setPage={setPage}
          />
        </div>
      </article>
    </section>
  );
};

export default MyReviews;
