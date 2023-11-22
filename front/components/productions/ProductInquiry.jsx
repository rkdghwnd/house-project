import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import InquiryCard from './InquiryCard';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import Pagination from './Pagination';
import { getProductionInquiry } from '../../actions/productions';
import modalSlice from '../../reducers/modalSlice';
import productionsSlice from '../../reducers/productionsSlice';
import { LOADING, SUCCEEDED } from '../../datas/statusConstants';

const ProductInquiry = (props, ref) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const {
    productionInquiry,
    productions,
    writeInquiryStatus,
    updateInquiryStatus,
    removeInquiryStatus,
  } = useSelector((state) => state.productions);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (productions?.id) {
      dispatch(
        getProductionInquiry({
          productId: productions.id,
          query: `?page=1`,
        })
      );
    }
  }, [productions.id]);

  useEffect(() => {
    if (writeInquiryStatus === SUCCEEDED) {
      dispatch(
        getProductionInquiry({
          productId: productions.id,
          query: `?page=1`,
        })
      );
      setPage(1);
    }
  }, [writeInquiryStatus]);

  useEffect(() => {
    if (updateInquiryStatus === SUCCEEDED) {
      dispatch(
        getProductionInquiry({
          productId: productions.id,
          query: `?page=${page}`,
        })
      );
    }
  }, [updateInquiryStatus]);

  useEffect(() => {
    if (removeInquiryStatus === SUCCEEDED) {
      dispatch(
        getProductionInquiry({
          productId: productions.id,
          query: `?page=${page}`,
        })
      );
    }
  }, [removeInquiryStatus]);

  const openWritingInquiryForm = useCallback(() => {
    if (me) {
      dispatch(
        productionsSlice.actions.updateWritingInquiryFormData({
          id: null,
          question_type: '상품',
          question: '',
          is_secret: false,
          productId: productions.id,
        })
      );
      dispatch(
        modalSlice.actions.openWritingInquiryForm({
          mode: 'create',
        })
      );
    } else {
      dispatch(modalSlice.actions.openLogInModal());
    }
  }, [me, productions.id]);

  const inquiryList = useMemo(() => {
    if (productionInquiry.inquiry?.length === 0) {
      return <p className="inquiry-empty">문의 내역이 없습니다.</p>;
    } else {
      return productionInquiry?.inquiry?.map((question) => {
        return (
          <li key={shortid.generate()} className="inquiry-item">
            <InquiryCard {...question} />
          </li>
        );
      });
    }
  }, [productionInquiry.inquiry]);

  return (
    <>
      <section
        className="product-section product-inquiry is-open"
        id="product-inquiry"
        role="tabpanel"
        ref={ref}
      >
        <header className="product-section-header">
          <h1 className="title">문의</h1>
          <strong className="badge" aria-label="96개">
            {productionInquiry?.inquiry?.length}
          </strong>

          <button className="text-button" onClick={openWritingInquiryForm}>
            문의하기
          </button>
          <button
            className="icon-button sm-only"
            type="button"
            aria-label="더보기"
          >
            <i className="ic-chevron" aria-hidden></i>
          </button>
        </header>

        <div className="product-section-content">
          {inquiryList}
          <Pagination
            totalCount={productionInquiry.count || 0}
            countPerPage={5}
            actionFunction={getProductionInquiry}
            productId={productions.id}
            page={page}
            setPage={setPage}
          />
        </div>
      </section>
      <div className="product-section-divider sm-only" aria-hidden></div>
    </>
  );
};

export default forwardRef(ProductInquiry);
