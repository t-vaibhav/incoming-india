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
                        <img src="/media/india/northernind/01.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/02.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/03.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/04.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/05.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/06.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/07.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/08.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/09.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/10.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/northernind/11.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>



                </Swiper>
            </div>
            <div className='max-h-[35vh] text-lg md:max-h-[35vh] overflow-y-auto py-2'>
                Welcome to Northern India, a land of diverse cultures, traditions, and landscapes. Explore the grandeur of the Taj Mahal, witness the serene Ganges river, savor the spicy street food, and get enchanted by the vibrant colors of the local bazaars. Immerse yourself in the rich history of forts and palaces, soak in the spiritual aura of temples and ashrams, and indulge in the warm hospitality of the locals. Experience the thrill of adventure sports in the Himalayas, or simply relax in the tranquil hill stations. Come, discover the magic of Northern India, a truly unforgettable destination.
            </div>
        </div>

    )
}
