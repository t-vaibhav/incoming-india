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
import Central from './Central';
import West from './West';
import East from './East';

export default function Indexp() {
    const mystyle = {
        backgroundImage: 'url("/media/ingbg2.png")',
        height: '100vh',
        backgroundAttachment: 'fixed',
    }

    const [north, setNorth] = useState(true)
    const [west, setWest] = useState(false)
    const [central, setCentral] = useState(false)
    const [east, setEast] = useState(false)
    const [south, setSouth] = useState(false)



    let mode;

    if (north) {
        mode = <North />
    } else if (west) {
        mode = <West />
    } else if (east) {
        mode = <East />
    } else if (central) {
        mode = <Central />
    } else {
        mode = <South />
    }

    return (
        <section className='bg-cover bg-center bg-no-repeat text-gray-900' style={mystyle} id='indexplore'>
            <div>
                <h1 className='text-4xl md:text-5xl md:py-8 text-center font-serifjp py-3 font-semibold'>Explore</h1>
                <div className='flex-row px-4 sm:flex md:space-x-5 max-w-screen-lg mx-auto'>
                    <div className='w-full sm:w-[35%] md:w-[25%] flex items-center md:justify-start justify-center'>
                        <div>
                            <div className='grid-cols-2 grid sm:block'>
                                <div className={`text-center px-5 md:py-1 cursor-pointer  text-base md:text-xl  ${north ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(true), setEast(false), setCentral(false), setSouth(false), setWest(false) }}>Northern India</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-xl  ${west ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setEast(false), setCentral(false), setSouth(false), setWest(true) }}>Western India</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-xl  ${central ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setEast(false), setCentral(true), setSouth(false), setWest(false) }}>Central India</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-xl  ${east ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setEast(true), setCentral(false), setSouth(false), setWest(false) }}>Eastern India</div>
                            </div>
                            <div className={`text-center text-base md:py-1 md:text-xl cursor-pointer ${south ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setEast(false), setCentral(false), setSouth(true), setWest(false) }}>Southern India</div>
                        </div>

                    </div>

                    {mode}
                </div>
            </div>
        </section>
    )
}
