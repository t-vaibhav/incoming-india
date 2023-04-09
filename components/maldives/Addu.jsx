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



export default function Addu() {
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
                        <Image fill={true} src="/media/maldives/exp/02.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/maldives/exp/03.webp" alt="taj" className="object-cover " />
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/maldives/exp/04.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>




                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/maldives/exp/01.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>









                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/maldives/exp/05.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>



                </Swiper>
            </div>
            <div className='h-full md:pb-0 pb-5 text-lg md:text-lg md:max-h-[35vh] overflow-y-auto py-2'>
                Experience the vibrant and unique culture of Addu Atoll in the Maldives, where traditional island life meets modern amenities. The atoll is home to fascinating historical sites, including World War II remnants and ancient Buddhist ruins. Stay in luxurious beachfront resorts, indulge in delectable cuisine, and enjoy a range of water sports and outdoor activities. Discover the diverse marine life of the atoll's clear waters, and explore the lush greenery and stunning beaches. Immerse yourself in the local traditions and hospitality, and create unforgettable memories in this hidden gem of the Maldives.        </div>

        </div>
    )
}




