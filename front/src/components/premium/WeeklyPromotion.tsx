import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import StoreItem from '../home/StoreItem';
import { useSelector } from 'react-redux';
import { getWeeklyPromotion } from '../../actions/product';
import shortid from 'shortid';
import { RootState } from '../../reducers';
import { useAppDispatch } from '../../../reduxToolkitStore';

const WeeklyPromotion = () => {
  const dispatch = useAppDispatch();
  const weeklyPromotionProducts = useSelector(
    (state: RootState) => state.product.weeklyPromotionProducts
  );
  useEffect(() => {
    dispatch(getWeeklyPromotion());
  }, []);

  return (
    <section className="weekly-promotion">
      <h3>Weekly Promotion ✨</h3>
      <div className="weekly-promotion-products">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {weeklyPromotionProducts.map((product) => {
            return (
              <SwiperSlide key={shortid.generate()}>
                <StoreItem {...product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default WeeklyPromotion;
