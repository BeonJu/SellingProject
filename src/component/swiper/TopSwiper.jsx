import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './topSwiper.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const topSwiper = () => {
  return (
    <div>
      <Swiper
        // spaceBetween={50}
        // slidesPerView={3}
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="topSwiper"
      >
        <SwiperSlide>
          <img src={require('../../image/1.jpg')} alt="Silde_1_img"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../image/2.jpg')} alt="Silde_2_img"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../image/3.png')} alt="Silde_3_img"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default topSwiper;
