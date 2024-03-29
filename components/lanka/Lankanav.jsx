import React, { useState } from 'react'
import { list1, list2 } from '@/utility/data'
import { FlipCard } from "react-flipme"
import Image from 'next/image'
import Inddest from './Lankadest'
import Indiaoverview from './Lankaoverview'
import Lankaoverview from './Lankaoverview'
import Lankadest from './Lankadest'



export default function Lankanav() {
    const [ind, setInd] = useState(true)
    const [dest, setDest] = useState(false)
    const [act, setAct] = useState(false)
    const [gallery, setGallery] = useState(false)

    React.useEffect(() => {
        window.addEventListener('scroll', changeColor)
    }, []);

    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= window.innerHeight) {
            setColor(true)
        } else {
            setColor(false)
        }
    }



    return (
        <section>

            <nav className={`${color ? 'fixed top-[60px] h-[30px] bg-white right-0 left-0' : 'h-[70px]'} z-10  flex justify-center items-center font-serifjp`}>
                <ul className='flex sm:space-x-12 space-x-5'>
                    <a href="#lankaover"><li className={`${ind ? 'text-orange-500 border-b-2 border-b-orange-500' : ''} cursor-pointer`} onClick={() => { setInd(true), setDest(false), setGallery(false), setAct(false) }}>Overview</li></a>
                    <a href="#lankaexp"><li className={`${act ? 'text-orange-500 border-b-2 border-b-orange-500' : ''} cursor-pointer`} onClick={() => { setInd(false), setDest(false), setGallery(false), setAct(true) }}>Explore</li></a>
                    <a href="#lankagallery"><li className={`${gallery ? 'text-orange-500 border-b-2 border-b-orange-500' : ''} cursor-pointer`} onClick={() => { setInd(false), setDest(false), setGallery(true), setAct(false) }}>Gallery</li></a>
                    <a href="#lankamore"><li className={`${dest ? 'text-orange-500 border-b-2 border-b-orange-500' : ''} cursor-pointer`} onClick={() => { setInd(false), setDest(true), setGallery(false), setAct(false) }}>More To Visit</li></a>
                </ul>
            </nav >

            <Lankaoverview />
            {/* <Lankadest /> */}



        </section >
    )
}
