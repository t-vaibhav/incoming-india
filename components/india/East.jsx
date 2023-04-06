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



export default function East() {




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
                        <Image src="/media/india/easternind/01.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/easternind/07.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/easternind/02.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/easternind/03.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>



                    <SwiperSlide className="relative">
                        <Image src="/media/india/easternind/05.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>


                    <SwiperSlide className="relative">
                        <Image src="/media/india/easternind/04.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>




                    <SwiperSlide className="relative">
                        <Image src="/media/india/easternind/06.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>




                    <SwiperSlide className="relative">
                        <Image src="/media/india/easternind/08.jpg" height={500} width={800} alt="taj" className="object-cover" />
                    </SwiperSlide>



                </Swiper>
            </div>
            <div className='max-h-[35vh]  text-lg md:max-h-[35vh] overflow-y-auto py-2'>\
                Welcome to the eastern part of India, where diverse cultures and natural wonders await! Explore the majestic Himalayas in Darjeeling, witness the beauty of the Sun Temple in Konark, and take a boat ride through the tranquil waters of Chilika Lake. Indulge in the mouth-watering cuisine of Kolkata and experience the colorful Durga Puja festival. Visit the ancient Buddhist monasteries in Sikkim and witness the royal heritage of Rajasthan. Come, discover the rich history and hospitality of Eastern India and create memories to cherish for a lifetime!
            </div>
        </div>

    )
}
