import React from 'react';
// import home from './home.css';
import TopSwiper from '../../component/swiper/TopSwiper';
import List from '../../component/list/List';
import TodaysProduct from '../../component/today/TodaysProduct';

const product = {
  id: 'DMDJ7E026-GRD',
  name: '고쉬 구스다운 남성 롱패딩',
  price: 590_000,
  sizes: [95, 100, 105, 110],
  images: [
    'images/DMDJ7E026-GRD_1.png',
    'images/DMDJ7E026-GRD_2.png',
    'images/DMDJ7E026-GRD_3.png',
    'images/DMDJ7E026-GRD_4.jpg',
    'images/DMDJ7E026-GRD_5.jpg',
    'images/DMDJ7E026-GRD_6.jpg',
    'images/DMDJ7E026-GRD_7.jpg',
    'images/DMDJ7E026-GRD_8.jpg',
    'images/DMDJ7E026-GRD_9.jpg',
    'images/DMDJ7E026-GRD_10.jpg',
    'images/DMDJ7E026-GRD_11.jpg',
    'images/DMDJ7E026-GRD_12.jpg',
    'images/DMDJ7E026-GRD_13.jpg',
  ],
  descriptions: [
    '고쉬 구스다운 롱패딩',
    '무릎까지 오는 롱기장으로 보온성에 최적화된 프리미엄 후드형 롱패딩',
    '탈부착 가능한 후드와 풍성한 리얼 라쿤퍼 적용',
    '좌측 소매에 아웃포켓과 프리미엄한 크레스트 심볼 와펜',
    '우측 소매에 탈부착 가능한 고급스러운 디스커버리 사각 로고 와펜',
    '프론트 지퍼와 스냅형의 이중 여밈으로 보온성 강화',
    '겨울 추위를 완벽하게 차단 할 수 있는 신축성 우수한 이너커프스 적용한 이중소매',
    '내구성 좋은 YKK 투웨이 지퍼를 적용하여 활동성을 강화하고 실용성을 증대',
    '소지품을 효율 적이고 간편하게 수납 할 수 있는 경량 스냅 사이드 포켓',
    '다운볼이 크고 필파워가 우수한 프리미엄 유러피안 구스다운 8020 충전재 사용으로 보온성과 경량성 강화',
    '미국 항국 우주국 나사의 트라이자 HEAT 테크놀로지 축열안감 적용하여 보온성 강화',
    '발수, 방풍, 생활방수, 소프트 터치의 경량한 기능성 소재',
    '편안한 착용감으로 활동성이 우수하고 여유있게 착장 가능한 세미오버핏',
  ],
  longImages: [
    'images/DMDDMDJ7E026-GRD_long_1.jpg',
    'images/DMDDMDJ7E026-GRD_long_2.jpg',
    'images/DMDDMDJ7E026-GRD_long_3.jpg',
  ],
};

const Home = () => {
  return (
    <div>
      <TopSwiper></TopSwiper>
      <TodaysProduct product={product}></TodaysProduct>
      <List></List>
    </div>
  );
};

export default Home;
