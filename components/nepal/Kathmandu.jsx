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

export default function Kathmandu() {
    return (
        <div className='sm:w-[65%] md:w-[75%]'>
            <div className='h-[40vh] md:h-[50vh] flex py-2'>
                {/* <Image src='/media/india.jpg' height={500} width={500} className='object-cover' /> */}
                <Swiper
                    effect={"coverflow"}
                    mousewheel={true}
                    grabCursor={true}
                    centeredSlides={true}

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
                        <Image fill={true} src="/media/nepal/kathmandu/01.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/nepal/kathmandu/02.webp" alt="taj" className="object-cover " />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/nepal/kathmandu/03.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/nepal/kathmandu/04.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/nepal/kathmandu/05.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/nepal/kathmandu/06.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/nepal/kathmandu/07.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/nepal/kathmandu/08.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/nepal/kathmandu/09.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                </Swiper>
            </div>
            <div className='h-full md:pb-0 pb-5 md:text-lg md:max-h-[35vh] overflow-y-auto py-2'>
                Kathmandu Valley Region is a traveler's delight with its vibrant culture, rich history, and stunning architecture. The region is home to seven UNESCO World Heritage Sites, including the iconic Swayambhunath Stupa, Pashupatinath Temple, and Durbar Squares of Kathmandu, Patan, and Bhaktapur. Visitors can wander through the narrow streets, try the delicious street food, and shop for handicrafts at local markets. With its warm hospitality and a blend of tradition and modernity, Kathmandu Valley Region promises an unforgettable experience for foreign tourists.            </div>
        </div>
    )
}
