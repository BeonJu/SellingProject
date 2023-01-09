import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';

import 'swiper/scss';
import 'swiper/scss/pagination';
import '../../stylesheets/home/TodaysProduct.scss';

function TodaysProduct({ product }) {
  const { id, name, price, images } = product;
  const mainImg = images[0];
  const subImages = [...images.slice(1)];
  return (
    <div className="todays-product">
      <div className="todays-product__header header">
        <h3 className="header__title">Today's Product</h3>
      </div>
      <div className="todyas-product__body body">
        <div className="body__box body__box--left">
          <Link to={`product/${id}`}>
            <img src={mainImg} alt={mainImg} />
          </Link>
        </div>
        <div className="body__box body__box--right">
          <div className="description">
            <Link className="description__link" to={`product/${id}`}>
              <div className="description__prod-name">{name}</div>
              <div className="description__price">{price}원</div>
            </Link>
          </div>
          <div className="swiper-box">
            <Swiper
              modules={[Pagination]}
              spaceBetween={0}
              slidesPerView={3}
              pagination={{ dynamicBullets: true }}
            >
              {subImages.map((img, i) => (
                <SwiperSlide zoom={true} key={`slide(${img})`}>
                  <img src={img} alt={img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysProduct;
