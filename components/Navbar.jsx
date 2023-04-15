import React, { useState } from 'react'
import Footer from './Footer'
import Image from 'next/image'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'


export default function Navbar() {
    const [burger, setBurger] = useState(false)
    const [dest, setDest] = useState(false)

    const mystyle = {
        backgroundImage: 'url("/media/navbg1.webp")',
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
        <nav className={`h-24 ${color ? 'bg-black h-[70px]' : 'bg-transparent'} duration-300 ease-in-out fixed top-0 left-0 right-0 z-50 px-10 flex w-[100vw] items-center justify-between text-gray-200 hover:text-white`}>
            <div className='md:pl-10'>
                <a href="/"><Image src={"/media/main_logo.png"} height={"65"} width={"65"} alt={"logo"} /></a>
            </div>

            <div className='hidden lg:block pr-10'>
                <ul className={`flex items-center text-sm space-x-10 font-medium`}>
                    <a href="/about"> <li className='flex items-center listitem relative  hover:text-orange-300'>
                        ABOUT US
                    </li></a>

                    <li className='flex items-center listitem relative '>
                        <span className='cursor-pointer ' href="#"> DESTINATIONS
                            <ul className={`hidden sublist bg-black/70 ${color ? ' pt-[25px]' : 'pt-0'}`} >
                                <div className='w-full flex-row justify-center'>
                                    <a href="/india"><li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'>India</li></a>
                                    <a href="/nepal"><li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'>Nepal</li></a>
                                    <a href="/bhutan"><li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'>Bhutan</li> </a>
                                    <a href="/lanka"><li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'>Sri Lanka</li></a>
                                    <a href="/maldives"><li className='flex hover:bg-white/70 hover:text-black justify-center py-2 px-5 border-b-2 w-[7rem]'>Maldives</li></a>
                                </div>
                            </ul>
                        </span >
                        <RiArrowDropDownLine className='text-3xl down-arrow duration-500' />
                    </li >

                    <a href="/experiences"><li className='flex items-center listitem relative  hover:text-orange-300'>
                        <span className='cursor-pointer'>EXPERIENCES
                        </span >
                    </li></a>


                    <a href="/presence"><li className='flex items-center listitem relative  hover:text-orange-300'>PRESENCE</li></a>
                    <a href="/insights"><li className='flex  hover:text-orange-300'>INSIGHTS</li ></a>
                    <a href="/contact"><li className='flex  hover:text-orange-300'>CONTACT US</li ></a>
                </ul >

            </div >

            <div className='lg:hidden block z-20 cursor-pointer' >
                <div onClick={() => setBurger(!burger)}>
                    {burger ? <AiOutlineClose className='font-bold text-xl' /> : <AiOutlineMenu className='font-bold text-xl' />}
                </div>
            </div>



            {/* mobile nav */}
            <div className={`fixed top-0 right-0 ${burger ? '-translate-x-0' : 'translate-x-full'} font-poppins ease-in-out block lg:hidden duration-1000 h-full w-[100vw] bg-no-repeat bg-cover bg-center`} >
                <div className='flex overflow-y-auto overflow-x-visible pt-20 justify-center bg-black/80 backdrop-blur-sm h-full w-full'>
                    <ul className=' space-y-8 text-lg text-center '>
                        <div className='bg-black/80 text-gray-200 rounded-md px-5 py-10  overflow-y-auto'>

                            <div className='flex justify-center text-center'>
                                <div className='space-y-2 '>

                                    <a href="/about"><li className={`hover:text-orange-300 font-poppins w-[15rem] z-10 duration-500 cursor-pointer `} >
                                        <div className={`flex justify-between  py-2 `}>
                                            ABOUT US
                                        </div>
                                    </li ></a>

                                    <li className={`${dest ? '' : ''} font-poppins w-[15rem] z-10 duration-500 cursor-pointer`}>
                                        <div className={`flex justify-between hover:text-orange-300 py-2 ${dest ? 'border-b-orange-300' : ''}`} onClick={() => { setDest(!dest) }}>
                                            DESTINATIONS
                                            <RiArrowDropDownLine className={`text-4xl ${dest ? 'rotate-180' : ''} duration-500`} />
                                        </div>
                                        <ul className={`${dest ? 'block' : 'hidden'} -z-10 duration-500 text-xl text-center py-2 space-y-2`}>
                                            <a href="/india"><li className='hover:text-orange-300'>India</li></a>
                                            <a href="/nepal"><li className='hover:text-orange-300'>Nepal</li></a>
                                            <a href="/bhutan"><li className='hover:text-orange-300'>Bhutan</li></a>
                                            <a href="/lanka"><li className='hover:text-orange-300'>Sri Lanka</li></a>
                                            <a href="/maldives"><li className='hover:text-orange-300'>Maldives</li></a>
                                        </ul>
                                    </li >

                                    <a href="/experiences"><li className={` hover:text-orange-300 font-poppins w-[15rem] z-10 duration-500 cursor-pointer`} >
                                        <div className={`flex justify-between  py-4 `}>
                                            EXPERIENCES
                                        </div>
                                    </li ></a>

                                    <a href=""> <li className={`hover:text-orange-300 font-poppins w-[15rem] z-10 duration-500 cursor-pointer`} >
                                        <div className='flex justify-between py-4'>
                                            PRESENCE
                                        </div>
                                    </li ></a>

                                    <a href="/insights"> <li className={`hover:text-orange-300 font-poppins w-[15rem] z-10 duration-500 cursor-pointer`} >
                                        <div className='flex justify-between  py-4'>
                                            INSIGHTS
                                        </div>
                                    </li ></a>

                                    <a href="/contact"><li className={`hover:text-orange-300 font-poppins w-[15rem] z-10 duration-500 cursor-pointer`} >
                                        <div className='flex justify-between   py-4'>
                                            CONTACT US
                                        </div>
                                    </li ></a>

                                </div>
                            </div>
                        </div>
                    </ul >
                </div>
            </div >



        </nav >

    )
}