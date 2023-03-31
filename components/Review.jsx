import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Review() {
  return (
    <div className="bg-slate-600">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="flex items-center mb-4">
          <div className="card bg-base-100 bg-opacity-80 rounded-xl backdrop-blur-lg w-auto drop-shadow-2xl mx-2 my-4 h-auto">
            <figure className="px-10 pt-10 h-auto">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="rounded-full w-[80px] h-auto"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-sky-400">Ramesh</h2>
              <h4 className="card-title text-sky-200 text-sm">India</h4>
              <q className="text-slate-400">
                If a dog chews shoes whose shoes does he choose?
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center mb-4">
          <div className="card bg-base-100 bg-opacity-80 rounded-xl backdrop-blur-lg w-auto drop-shadow-2xl mx-2 my-4 h-auto">
            <figure className="px-10 pt-10 h-auto">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="rounded-full w-[80px] h-auto"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-sky-400">Ramesh</h2>
              <h4 className="card-title text-sky-200 text-sm">India</h4>
              <q className="text-slate-400">
                If a dog chews shoes whose shoes does he choose?
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center mb-4">
          <div className="card bg-base-100 bg-opacity-80 rounded-xl backdrop-blur-lg w-auto drop-shadow-2xl mx-2 my-4 h-auto">
            <figure className="px-10 pt-10 h-auto">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="rounded-full w-[80px] h-auto"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-sky-400">Ramesh</h2>
              <h4 className="card-title text-sky-200 text-sm">India</h4>
              <q className="text-slate-400">
                If a dog chews shoes whose shoes does he choose?
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center mb-4">
          <div className="card bg-base-100 bg-opacity-80 rounded-xl backdrop-blur-lg w-auto drop-shadow-2xl mx-2 my-4 h-auto">
            <figure className="px-10 pt-10 h-auto">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="rounded-full w-[80px] h-auto"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-sky-400">Ramesh</h2>
              <h4 className="card-title text-sky-200 text-sm">India</h4>
              <q className="text-slate-400">
                If a dog chews shoes whose shoes does he choose?
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center mb-4">
          <div className="card bg-base-100 bg-opacity-80 rounded-xl backdrop-blur-lg w-auto drop-shadow-2xl mx-2 my-4 h-auto">
            <figure className="px-10 pt-10 h-auto">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="rounded-full w-[80px] h-auto"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-sky-400">Ramesh</h2>
              <h4 className="card-title text-sky-200 text-sm">India</h4>
              <q className="text-slate-400">
                If a dog chews shoes whose shoes does he choose?
              </q>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center mb-4">
          <div className="card bg-base-100 bg-opacity-80 rounded-xl backdrop-blur-lg w-auto drop-shadow-2xl mx-2 my-4 h-auto">
            <figure className="px-10 pt-10 h-auto">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="rounded-full w-[80px] h-auto"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-sky-400">Ramesh</h2>
              <h4 className="card-title text-sky-200 text-sm">India</h4>
              <q className="text-slate-400">
                If a dog chews shoes whose shoes does he choose?
              </q>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
