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
import North from './North';
import South from './South';
import Addu from './Addu';
import Baa from './Baa';
import Lha from './Lha';

export default function Malexp() {
    const mystyle = {
        backgroundImage: 'url("/media/expbg.webp")',
        height: '100%',
        backgroundAttachment: 'fixed',
    }

    const [north, setNorth] = useState(true)
    const [south, setSouth] = useState(false)
    const [lha, setLha] = useState(false)
    const [baa, setBaa] = useState(false)
    const [addu, setAddu] = useState(false)

    let mode;

    if (north) {
        mode = <North />
    } else if (south) {
        mode = <South />
    } else if (lha) {
        mode = <Lha />
    } else if (addu) {
        mode = <Addu />
    } else {
        mode = <Baa />
    }

    return (
        <section className='bg-cover min-h-[100vh] bg-center bg-no-repeat text-black' style={mystyle} id='malexp'>
            <div>
                <h1 className='text-4xl md:py-8 text-center  font-poppins md:text-5xl py-3 font-semibold'>Explore</h1>
                <div className='flex-row px-4 sm:flex md:space-x-5 max-w-screen-lg mx-auto'>
                    <div className='w-full sm:w-[35%] md:w-[25%] flex items-center md:justify-start justify-center'>

                        <div>
                            <div className='grid-cols-2 grid sm:block'>
                                <div className={`text-center px-2 md:py-1 cursor-pointer  text-base md:text-xl  ${north ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(true), setAddu(false), setLha(false), setSouth(false), setBaa(false) }}>North Atoll</div>
                                <div className={`text-center text-base md:py-1 md:text-xl cursor-pointer ${south ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setAddu(false), setLha(false), setSouth(true), setBaa(false) }}>South Atoll</div>
                                <div className={`text-center px-2 md:py-1 cursor-pointer text-base md:text-xl  ${baa ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setAddu(false), setLha(false), setSouth(false), setBaa(true) }}>Baa Atoll</div>
                                <div className={`text-center px-2 md:py-1 cursor-pointer text-base md:text-xl  ${lha ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setAddu(false), setLha(true), setSouth(false), setBaa(false) }}>Lhaviyani Atoll</div>
                            </div>
                            <div className={`text-center px-2 md:py-1 cursor-pointer text-base md:text-xl  ${addu ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setAddu(true), setLha(false), setSouth(false), setBaa(false) }}>Addu Atoll</div>
                        </div>
                    </div>

                    {mode}

                </div>
            </div>
        </section >
    )
}
