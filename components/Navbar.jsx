import React, { useState } from 'react'
import Footer from './Footer'
import Image from 'next/image'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'


export default function Navbar() {
    const [burger, setBurger] = useState(false)

    const [about, setAbout] = useState(false)
    const [dest, setDest] = useState(false)
    const [exp, setExp] = useState(false)
    const [presence, setPresence] = useState(false)
    const [ins, setIns] = useState(false)
    const [cont, setCont] = useState(false)


    const mystyle = {
        backgroundImage: 'url("/media/navbg1.jpg")',
        height: "100vh",
        backgroundAttachment: "fixed",
    }

    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 96) {
            setColor(true)
        } else {
            setColor(false)
        }
    }


    React.useEffect(() => {
        window.addEventListener('scroll', changeColor)
        // window is accessible here.

    }, []);

    return (
        <nav className={`h-24 ${color ? 'bg-black h-[60px]' : 'bg-transparent'} duration-300 ease-in-out fixed top-0 left-0 right-0 z-20 px-10 flex items-center justify-between text-gray-200 hover:text-white`}>
            <div className=''>
                <a href="/"><Image src={"/media/logo.png"} height={"50"} width={"50"} alt={"logo"} /></a>
            </div>

            <div className='hidden lg:block'>
                <ul className={`flex items-center text-sm space-x-10 font-medium`}>
                    <li className='flex items-center listitem relative  hover:text-orange-300'>
                        <span className='cursor-pointer' href="#">ABOUT US
                            {/* <ul className={`hidden sublist bg-black/60 ${color ? ' pt-5' : 'pt-0'}`}>
                                <div className='w-full flex-row justify-center'>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[7rem] border-b-2'><a href="#">Why Us</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[7rem] border-b-2'><a href="#">Our Team</a></li>
                                </div>
                            </ul> */}
                        </span >
                        {/* <RiArrowDropDownLine className='text-3xl down-arrow duration-500' /> */}

                    </li>

                    <li className='flex items-center listitem relative '>
                        <span className='cursor-pointer ' href="#"><a href="https://www.youtube.com" className='hover:text-orange-300'> DESTINATIONS</a>
                            <ul className={`hidden sublist bg-black/70 ${color ? ' pt-5' : 'pt-0'}`} >
                                <div className='w-full flex-row justify-center'>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'><a href="/india">India</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'><a href="/nepal">Nepal</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'><a href="/bhutan">Bhutan</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'><a href="/lanka">Sri Lanka</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'><a href="/maldives">Maldives</a></li>
                                </div>
                            </ul>
                        </span >
                        <RiArrowDropDownLine className='text-3xl down-arrow duration-500' />
                    </li>

                    <li className='flex items-center listitem relative  hover:text-orange-300'>
                        <span className='cursor-pointer'>EXPERIENCES
                            {/* <ul className={`hidden sublist bg-black/70 ${color ? ' pt-5' : 'pt-0'} z-20`}>
                                <div className='w-full flex-row justify-center'>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[11rem] border-b-2'><a href="#">Luxury</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[11rem] border-b-2'><a href="#">Photo Tours</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[11rem] border-b-2'><a href="#">Yoga & Meditations</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[11rem] border-b-2'><a href="#">Art & Culture</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[11rem] border-b-2'><a href="#">Culinary</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[11rem] border-b-2'><a href="#">Spa & Wellness</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[11rem] border-b-2'><a href="#">Adventure</a></li>
                                    <li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 w-[11rem] border-b-2'><a href="#">Leisure & Culture</a></li>
                                </div>
                            </ul> */}
                        </span >
                        {/* <RiArrowDropDownLine className='text-3xl down-arrow duration-500' /> */}
                    </li>

                    <li className='flex items-center listitem relative  hover:text-orange-300'>
                        <span className='cursor-pointer' href="#"><a href="#">PRESENCE</a>

                        </span >
                    </li>


                    <li className='flex  hover:text-orange-300'><a href="/insights">INSIGHTS</a></li >
                    <li className='flex  hover:text-orange-300'><a href="#">CONTACT US</a></li >
                </ul >

            </div >

            <div className='lg:hidden block z-20 cursor-pointer' >
                <div onClick={() => setBurger(!burger)}>
                    {burger ? <AiOutlineClose className='font-bold text-xl' /> : <AiOutlineMenu className='font-bold text-xl' />}
                </div>
            </div>



            {/* mobile nav */}
            <div className={`fixed top-0 right-0 ${burger ? '-translate-x-0' : 'translate-x-full'} ease-in-out block lg:hidden duration-1000 h-full w-[100vw] bg-no-repeat bg-cover bg-center`} >
                <div className='flex overflow-y-auto overflow-x-visible pt-20 justify-center bg-black/20 backdrop-blur-sm h-full w-full'>
                    <ul className=' space-y-8 text-lg text-center font-serifjp '>
                        <div className='bg-black/80 text-gray-200 rounded-md px-5 py-10  overflow-y-auto'>

                            <div className='flex justify-center'>
                                <div className='space-y-2 '>

                                    <li className={`${about ? '' : ''} w-[15rem] z-10 duration-500 cursor-pointer `} onClick={() => { setAbout(!about) }}>
                                        <div className={`flex justify-between border-b-2 py-2 ${about ? 'border-b-emerald-300' : ''}`}>
                                            ABOUT US
                                            {/* <RiArrowDropDownLine className={`text-4xl ${about ? 'rotate-180 ' : ''} duration-500`} /> */}
                                        </div>
                                        {/* <ul className={`${about ? 'block' : 'hidden '} space-y-2 -z-10 duration-500 text-xl py-2`}>
                                            <li className='text-left'>Why Us</li>
                                            <li className='text-left'>Our team</li>
                                        </ul> */}
                                    </li >
                                    <li className={`${dest ? '' : ''} w-[15rem] z-10 duration-500 cursor-pointer`} onClick={() => { setDest(!dest) }}>
                                        <div className={`flex justify-between border-b-2 py-2 ${dest ? 'border-b-emerald-300 text-emerald-300' : ''}`}>
                                            DESTINATIONS
                                            <RiArrowDropDownLine className={`text-4xl ${dest ? 'rotate-180' : ''} duration-500`} />
                                        </div>
                                        <ul className={`${dest ? 'block text-emerald-300' : 'hidden '} -z-10 duration-500 text-xl text-left py-2 space-y-2`}>
                                            <li>India</li>
                                            <li>Nepal</li>
                                            <li>Bhutan</li>
                                            <li>Sri Lanka</li>
                                            <li>Maldives</li>
                                        </ul>
                                    </li >

                                    <li className={`${exp ? '' : ''} w-[15rem] z-10 duration-500 cursor-pointer`} onClick={() => { setExp(!exp) }}>
                                        <div className={`flex justify-between border-b-2 py-2 ${exp ? 'border-b-emerald-300' : ''}`}>
                                            EXPERIENCES
                                            {/* <RiArrowDropDownLine className={`text-4xl ${exp ? 'rotate-180' : ''} duration-500`} /> */}
                                        </div>
                                    </li >

                                    <li className={`${dest ? '' : ''} w-[15rem] z-10 duration-500 cursor-pointer`} >
                                        <div className='flex justify-between  border-b-2 py-4'>
                                            PRESENCE
                                        </div>
                                        <ul className={`${dest ? 'block' : 'hidden '} -z-10 duration-500`}>

                                        </ul>
                                    </li >

                                    <li className={`${dest ? '' : ''} w-[15rem] z-10 duration-500 cursor-pointer`} >
                                        <div className='flex justify-between border-b-2 py-4'>
                                            INSIGHTS
                                        </div>
                                        <ul className={`${dest ? 'block' : 'hidden '} -z-10 duration-500`}>
                                        </ul>
                                    </li >

                                    <li className={`${dest ? '' : ''} w-[15rem] z-10 duration-500 cursor-pointer`} >
                                        <div className='flex justify-between  border-b-2 py-4'>
                                            CONTACT US
                                        </div>
                                        <ul className={`${dest ? 'block' : 'hidden '} -z-10 duration-500`}>
                                        </ul>
                                    </li >

                                </div>
                            </div>

                            {/* <li className={`${burger ? '' : ''} duration-500`}><a href="#">EXPERIENCES</a></li >
                            <li className={`${burger ? '' : ''} duration-500`}><a href="#">PRESENCE</a></li >
                            <li className={`${burger ? '' : ''} duration-500`}><a href="#">INSIGHTS</a></li >
                            <li className={`${burger ? '' : ''} duration-500`}><a href="#">CONTACT US</a></li > */}
                        </div>
                    </ul >
                </div>
            </div>



        </nav >

    )
}