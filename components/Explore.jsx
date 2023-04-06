import React from 'react'
import { FlipCard } from "react-flipme"
import Image from 'next/image'
import { list1, list2 } from '@/utility/data'


export default function Explore() {

    const record1 = list1.map((item, index) => {
        const path1 = `url('/media/${item.img}')`
        const style1 = {
            backgroundImage: path1,
            height: "100",
        }

        const path2 = `url('/media/navbg1.webp')`
        const style2 = {
            backgroundImage: path2,
            height: "100",
        }

        return (
            <div key={index} className='flex justify-center '>
                <FlipCard height='25rem' width='21rem' rounded={true}>
                    <FlipCard.Front style={style1} className='bg-cover bg-center bg-no-repeat relative'>
                        <div className='absolute text-white bottom-4 bg-black/70 w-full py-1 text-3xl font-serifjp'>
                            <p>{item.title}</p>
                        </div>
                    </FlipCard.Front>
                    <FlipCard.Back>
                        <div className='bg-black/70 h-full  bg-cover bg-center bg-no-repeat' style={style2}>
                            <div className=' text-white text-base font-serifjp px-5 bg-black/50 h-full flex items-center'>
                                <div>
                                    <h2 className='text-3xl font-bold pb-2'>{item.title}</h2>
                                    <p>{item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FlipCard.Back>
                </FlipCard>
            </div>
        )
    }
    )
    const record2 = list2.map((item, index) => {
        const path1 = `url('/media/${item.img}')`
        const style1 = {
            backgroundImage: path1,
            height: "100",
        }

        const path2 = `url('/media/navbg1.jpg')`
        const style2 = {
            backgroundImage: path2,
            height: "100",
        }

        return (
            <div key={index} className='flex justify-center'>
                <FlipCard height='25rem' width='20rem' rounded={true}>
                    <FlipCard.Front style={style1} className='bg-cover bg-center bg-no-repeat relative'>
                        <div className='absolute text-white bottom-4 bg-black/70 w-full py-1 text-3xl font-serifjp'>
                            <p>{item.title}</p>
                        </div>
                    </FlipCard.Front>
                    <FlipCard.Back>
                        <div className='bg-black/70 h-full  bg-cover bg-center bg-no-repeat' style={style2}>
                            <div className=' text-white text-base font-serifjp px-5 bg-black/50 h-full flex items-center'>
                                <div>
                                    <h2 className='text-3xl font-bold pb-2'>{item.title}</h2>
                                    <p>{item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FlipCard.Back>
                </FlipCard>
            </div>
        )
    }
    )

    const mystyle = {
        backgroundImage: 'url(/media/india.webp)',
        height: '100%',
    }
    const mystyle2 = {
        backgroundImage: 'url(/media//media/navbg1.webp)',
        height: '100%',
    }

    return (
        <section className='bg-white from-orange-200 to-rose-200 bg-cover bg-no-repeat bg-center' >
            <div className=''>
                < section className=' max-w-screen-lg text-center mx-auto pb-20' >
                    {/* <h1 className='text-5xl font-serifjp font-bold text-gray-900'>Let Us take you to an adventure you'll never forget</h1> */}
                    < h2 className='text-5xl font-poppins py-10 pb-16 text-gray-900 font-semibold ' > Explore The Indian Subcontinent</h2 >
                    <div className=''>
                        <div className='grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 '>

                            <div className='flex justify-center md:col-span-2 md:w-full'>
                                <FlipCard height='25rem' width='40rem' className='w-[21rem] mx-5 md:mx-0 md:w-[42rem]' rounded={true}>
                                    <FlipCard.Front style={mystyle} className='bg-cover bg-center bg-no-repeat relative'>
                                        <div className='absolute text-white bottom-4 bg-black/70 w-full py-1 text-3xl font-serifjp'>
                                            <p>INDIA</p>
                                        </div>
                                    </FlipCard.Front>
                                    <FlipCard.Back>
                                        <div className='bg-black/70 h-full  bg-cover bg-center bg-no-repeat' style={mystyle2}>
                                            <div className=' text-white text-base font-serifjp px-5 bg-black/50 h-full flex items-center'>
                                                <div>
                                                    <h2 className='text-3xl font-bold pb-2'>INDIA</h2>
                                                    <p>India is a land of diverse cultures, religions, and languages, with a rich history that spans thousands of years. It offers a unique blend of ancient traditions and modernity, with vibrant cities, peaceful villages, and stunning natural landscapes. From the magnificent Taj Mahal to the backwaters of Kerala, India has something to offer everyone.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </FlipCard.Back>
                                </FlipCard>
                            </div>

                            {record1}
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-10  pt-12 '>
                        {record2}
                    </div>
                </section >
            </div>
        </section >
    )

}
