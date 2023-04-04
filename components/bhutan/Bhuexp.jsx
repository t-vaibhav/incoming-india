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
import West from './West';
import East from './East';
import Central from './Central';

export default function Bhuexp() {
    const mystyle = {
        backgroundImage: 'url("/media/ingbg2.png")',
        height: '100vh',
        backgroundAttachment: 'fixed',
    }


    const [west, setWest] = useState(true)
    const [central, setCentral] = useState(false)
    const [east, setEast] = useState(false)


    let mode;

    if (west) {
        mode = <West />
    } else if (east) {
        mode = <East />
    } else {
        mode = <Central />
    }

    return (
        <section className='bg-cover bg-center bg-no-repeat' style={mystyle}>
            <div>
                <h1 className='text-4xl md:py-8 text-center font-serifjp py-3 font-semibold'>Experiences</h1>
                <div className='flex-row px-4 sm:flex space-x-5 max-w-screen-lg mx-auto'>
                    <div className='w-full sm:w-[35%] md:w-[25%] flex items-center md:justify-start justify-center'>

                        <div>
                            <div className='grid-cols-2 grid sm:block'>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-lg  ${west ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setEast(false), setCentral(false), setWest(true) }}>Western Bhutan</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-lg  ${east ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setEast(true), setCentral(false), setWest(false) }}>Eastern Bhutan</div>
                            </div>
                            <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-lg  ${central ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setEast(false), setCentral(true), setWest(false) }}>Central Bhutan</div>
                        </div>

                    </div>

                    {mode}
                </div>
            </div>
        </section>
    )
}
