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

export default function Annapurna() {
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
                        <img src="/media/nepal/annapurna/01.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/nepal/annapurna/02.jpg" alt="taj" className="object-cover " />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/nepal/annapurna/03.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/nepal/annapurna/04.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                </Swiper>
            </div>
            <div className='max-h-[35vh] md:max-h-[35vh] overflow-y-auto py-2'>
                The Annapurna Region in Nepal is a paradise for nature lovers, trekkers, and cultural enthusiasts. The region offers stunning vistas of the Annapurna mountain range, including the majestic Annapurna I and the iconic Machhapuchhre peak. Visitors can explore the diverse landscapes, from lush forests to barren deserts, and experience the unique traditions and lifestyle of ethnic communities like Gurungs and Thakalis. The region is also home to the beautiful Phewa Lake, where visitors can enjoy boating and witness the stunning reflections of the mountains on the water. The Annapurna Circuit and Annapurna Base Camp treks are some of the most popular trekking trails in the world, promising an unforgettable adventure.
            </div>
        </div>
    )
}
