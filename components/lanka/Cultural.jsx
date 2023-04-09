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

export default function Cultural() {
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
                        <Image fill={true} src="/media/lanka/cultural/01.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/lanka/cultural/02.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/lanka/cultural/03.webp" alt="taj" className="object-cover " />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/lanka/cultural/04.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/lanka/cultural/05.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/lanka/cultural/06.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/lanka/cultural/07.webp" alt="taj" className="object-cover " />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/lanka/cultural/08.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/lanka/cultural/09.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='h-full md:pb-0 pb-5 md:max-h-[35vh] md:text-lg overflow-y-auto py-2'>
                The cultural triangle of Sri Lanka, comprising the ancient cities of Anuradhapura, Polonnaruwa, and Kandy, is a UNESCO World Heritage Site that showcases the country's rich history and cultural heritage. It boasts stunning architectural wonders, traditional rituals, and important Buddhist shrines. Visitors can witness traditional dance performances and art exhibitions that showcase Sri Lanka's vibrant culture. The region's tranquil atmosphere and stunning landscapes make it an ideal destination for relaxation and reflection, while also being a hub of wildlife and natural beauty.
            </div>
        </div>
    )
}
