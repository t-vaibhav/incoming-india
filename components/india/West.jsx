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
                        <img src="/media/india/westernind/01.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/westernind/02.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/westernind/03.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/westernind/04.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    {/* <SwiperSlide className="relative">
                        <img src="/media/india/westernind/05.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide> */}


                    <SwiperSlide className="relative">
                        <img src="/media/india/westernind/06.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/westernind/07.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/westernind/08.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/westernind/09.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <img src="/media/india/westernind/10.jpg" alt="taj" className="object-cover" />
                    </SwiperSlide>




                </Swiper>
            </div>
            <div className='max-h-[35vh] md:max-h-[35vh] overflow-y-auto py-2'>
                Welcome to Western India, where the sun, sand, and sea come together to create a mesmerizing experience! Relax on the pristine beaches of Goa, explore the majestic palaces of Rajasthan, and marvel at the intricate carvings of the Ajanta and Ellora Caves. Indulge in the vibrant culture and delicious cuisine of Maharashtra, Gujarat, and Rajasthan. Take a safari through the Ranthambore National Park and spot the majestic Bengal tiger. Witness the colorful festivals and immerse yourself in the warm hospitality of Western India. Come, discover the enchanting beauty of this region and make memories to last a lifetime!            </div>
        </div>

    )
}
