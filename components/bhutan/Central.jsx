
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



export default function Central() {
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
                        <img src="/media/india.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india1.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india2.jpg" alt="taj" className="object-cover " />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/taj.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='max-h-[35vh] md:max-h-[35vh] md:text-lg overflow-y-auto py-2'>
                Central Bhutan is a region of immense natural beauty that is often referred to as the spiritual heartland of the country. It is home to some of the most important Buddhist sites in the country, including the sacred Tiger's Nest monastery. The region is also known for its pristine forests, crystal-clear rivers, and stunning mountain ranges, making it a paradise for nature lovers. With its rich cultural heritage, scenic beauty, and warm hospitality, central Bhutan offers visitors an unforgettable experience that is sure to leave them with lasting memories.
            </div>
        </div>
    )
}
