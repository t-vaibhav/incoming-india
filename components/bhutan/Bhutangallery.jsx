import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri'

import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";





// import required modules
import { EffectCards, Navigation, EffectFade, Autoplay, Mousewheel, Pagination, EffectFlip } from "swiper";


export default function Bhutangallery() {
    return (
        <section id='bhutangallery'>
            <div className=''>
                <div className=" flex justify-center items-center h-[50vh] md:h-[100vh]">
                    <Swiper
                        effect={"fade"}
                        mousewheel={true}
                        grabCursor={true}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, EffectFade, Autoplay, EffectFlip]}
                        className="swiper "
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                    >

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/01.webp" alt="taj" className="object-cover" />

                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/02.webp" alt="taj" className="object-cover" />
                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/03.webp" alt="taj" className="object-cover" />
                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/04.webp" alt="taj" className="object-cover" />
                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/05.webp" alt="taj" className="object-cover" />
                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/06.webp" alt="taj" className="object-cover" />
                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/07.webp" alt="taj" className="object-cover" />
                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/08.webp" alt="taj" className="object-cover" />
                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/09.webp" alt="taj" className="object-cover" />
                        </SwiperSlide>

                        <SwiperSlide className="relative">
                            <img src="/media/bhutan/gallery/10.webp" alt="taj" className="object-cover" />
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </section>
    )
}
