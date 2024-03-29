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



export default function Lha() {
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
                        <Image fill={true} src="/media/maldives/exp/04.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/maldives/exp/02.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/maldives/exp/05.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/maldives/exp/01.webp" alt="taj" className="object-cover" />
                    </SwiperSlide>



                    <SwiperSlide className="relative">
                        <Image fill={true} src="/media/maldives/exp/03.webp" alt="taj" className="object-cover " />
                    </SwiperSlide>




                </Swiper>
            </div>
            <div className='h-full md:pb-0 pb-5 text-lg md:text-lg md:max-h-[35vh] overflow-y-auto py-2'>
                Unwind in the serene and unspoiled Lhaviyani Atoll in the Maldives, where turquoise lagoons, lush vegetation, and pristine beaches await. The atoll is home to some of the best dive sites in the world, with vibrant coral gardens and an abundance of marine life. Stay in luxurious overwater villas or beachfront bungalows, indulge in mouth-watering cuisine, and relax with a range of spa treatments. Take part in exciting water sports, explore local fishing villages, or simply bask in the warm sunshine and let the natural beauty of Lhaviyani Atoll wash over you.        </div>
        </div>
    )
}




