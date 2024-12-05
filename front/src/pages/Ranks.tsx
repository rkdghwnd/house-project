import React, { useEffect, useRef } from 'react';
import AppLayout from '../components/common/AppLayout';
import StoreItem from '../components/home/StoreItem';
import { useDispatch, useSelector } from 'react-redux';
import { getRanksProducts } from '../actions/product';
import { useLocation } from 'react-router-dom';
import shortid from 'shortid';
import { createInfiniteScrollObserver } from '../hooks/createInfiniteScrollObserver';
import { LOADING } from '../datas/statusConstants';
import RanksMenu from '../components/ranks/RanksMenu';
import RanksCategory from '../components/ranks/RanksCategory';
import Loading from '../components/common/Loading';
import { Helmet } from 'react-helmet-async';
import { RootState } from '../reducers';
import { useAppDispatch } from '../../reduxToolkitStore';

const Ranks = () => {
  const dispatch = useAppDispatch();
  const viewport = useRef(null);
  const scrollTarget = useRef(null);

  const ranksProducts = useSelector(
    (state: RootState) => state.product.ranksProducts
  );
  const ranksTime = useSelector((state: RootState) => state.product.ranksTime);
  const hasMoreRanksProducts = useSelector(
    (state: RootState) => state.product.hasMoreRanksProducts
  );
  const getRanksProductsStatus = useSelector(
    (state: RootState) => state.product.getRanksProductsStatus
  );

  const location = useLocation();

  const isActive = location.search.includes('?alltime=true');

  useEffect(() => {
    const prefix = location.search.includes('?') ? '&' : '?';
    const query = `${location.search}${prefix}page=1`;
    dispatch(
      getRanksProducts({
        query,
      })
    );
  }, [location.search]);

  useEffect(() => {
    // 페이지 + 배송필터 + 정렬필터
    const page = Math.floor(ranksProducts.length / 12) + 1;
    const prefix = location.search.includes('?') ? '&' : '?';
    const query = `${location.search.split('page=')[0]}${prefix}page=${page}`;

    const io = createInfiniteScrollObserver(
      viewport,
      hasMoreRanksProducts,
      getRanksProductsStatus,
      scrollTarget,
      dispatch,
      getRanksProducts,
      query
    );

    return () => io && io.disconnect(); // 모든 요소의 관찰을 중지
  }, [
    viewport,
    scrollTarget,
    getRanksProductsStatus,
    hasMoreRanksProducts,
    ranksProducts,
  ]);

  return (
    <>
      <Helmet>
        <title>내일의집 - 베스트</title>
      </Helmet>
      <AppLayout>
        <main className="ranks">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <RanksMenu />
                {isActive && <RanksCategory />}
                <div className="ranks-header">{ranksTime} 기준</div>
                <section className="ranks-products">
                  {ranksProducts.map((product) => {
                    return <StoreItem key={shortid.generate()} {...product} />;
                  })}
                </section>
                <Loading loadProductsStatus={getRanksProductsStatus} />
                <div
                  ref={
                    hasMoreRanksProducts &&
                    !(getRanksProductsStatus === LOADING)
                      ? scrollTarget
                      : undefined
                  }
                />
              </div>
            </div>
          </div>
        </main>
      </AppLayout>
    </>
  );
};

export default Ranks;
