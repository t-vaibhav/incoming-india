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



export default function South() {
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
                        <img src="/media/india/southernind/01.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/southernind/02.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/southernind/03.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/southernind/04.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/southernind/05.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/southernind/06.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    {/* <SwiperSlide className="relative">
                        <img src="/media/india/southernind/08.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide> */}


                    <SwiperSlide className="relative">
                        <img src="/media/india/southernind/07.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/southernind/08.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>



                </Swiper>
            </div>
            <div className='max-h-[35vh] text-lg md:max-h-[35vh] overflow-y-auto py-2'>
                Welcome to South India, where every corner is a sensory delight! Discover ancient temples, pristine beaches, lush greenery, and mouth-watering cuisine. Lose yourself in the intricate designs of the famous Hampi ruins or the awe-inspiring Meenakshi Temple. Take a houseboat ride through the serene backwaters of Kerala or explore the bustling city of Bangalore. Indulge in the flavors of dosas, idlis, and spicy curries while sipping on a refreshing coconut water. Come experience the warmth and hospitality of South India and create memories that will last a lifetime!            </div>
        </div>

    )
}
