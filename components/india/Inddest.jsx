import React, { useState } from 'react'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer'




export default function Inddest() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        // rootMargin: '-200px 0px',
        threshold: 0.8,
    });

    const mystyle1 = {
        backgroundImage: 'url("/media/indbg1.jpg")',
        height: '100%',
        // backgroundAttachment: 'fixed',
    }

    const [open, setOpen] = useState(false)
    return (
        <section>
            <div className={`h-full w-full backdrop-blur-sm z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ${open ? '-translate-x-0' : '-translate-y-full'} duration-1000`}>
                <div className='bg-white bg-gradient-to-bl from-orange-200 to-pink-200 text-center font-serifjp p-10 w-[60vw] relative h-[70vh] shadow-xl rounded-md'>
                    <h1 className='text-5xl'>Taj Mahal</h1>
                    <div className='flex justify-around py-10'>
                        <div className='w-2/5 border '>
                            <Image src='/media/india.jpg' height={500} width={500} />
                        </div>
                        <div className='w-3/5 border min-h-full'>hawayi</div>
                    </div>
                    <div className='transition ease-in-out hover:scale-125 hover:opacity-90 duration-200  text-blue-500 text-xl my-3 mx-3 font-molengo hover:underline hover:text-blue-700 cursor-pointer absolute top-0 right-0' onClick={() => setOpen(!open)}>
                        <Image src="/media/close.png" alt="" className=' ' width={25} height={25} />
                    </div>
                </div>
            </div>

            <div className='h-full bg-center bg-cover bg-no-repeat font-serifjp text-center' style={mystyle1}>
                <h1 className='sm:text-5xl text-4xl text-black font-bold pt-5 md:pt-10'>THE MOST LOVED DESTINATIONS</h1>
                <div className='max-w-screen-xl grid grid-cols-3  mx-auto py-10'>
                    <div ref={ref} onClick={() => { setOpen(!open) }} className={`p-5 flex justify-between space-x-10 ${inView ? 'scale-100' : 'scale-0'} duration-1000 ease-in-out`}>
                        <div className=' h-[45vh] w-[45vh] rounded-md flex'>
                            <Image src='/media/taj.jpg' height={500} width={500} alt='hello' className='object-cover rounded-md' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


{/* <div className=' p-5 flex justify-between space-x-10'>
                            <div className='w-3/4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi, rerum officia quas fugit suscipit. Voluptatibus excepturi aut, eligendi, a sint praesentium libero ab officia enim deserunt, architecto vitae inventore similique debitis magni voluptates odio illo exercitationem minima laboriosam culpa repudiandae ea asperiores non! Vel.
                            </div>
                            <div className='w-1/4 h-[35vh] flex rounded-md'>
                                <Image src='/media/welcome3.jpg' height={500} width={500} alt='hello' className='object-cover rounded-md' />
                            </div>
                        </div> */}