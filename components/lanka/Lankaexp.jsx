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
import Hilly from './Hilly';
import South from './South';
import East from './East';
import Colombo from './Colombo';
import Cultural from './Cultural';

export default function Lankaexp() {
    const mystyle = {
        backgroundImage: 'url("/media/ingbg2.png")',
        height: '100vh',
        backgroundAttachment: 'fixed',
    }

    const [hill, setHill] = useState(true)
    const [westcol, setWestcol] = useState(false)
    const [cultural, setCultural] = useState(false)
    const [east, setEast] = useState(false)
    const [south, setSouth] = useState(false)

    let mode;

    if (hill) {
        mode = <Hilly />
    } else if (westcol) {
        mode = <Colombo />
    } else if (east) {
        mode = <East />
    } else if (cultural) {
        mode = <Cultural />
    } else {
        mode = <South />
    }



    return (
        <section className='bg-cover bg-center bg-no-repeat' style={mystyle} id='lankaexp'>
            <div>
                <h1 className='text-4xl md:py-8 text-center font-serifjp py-3 font-semibold'>Experiences</h1>
                <div className='flex-row px-4 sm:flex space-x-5 max-w-screen-lg mx-auto'>
                    <div className='w-full sm:w-[35%] md:w-[25%] flex items-center md:justify-start justify-center'>

                        <div>
                            <div className='grid-cols-2 grid sm:block'>
                                <div className={`text-center px-5 md:py-1 cursor-pointer  text-base md:text-lg  ${hill ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setHill(true), setEast(false), setCultural(false), setSouth(false), setWestcol(false) }}>Hilly Region</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-lg  ${westcol ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setHill(false), setEast(false), setCultural(false), setSouth(false), setWestcol(true) }}>Colombo Region</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-lg  ${cultural ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setHill(false), setEast(false), setCultural(true), setSouth(false), setWestcol(false) }}>Cultural Triangle</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-lg  ${east ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setHill(false), setEast(true), setCultural(false), setSouth(false), setWestcol(false) }}>Eastern Coast</div>
                            </div>
                            <div className={`text-center text-base md:py-1 md:text-lg cursor-pointer ${south ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setHill(false), setEast(false), setCultural(false), setSouth(true), setWestcol(false) }}>Southern Coast</div>
                        </div>

                    </div>

                    {mode}

                </div>
            </div>
        </section>
    )
}
