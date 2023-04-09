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
        backgroundImage: 'url("/media/expbg.webp")',
        height: '100%',
        backgroundAttachment: 'fixed',
    }

    // const [north, setNorth] = useState(true)
    // const [west, setWest] = useState(false)
    // const [central, setCentral] = useState(false)
    // const [east, setEast] = useState(false)
    // const [south, setSouth] = useState(false)


    const [partOfIndia, setPartOfIndia] = useState("north")



    let mode;

    // if (north) {
    //     mode = <North />
    // } else if (west) {
    //     mode = <West />
    // } else if (east) {
    //     mode = <East />
    // } else if (central) {
    //     mode = <Central />
    // } else {
    //     mode = <South />
    // }

    switch (partOfIndia) {
        case "north":
            mode = <North />
            break;
        case "east":
            mode = <East />
            break;
        case "west":
            mode = <West />
            break;
        case "south":
            mode = <South />
            break;
        case "central":
            mode = <Central />
            break;

        default:
            break;
    }

    return (
        <section className='bg-cover md:min-h-[100vh] bg-center bg-no-repeat text-black' style={mystyle} id='indexplore'>
            <div>
                <h1 className='text-4xl md:text-5xl md:py-8 text-center font-poppins py-3 font-semibold'>Explore</h1>
                <div className='flex-row px-4 sm:flex md:space-x-5 max-w-screen-lg mx-auto'>
                    <div className='w-full sm:w-[35%] md:w-[25%] h-full flex items-center md:justify-start justify-center'>
                        <div>
                            <div className='grid-cols-2 grid sm:block'>
                                <div className={`text-center px-5 md:py-1 cursor-pointer  text-base md:text-xl  ${partOfIndia == "north" ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setPartOfIndia("north") }}>Northern India</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-xl  ${partOfIndia == "west" ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setPartOfIndia("west") }}>Western India</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-xl  ${partOfIndia == "central" ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setPartOfIndia("central") }}>Central India</div>
                                <div className={`text-center px-5 md:py-1 cursor-pointer text-base md:text-xl  ${partOfIndia == "east" ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setPartOfIndia("east") }}>Eastern India</div>
                            </div>
                            <div className={`text-center text-base md:py-1 md:text-xl cursor-pointer ${partOfIndia == "south" ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setPartOfIndia("south") }}>Southern India</div>
                        </div>

                    </div>

                    {mode}
                </div>
            </div>
        </section>
    )
}
