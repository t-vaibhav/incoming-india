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


export default function Indgallery() {
    return (
        <section id='indgallery'>
            <div className=''>
                <div className=" flex justify-center items-center h-[100vh]">
                    <Swiper
                        effect={"fade"}
                        mousewheel={true}
                        grabCursor={true}
                        navigation={true}
                        autoplay={{
                            delay: 3500,
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
                            <img src="/media/india.jpg" alt="taj" className="object-contain" />
                            <div className="absolute bottom-0 left-0 right-0">

                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="relative">
                            <img src="/media/india1.jpg" alt="taj" className="object-contain" />
                            <div className="absolute bottom-0 left-0 right-0">

                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="relative">
                            <img src="/media/india2.jpg" alt="taj" className="object-contain" />
                            <div className="absolute bottom-0 left-0 right-0">

                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="relative">
                            <img src="/media/india3.jpg" alt="taj" className="object-contain" />
                            <div className="absolute bottom-0 left-0 right-0">

                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
        </section>
    )
}
