import Swiper from 'swiper';
import 'swiper/react';
import { SwiperModule } from 'swiper/types';

declare module 'swiper/react' {
  export interface SwiperSlideProps {
    spaceBetween?: number;
    thumbs?: { swiper: Swiper | null };
    modules?: [] | SwiperModule[];
    navigation?: boolean;
    width?: number;
  }
}
