
import React, { useState } from 'react'
import Image from 'next/image'

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, EffectFade, Autoplay, Mousewheel, Pagination, EffectFlip, EffectCube, EffectCoverflow } from "swiper";



export default function West() {
    return (
        <div className='sm:w-[65%] md:w-[75%]'>
            <div className='h-[40vh] md:h-[50vh] flex py-2'>
                {/* <Image src='/media/india.jpg' height={500} width={500} className='object-cover' /> */}
                <Swiper
                    effect={"coverflow"}
                    mousewheel={true}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}

                    // navigation={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    coverflowEffect={{
                        rotate: 80,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectFade, Autoplay, EffectFlip, EffectCube, Pagination, EffectCoverflow]}
                    className="swiper "
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                >

                    <SwiperSlide className="relative">
                        <img src="/media/bhutan/eastern/05.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/bhutan/western/01.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/bhutan/western/02.webp" alt="taj" className="object-cover " />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/bhutan/western/03.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/bhutan/western/04.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='max-h-[35vh] md:text-lg md:max-h-[35vh] overflow-y-auto py-2'>
                Western Bhutan is a region of stunning natural beauty, dotted with picturesque towns and villages that are steeped in tradition and culture. The area is home to some of the most important historical and cultural landmarks of the country, including the Punakha Dzong, a fortress-monastery that is a UNESCO World Heritage Site. The region is also famous for its traditional crafts, such as weaving and wood carving, and its vibrant festivals, which showcase the country's unique culture and traditions. With its stunning scenery, rich culture, and warm hospitality, western Bhutan is a must-visit destination for any traveler seeking an authentic and unforgettable experience.
            </div>
        </div>
    )
}
