import React from "react";
import logo from "./logo.png"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image"
import slider1 from "./slider1.jpg"
import slider2 from "./slider2.jpg"
import slider3 from "./slider3.jpg"
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function Itenary() {
  return (
    <div className="relative h-[50vh] lg:h-[100vh]">
      <div className="flex flex-row top-[-30px] md:scale-[140%] z-10 md:left-[120px] left-[calc(50vw-160px)] absolute bg-[#e7cb4e] font-semibold h-[60px] md:h-[60px]w-fit">
        <div className="w-auto h-auto">
          <Image
            src={logo}
            alt="Your Image"
            width={60}
            height={60}
            className='w-auto h-[60px] pl-1'
          />
        </div>
        <div className=" px-4 bg-[#ffffff] mx-0 w-auto block align py-2 text-slate-700">
          <h1 className="font-rajdhani">TOUR PACKAGES</h1>
          <h3 className="text-xs block">UNIQUE ITINERARIES & CULTURAL GEMS</h3>
        </div>
      </div>
      <div className="basis-1/2 hidden md:flex"></div>
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={slider1}
            alt="Your Image"
            width={1920}
            height={1080}
            className=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider2}
            alt="Your Image"
            width={1920}
            height={1080}
            className=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider3}
            alt="Your Image"
            width={1920}
            height={1080}
            className=''
          />
        </SwiperSlide>
      </Swiper >
    </div>
  );
}
