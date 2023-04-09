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





const mystyle = {
    backgroundImage: 'url("/media/india-cover.webp")',
    height: '100vh',
    backgroundAttachment: 'fixed',
}

export default function Indhero() {

    return (
        <section id="indhero" className="bg-center bg-cover bg-no-repeat" style={mystyle}>
            <div className="h-screen bg-black/40 flex justify-center items-center relative px-3">

                <div>
                    <h1 className="text-4xl md:text-6xl text-white font-semibold font-poppins  tracking-wide hero-shadow text-center">INDIA</h1>
                    <p className="md:text-2xl text-xl text-center text-white tracking-wide hero-shadow font-poppins font-semibold">The tapestry of vibrant colors, cultures, and traditions.</p>
                </div>
                <div className='text-center text-white absolute bottom-1'>
                    <p className="">Scroll Down!</p>
                    <div className='flex justify-center animate-bounce py'>
                        <RiArrowDropDownLine className='text-5xl font-extrathin' />
                    </div>
                </div>
            </div>






        </section >
    )
}
