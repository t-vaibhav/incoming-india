import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri'

import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";





// import required modules
import { EffectCards, Navigation, EffectFade, Autoplay, Mousewheel, Pagination, EffectFlip } from "swiper";







export default function Indhero() {

    return (
        <section>


            <div className=''>
                <div className=" flex justify-center items-center h-[100vh]">

                    <Swiper
                        effect={"fade"}
                        mousewheel={true}
                        grabCursor={true}
                        navigation={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, EffectFade, Autoplay, EffectFlip]}
                        className="swiper "
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                    >

                        <SwiperSlide className="relative">
                            <img src="/media/india.jpg" alt="taj" className="object-contain" />
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className='text-center text-white'>
                                    <p className="">Scroll Down!</p>
                                    <div className='flex justify-center animate-bounce py'>
                                        <RiArrowDropDownLine className='text-5xl font-extrathin' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="relative">
                            <img src="/media/india1.jpg" alt="taj" className="object-contain" />
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className='text-center text-white'>
                                    <p className="">Scroll Down!</p>
                                    <div className='flex justify-center animate-bounce py'>
                                        <RiArrowDropDownLine className='text-5xl font-extrathin' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="relative">
                            <img src="/media/india2.jpg" alt="taj" className="object-contain" />
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className='text-center text-white'>
                                    <p className="">Scroll Down!</p>
                                    <div className='flex justify-center animate-bounce py'>
                                        <RiArrowDropDownLine className='text-5xl font-extrathin' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="relative">
                            <img src="/media/india3.jpg" alt="taj" className="object-contain" />
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className='text-center text-white'>
                                    <p className="">Scroll Down!</p>
                                    <div className='flex justify-center animate-bounce py'>
                                        <RiArrowDropDownLine className='text-5xl font-extrathin' />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>

            {/* <Carousel showThumbs={false} infiniteLoop={true} swipeable={true} autoPlay={true} showStatus={false}>
                <div className='h-[100vh] w-[100vw]'>
                    <Image src="/media/india.jpg" fill={true} className='object-cover' alt='text' />
                    <div className='relative flex justify-center w-full '>
                        <p className=" absolute text-center lg:text-xl mg:text-lg sm:text-sm md:bottom-10 bottom-8 bg-black/60 py-1 min-w-full font-semibold text-slate-100">Legend 1</p>
                    </div>
                </div>


                <div className='h-[100vh] w-[100vw]'>
                    <Image src="/media/bhutan.jpg " fill={true} className='object-cover' alt='text' />
                    <div className='relative flex justify-center w-full '>
                        <p className=" absolute text-center lg:text-xl mg:text-lg sm:text-sm md:bottom-10 bottom-8 bg-black/60 py-1 min-w-full font-semibold text-slate-100">Legend 2</p>
                    </div>
                </div>


                <div className='h-[100vh] w-[100vw]'>
                    <Image src="/media/nepal.jpg" fill={true} className='object-cover' alt='text' />
                    <div className='relative flex justify-center w-full '>
                        <p className=" absolute text-center lg:text-xl mg:text-lg sm:text-sm md:bottom-10 bottom-8 bg-black/60 py-1 min-w-full font-semibold text-slate-100">Legend 3</p>
                    </div>
                </div>


                <div className='h-[100vh] w-[100vw]'>
                    <Image src="/media/lanka.jpg" fill={true} className='object-cover' alt='text' />
                    <div className='relative flex justify-center w-full '>
                        <p className=" absolute text-center lg:text-xl mg:text-lg sm:text-sm md:bottom-10 bottom-8 bg-black/60 py-1 min-w-full font-semibold text-slate-100">Legend 3</p>
                    </div>
                </div>


                <div className='h-[100vh] w-[100vw]'>
                    <Image src="/media/maldives.jpg" fill={true} className='object-cover' alt='text' />
                    <div className='relative flex justify-center w-full '>
                        <p className=" absolute text-center lg:text-xl mg:text-lg sm:text-sm md:bottom-10 bottom-8 bg-black/60 py-1 min-w-full font-semibold text-slate-100">Legend 3</p>
                    </div>
                </div>
            </Carousel> */}



        </section >
    )
}
