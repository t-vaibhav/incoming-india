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



export default function North() {
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
                        <Image src="/media/india/northernind/01.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/northernind/02.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/northernind/03.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/northernind/04.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/northernind/05.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/northernind/06.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/northernind/07.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/northernind/08.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/09.jpg" alt="taj" height={500} width={800} className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/northernind/10.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/northernind/11.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>



                </Swiper>
            </div>
            <div className='max-h-[35vh] md:text-lg text-lg md:max-h-[35vh] overflow-y-auto py-2'>
                With its crystal-clear waters and pristine white sand beaches, North Atoll in the Maldives is a tropical paradise like no other. Immerse yourself in a world of luxury and relaxation, where every need is catered for and every desire fulfilled. Snorkel among vibrant coral reefs, bask in the warm sunshine, and indulge in delicious cuisine while surrounded by breathtaking natural beauty. Whether you're seeking adventure or simply looking to unwind, North Atoll is the perfect destination for an unforgettable vacation.
            </div>
        </div>

    )
}
