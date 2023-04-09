import React, { useState } from 'react'
import { FlipCard } from "react-flipme"
import Image from 'next/image'
import { list1, list2 } from '@/utility/data'
import ReactCardFlip from 'react-card-flip';



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
            <div key={index} className='flex justify-center col-span-2'>
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

        const path2 = `url('/media/navbg1.webp')`
        const style2 = {
            backgroundImage: path2,
            height: "100",
        }

        return (
            <div key={index} className='flex justify-center col-span-2'>
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

    // const mystyle = {
    //     backgroundImage: 'url(/media/india1.webp)',
    //     height: '100%',
    // }
    // const mystyle2 = {
    //     backgroundImage: 'url(/media/navbg1.webp)',
    //     height: '100%',
    // }

    return (
        <section className='bg-gradient-to-tl from-green-300 to-orange-300 bg-cover bg-no-repeat bg-center' >
            <div className=''>
                < section className=' max-w-screen-lg text-center mx-auto pb-20' >
                    {/* <h1 className='text-5xl font-serifjp font-bold text-gray-900'>Let Us take you to an adventure you'll never forget</h1> */}
                    < h2 className='text-4xl md:text-5xl font-poppins py-10 text-gray-900 font-semibold ' > Explore The Indian Subcontinent</h2 >
                    <div className=''>
                        <div className='grid grid-cols-2 md:grid-cols-6 mx-auto gap-10 '>
                            {record1}
                        </div>
                    </div>
                    <div className='grid  md:grid-cols-6 grid-cols-2 gap-10  md:pt-10 '>
                        <div></div>
                        {record2}
                        <div></div>
                    </div>
                </section >


                {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <YOUR_FRONT_CCOMPONENT>
                        This is the front of the card.
                        <button onClick={() => { setIsFlipped(!isFlipped) }}>Click to flip</button>
                    </YOUR_FRONT_CCOMPONENT>

                    <YOUR_BACK_COMPONENT>
                        This is the back of the card.
                        <button onClick={() => { setIsFlipped(!isFlipped) }}>Click to flip</button>
                    </YOUR_BACK_COMPONENT>
                </ReactCardFlip> */}
            </div>
        </section >
    )

}
