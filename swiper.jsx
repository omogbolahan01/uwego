import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/Frame 91.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/Frame 92.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/Frame 93.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/Frame 91.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/Frame 92.png" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/Frame 93.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
