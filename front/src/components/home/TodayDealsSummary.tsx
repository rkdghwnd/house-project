import { useEffect } from 'react';
import HotdealStoreItem from '../common/HotdealStoreItem';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStoreHotdeals } from '../../actions/product';
import shortid from 'shortid';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const TodayDealsSummary = () => {
  const dispatch = useAppDispatch();
  const storeHotdeals = useSelector(
    (state: RootState) => state.product.storeHotdeals
  );

  useEffect(() => {
    dispatch(getStoreHotdeals());
  }, []);

  return (
    <section className="today-deals-summary">
      <div className="today-deals-summary-header">
        <span className="today-deals-summary-header-title">오늘의 딜</span>{' '}
        <Link to="/today_deals">더보기</Link>
      </div>
      <div className="today-deals-summary-items">
        {storeHotdeals.map((product) => {
          return <HotdealStoreItem key={shortid.generate()} {...product} />;
        })}
      </div>
      <div className="today-deals-mobile-button">
        <NavLink to="/today_deals">
          <button className="btn-48 btn-secondary">
            <span>오늘의딜 더보기</span>&nbsp;
            <i className="ic-chevron"></i>
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default TodayDealsSummary;
