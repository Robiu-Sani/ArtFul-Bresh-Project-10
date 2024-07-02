// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="w-full relative min-h-screen z-0 animate__animated animate__fadeInDown">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full z-10 sliderHeight"
      >
        <SwiperSlide className="min-h-full">
          <div
            className="min-w-full flex justify-center items-center customBg min-h-screen"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image1})`,
            }}
          >
            <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
              <h1 className=" text-3xl sm:text-6xl text-center text-white font-bold my-5">
                The Serenity of Mountain View Canvas Art
              </h1>
              <p className="text-center text-xl mb-4 text-white">
                Mountain view canvas art transports viewers to breathtaking
                vistas, where towering peaks meet the endless expanse of the sky
                in a harmonious dance of natures grandeur
              </p>
              <Link
                to={`/carftItem`}
                className="btn text-xl hover:bg-gray-500 text-white w-[200px]  bg-transparent"
              >
                Estates
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-full">
          <div
            className="min-w-full flex justify-center items-center customBg min-h-screen"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image2})`,
            }}
          >
            <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
              <h1 className="text-3xl sm:text-6xl text-center text-white font-bold my-5">
                Exploring the Timeless Elegance of Architectural Charcoal
              </h1>
              <p className="text-center text-xl mb-4 text-white">
                Architectural charcoal, renowned for its versatility and
                sophistication, stands as a hallmark in the realm of
                architectural design.
              </p>
              <Link
                to={`/carftItem`}
                className="btn text-xl hover:bg-gray-500 text-white w-[200px]  bg-transparent"
              >
                Estates
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-full">
          <div
            className="min-w-full flex justify-center items-center customBg min-h-screen"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image3})`,
            }}
          >
            <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
              <h1 className="text-3xl sm:text-6xl text-center text-white font-bold my-5">
                The Artistry of Figure Charcoal Sketches
              </h1>
              <p className="text-center text-xl mb-4 text-white">
                Figure charcoal sketches represent a timeless form of artistic
                expression, where lines converge to portray the essence of human
                form and emotion.
              </p>
              <Link
                to={`/carftItem`}
                className="btn text-xl hover:bg-gray-500 text-white w-[200px]  bg-transparent"
              >
                Estates
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-full">
          <div
            className="min-w-full flex justify-center items-center customBg min-h-screen"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.322)),url(${image4})`,
            }}
          >
            <div className="p-4 animate__animated animate__fadeInDown py-10 flex justify-center items-center flex-col max-w-[750px]">
              <h1 className="text-3xl sm:text-6xl text-center text-white font-bold my-5">
                Unveiling the Depths: Exploring Abstract Oil Painting
              </h1>
              <p className="text-center text-xl mb-4 text-white">
                Abstract oil painting transcends conventional boundaries,
                inviting viewers into a world of boundless imagination and
                emotion.
              </p>
              <Link
                to={`/carftItem`}
                className="btn text-xl hover:bg-gray-500 text-white w-[200px]  bg-transparent"
              >
                Estates
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
