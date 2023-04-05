import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'


export default function Hero() {



    return (
        <section className='relative '>
            <div>
                <video autoPlay muted loop id="myVideo" className='h-[100vh] w-[100vw] object-cover opacity-100  top-0 -z-50 relative' >
                    <source src="/media/indiabg4.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div className='bg-black/50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-center'>
                <div className=' max-w-[600px] space-y-4'>
                    <h1 className='text-6xl font-semibold font-poppins tracking-widhero-shadow '>INCOMING INDIA</h1>
                    <p className='text-2xl font-poppins hero-shadow'>Discover The Magic Of India With Your Ultimate Travel Partner!</p>
                </div>
            </div>
            <div className='absolute bottom-0 text-white left-0 right-0 flex items-center justify-center'>
                <div className='text-center'>
                    <p>Scroll Down!</p>
                    <div className='flex justify-center animate-bounce py-2'>
                        <RiArrowDropDownLine className='text-5xl font-extrathin' />
                    </div>
                </div>

            </div>
        </section>)
}
