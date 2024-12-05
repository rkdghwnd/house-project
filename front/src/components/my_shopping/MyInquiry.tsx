import { useEffect, useState } from 'react';
import Pagination from '../productions/Pagination';
import MyInquiryItem from './MyInquiryItem';
import { useSelector } from 'react-redux';
import { getMyInquirys } from '../../actions/user';
import { SUCCEEDED } from '../../datas/statusConstants';
import EmptyBox from '../users/EmptyBox';
import shortid from 'shortid';
import { useAppDispatch } from '../../../reduxToolkitStore';
import { RootState } from '../../reducers';

const MyInquiry = () => {
  const dispatch = useAppDispatch();
  const myInquirys = useSelector((state: RootState) => state.user.myInquirys);

  const updateInquiryStatus = useSelector(
    (state: RootState) => state.productions.updateInquiryStatus
  );
  const removeInquiryStatus = useSelector(
    (state: RootState) => state.productions.removeInquiryStatus
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
      {myInquirys.inquirys?.length === 0 ? (
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
