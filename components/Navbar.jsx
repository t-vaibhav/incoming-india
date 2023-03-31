import React, { useState } from 'react'
import Footer from './Footer'
import Image from 'next/image'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'


export default function Navbar() {
    const [burger, setBurger] = useState(false)
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
        <nav className={`h-24 ${color ? 'bg-black h-[70px]' : 'bg-transparent'} fixed top-0 left-0 right-0 z-10 px-16 flex items-center justify-between text-white`}>
            <div>
                <Image src={"/media/logo.png"} height={"50"} width={"50"} alt={"logo"} />
            </div>

            <div className='hidden lg:block'>
                <ul className={`flex items-center text-sm space-x-10 font-medium`}>
                    <li className='flex items-center listitem relative '>
                        <span className='cursor-pointer' href="#">ABOUT US
                            <ul className={`hidden sublist bg-black/60 py-10 ${color ? ' py-10' : 'py-5'}`}>
                                <div className='w-full flex-row justify-center'>
                                    <li className='flex justify-center py-2 px-5 w-[10rem]'>Why Us</li>
                                    <li className='flex justify-center py-2 px-5 w-[10rem]'>Our Team</li>

                                </div>
                            </ul>
                        </span >
                    </li>

                    <li className='flex items-center listitem relative'>
                        <span className='cursor-pointer' href="#">DESTINATIONS
                            <ul className={`hidden sublist bg-black/60 ${color ? ' py-10' : 'py-5'}`} >
                                <div className='w-full flex-row justify-center'>
                                    <li className='flex justify-center py-2 px-5 w-[10rem]'>India</li>
                                    <li className='flex justify-center py-2 px-5 w-[10rem]'>Nepal</li>
                                    <li className='flex justify-center py-2 px-5 w-[10rem]'>Bhutan</li>
                                    <li className='flex justify-center py-2 px-5 w-[10rem]'>Sri Lanka</li>
                                    <li className='flex justify-center py-2 px-5 w-[10rem]'>Maldives</li>
                                </div>
                            </ul>
                        </span >
                        {/* <RiArrowDropDownLine className='text-3xl down-arrow duration-500' /> */}
                    </li>

                    <li className='flex items-center listitem relative '>
                        <span className='cursor-pointer' href="#">EXPERIENCES
                            <ul className={`hidden sublist bg-black/60 ${color ? ' py-10' : 'py-5'} z-20`}>
                                <div className='w-full flex-row justify-center'>
                                    <li className='flex justify-center py-2 px-5 w-[12rem]'>Luxury</li>
                                    <li className='flex justify-center py-2 px-5 w-[12rem]'>Photo Tours</li>
                                    <li className='flex justify-center py-2 px-5 w-[12rem]'>Yoga & Meditations</li>
                                    <li className='flex justify-center py-2 px-5 w-[12rem]'>Art & Culture</li>
                                    <li className='flex justify-center py-2 px-5 w-[12rem]'>Culinary</li>
                                    <li className='flex justify-center py-2 px-5 w-[12rem]'>Spa & Wellness</li>
                                    <li className='flex justify-center py-2 px-5 w-[12rem]'>Adventure</li>
                                    <li className='flex justify-center py-2 px-5 w-[12rem]'>Leisure & Culture</li>
                                </div>
                            </ul>
                        </span >
                        {/* <RiArrowDropDownLine className='text-3xl down-arrow duration-500' /> */}
                    </li>

                    <li className='flex items-center listitem relative '>
                        <span className='cursor-pointer' href="#">PRESENCE
                            <ul className={`hidden sublist bg-black/60 py-10 ${color ? ' py-10' : 'py-5'}`}>
                                <div className='w-full flex-row justify-center'>
                                    <li className='flex justify-center py-2 px-5 w-[10rem]'>Our Offices</li>

                                </div>
                            </ul>
                        </span >
                    </li>


                    <li className='flex '><a href="#">INSIGHTS</a></li >
                    <li className='flex '><a href="#">CONTACT US</a></li >
                </ul >

            </div >

            <div className='lg:hidden block z-20' >
                <div onClick={() => setBurger(!burger)}>
                    {burger ? <AiOutlineClose className='font-bold text-xl' /> : <AiOutlineMenu className='font-bold text-xl' />}
                </div>
            </div>

            <div className={`fixed top-0 right-0 ${burger ? '-translate-x-0' : 'translate-x-full'} ease-in-out block lg:hidden duration-1000 h-full w-[100vw] bg-no-repeat bg-cover bg-center`} style={mystyle}>
                <div className='flex pt-32 justify-center bg-black/20 backdrop-blur-sm h-full w-full'>
                    <ul className=' space-y-8 text-2xl text-center font-medium'>
                        <li className={`${burger ? '' : ''} duration-`}><a href="#">ABOUT US</a></li >
                        <li className={`${burger ? '' : ''} duration-`}><a href="#">DESTINATIONS</a></li >
                        <li className={`${burger ? '' : ''} duration-`}><a href="#">EXPERIENCES</a></li >
                        <li className={`${burger ? '' : ''} duration-`}><a href="#">PRESENCE</a></li >
                        <li className={`${burger ? '' : ''} duration-`}><a href="#">INSIGHTS</a></li >
                        <li className={`${burger ? '' : ''} duration-`}><a href="#">CONTACT US</a></li >
                    </ul >
                </div>
            </div>



        </nav >

    )
}