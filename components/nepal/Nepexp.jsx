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
import Annapurna from './Annapurna';
import Everest from './Everest';
import Kathmandu from './Kathmandu';

export default function Nepexp() {
    const mystyle = {
        backgroundImage: 'url("/media/ingbg2.png")',
        height: '100vh',
        backgroundAttachment: 'fixed',
    }

    const [kathmandu, setKathmandu] = useState(true)
    const [everest, setEverest] = useState(false)
    const [anna, setAnna] = useState(false)


    let mode;

    if (kathmandu) {
        mode = <Kathmandu />
    } else if (everest) {
        mode = <Everest />
    } else {
        mode = <Annapurna />
    }


    return (
        <section className='bg-cover bg-center bg-no-repeat text-black' style={mystyle} id='nepexp'>
            <div>
                <h1 className='text-4xl md:text-5xl md:py-8 text-center font-poppins py-3 font-semibold'>Explore</h1>
                <div className='flex-row px-4 sm:flex md:space-x-5 max-w-screen-lg mx-auto'>
                    <div className='w-full sm:w-[35%] md:w-[25%] flex items-center md:justify-start justify-center'>

                        <div className='space-y-1'>
                            <div className='grid-cols-2 grid sm:block space-y-1'>
                                <div className={`text-center px-5 md:py-1 cursor-pointer  text-sm md:text-xl  ${kathmandu ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setKathmandu(true), setAnna(false), setEverest(false) }}>Kathmandu Region</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-sm md:text-xl  ${everest ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setKathmandu(false), setAnna(false), setEverest(true) }}>Everest Region</div>
                            </div>
                            <div className={`text-center text-sm md:py-1 md:text-xl cursor-pointer ${anna ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setKathmandu(false), setAnna(true), setEverest(false) }}>Annapurna Region</div>
                        </div>

                    </div>

                    {mode}
                </div>
            </div>
        </section>
    )
}
