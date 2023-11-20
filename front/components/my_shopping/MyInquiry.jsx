import React, { useEffect, useState } from 'react';
import Pagination from '../productions/Pagination';
import MyInquiryItem from './MyInquiryItem';
import { useDispatch, useSelector } from 'react-redux';
import { getMyInquirys } from '../../actions/user';
import { LOADING, SUCCEEDED } from '../../datas/statusConstants';
import EmptyBox from '../users/EmptyBox';
import shortid from 'shortid';

const MyInquiry = () => {
  const dispatch = useDispatch();
  const { myInquirys, me } = useSelector((state) => state.user);
  const { updateInquiryStatus, removeInquiryStatus } = useSelector(
    (state) => state.productions
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMyInquirys({ query: `?page=1` }));
  }, []);

  useEffect(() => {
    if (updateInquiryStatus === SUCCEEDED) {
      dispatch(getMyInquirys({ query: `?page=${page}` }));
    }
  }, [updateInquiryStatus]);

  useEffect(() => {
    if (removeInquiryStatus === SUCCEEDED) {
      dispatch(getMyInquirys({ query: `?page=${page}` }));
    }
  }, [removeInquiryStatus]);

  return (
    <section className="my-inquiry">
      {myInquirys.reviews?.length === 0 ? (
        <EmptyBox message={'해당페이지에 작성한 문의가 없습니다.'} />
      ) : (
        myInquirys.inquirys?.map((inquiry) => {
          return <MyInquiryItem key={shortid.generate()} {...inquiry} />;
        })
      )}
      <Pagination
        totalCount={myInquirys?.count}
        countPerPage={5}
        actionFunction={getMyInquirys}
        page={page}
        setPage={setPage}
      />
    </section>
  );
};

export default MyInquiry;
