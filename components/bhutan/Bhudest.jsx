import React, { useState } from 'react'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer'
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, EffectFade, Autoplay, Mousewheel, Pagination, EffectFlip, EffectCube } from "swiper";
import { destRecInd } from '@/utility/data';




export default function Bhudest() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        // rootMargin: '-200px 0px',
        threshold: 0.2,
    });

    const mystyle1 = {
        backgroundImage: 'url("/media/indbg1.png")',
        height: '100%',
        // backgroundAttachment: 'fixed',
    }

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)


    return (
        <section className='bg-center bg-cover bg-no-repeat' style={mystyle1}>
            <div className='h-full  font-serifjp text-center bg-red-400/50' >
                <h1 className='sm:text-5xl text-4xl text-black font-bold pt-5 md:pt-10'>THE MOST LOVED DESTINATIONS</h1>

                <div className={`max-w-screen-xl mx-auto grid xl:grid-cols-3 sm:grid-cols-2 gap-5 py-5 `}>


                    {/* #1 starts */}
                    <div className=''>

                        {/* slider section starts */}

                        <div className={`h-full w-full backdrop-blur-sm z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ${open1 ? '-translate-x-0' : '-translate-y-full'} duration-1000`}>
                            <div className='bg-white bg-gradient-to-bl from-orange-200 to-pink-200 text-center font-serifjp md:p-10 px-2 py-10 lg:w-[80vw] md:w-[80vw] xl:w-[60vw] w-[90vw] relative md:h-[70vh] h-[90vh] shadow-xl rounded-md'>
                                <h1 className='text-4xl md:text-5xl'>The Taj Mahal</h1>
                                <div className='flex-row md:flex justify-around py-5 md:py-10 min-h-[55vh] max-h-[55vh]'>
                                    <div className='xl:w-2/5 md:w-1/2 w-full flex'>
                                        <Swiper
                                            effect={"cube"}
                                            mousewheel={true}
                                            grabCursor={true}
                                            // navigation={true}
                                            autoplay={{
                                                delay: 3500,
                                                disableOnInteraction: false,
                                            }}
                                            cubeEffect={{
                                                shadow: true,
                                                slideShadows: true,
                                                shadowOffset: 20,
                                                shadowScale: 0.94,
                                            }}
                                            pagination={true}
                                            modules={[EffectFade, Autoplay, EffectFlip, EffectCube, Pagination]}
                                            className="swiper "
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}

                                        >

                                            <SwiperSlide className="relative">
                                                <img src="/media/india.jpg" alt="taj" className="object-cover" />
                                            </SwiperSlide>


                                            <SwiperSlide className="relative">
                                                <img src="/media/india1.jpg" alt="taj" className="object-cover" />
                                            </SwiperSlide>


                                            <SwiperSlide className="relative">
                                                <img src="/media/india2.jpg" alt="taj" className="object-cover " />
                                            </SwiperSlide>


                                            <SwiperSlide className="relative">
                                                <img src="/media/taj.jpg" alt="taj" className="object-cover" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <div className='md:w-3/5 overflow-y-auto max-h-[44vh] pt-4 p-2'>
                                        The Taj Mahal is a breathtaking beauty, an architectural wonder crafted with stunning white marble and adorned with intricate carvings and precious stones. Its grandeur and magnificence will leave you speechless, and the story of its creation, as a symbol of love and devotion, will touch your heart. As you walk through the gates and catch your first glimpse of this masterpiece, you will understand why it is considered one of the most beautiful buildings in the world.
                                    </div>
                                </div>
                                <div className='transition ease-in-out hover:scale-125 hover:opacity-90 duration-200  text-blue-500 text-xl my-3 mx-3 font-molengo hover:underline hover:text-blue-700 cursor-pointer absolute top-0 right-0' onClick={() => setOpen1(!open1)}>
                                    <Image src="/media/close.png" alt="" className=' ' width={25} height={25} />
                                </div>
                            </div>
                        </div>

                        {/* slider section ends */}


                        {/* taj mahal tiles/destinations tile starts*/}

                        <div className='max-w-screen-xl '>
                            <div ref={ref} onClick={() => { setOpen1(!open1) }} className={`p-5 flex justify-center ${inView ? 'scale-100' : 'scale-0'} duration-1000 ease-in-out`}>
                                <div className=' h-[45vh] w-[45vh] rounded-md flex  relative hover:scale-110 duration-300 ease-in-out cursor-pointer'>
                                    <Image src='/media/india.jpg' height={500} width={500} alt='hello' className='object-cover rounded-md' />
                                    <div className='absolute bottom-2 left-0 right-0 text-white bg-black/60 text-2xl w-full py-2 '>
                                        <h1>Taj Mahal</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* taj mahal tiles/destinations tile ends*/}
                    </div>
                    {/* #1 ends */}


                    {/* #2 starts */}
                    <div>

                        {/* slider section starts */}

                        <div className={`h-full w-full backdrop-blur-sm z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ${open2 ? '-translate-x-0' : '-translate-y-full'} duration-1000`}>
                            <div className='bg-white bg-gradient-to-bl from-orange-200 to-pink-200 text-center font-serifjp md:p-10 px-2 py-10 lg:w-[80vw] md:w-[80vw] xl:w-[60vw] w-[90vw] relative md:h-[70vh] h-[90vh] shadow-xl rounded-md'>
                                <h1 className='text-4xl md:text-5xl'>Udaipur</h1>
                                <div className='flex-row md:flex justify-around py-5 md:py-10 min-h-[55vh] max-h-[55vh]'>
                                    <div className='xl:w-2/5 md:w-1/2 w-full flex'>
                                        <Swiper
                                            effect={"cube"}
                                            mousewheel={true}
                                            grabCursor={true}
                                            // navigation={true}
                                            autoplay={{
                                                delay: 3500,
                                                disableOnInteraction: false,
                                            }}
                                            cubeEffect={{
                                                shadow: true,
                                                slideShadows: true,
                                                shadowOffset: 20,
                                                shadowScale: 0.94,
                                            }}
                                            pagination={true}
                                            modules={[EffectFade, Autoplay, EffectFlip, EffectCube, Pagination]}
                                            className="swiper "
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}

                                        >

                                            <SwiperSlide className="relative">
                                                <img src="/media/udaipur5.jpg" alt="udaipur" className="object-contain" />
                                            </SwiperSlide>


                                            <SwiperSlide className="relative">
                                                <Image src='/media/lakepalace1.jpeg' alt='udaipur' height={500} width={500} className='object-cover h-full' />
                                            </SwiperSlide>

                                            <SwiperSlide className="relative">
                                                <img src="/media/udaipur2.jpg" alt="udaipur" className="object-contain" />
                                            </SwiperSlide>

                                            <SwiperSlide className="relative">
                                                <Image src='/media/lakepalace2.jpeg' alt='udaipur' height={500} width={500} className='object-cover h-full' />
                                            </SwiperSlide>

                                            <SwiperSlide className="relative">
                                                <img src="/media/udaipur3.jpg" alt="udaipur" className="object-contain" />
                                            </SwiperSlide>

                                            <SwiperSlide className="relative">
                                                <Image src='/media/lakepalace3.jpeg' alt='udaipur' height={500} width={500} className='object-cover h-full' />
                                            </SwiperSlide>

                                            <SwiperSlide className="relative">
                                                <img src="/media/udaipur4.jpg" alt="udaipur" className="object-contain" />
                                            </SwiperSlide>



                                        </Swiper>
                                    </div>

                                    <div className='md:w-3/5 overflow-y-auto max-h-[44vh] pt-4 p-2'>
                                        Udaipur, also known as the "City of Lakes" is a mesmerizing destination in the Indian state of Rajasthan. It offers a perfect blend of natural beauty, rich culture, and regal heritage. The city boasts of stunning palaces, tranquil lakes, colorful bazaars, and vibrant festivals. It is also home to some of the finest luxury hotels in India. A visit to Udaipur is a must for anyone seeking an immersive experience of India's royal past and a taste of its vibrant present.                            </div>
                                </div>
                                <div className='transition ease-in-out hover:scale-125 hover:opacity-90 duration-200  text-blue-500 text-xl my-3 mx-3 font-molengo hover:underline hover:text-blue-700 cursor-pointer absolute top-0 right-0' onClick={() => setOpen2(!open2)}>
                                    <Image src="/media/close.png" alt="" className=' ' width={25} height={25} />
                                </div>
                            </div>
                        </div>

                        {/* slider section ends */}


                        {/* taj mahal tiles/destinations tile starts*/}

                        <div className='max-w-screen-xl'>
                            <div ref={ref} onClick={() => { setOpen2(!open2) }} className={`p-5 flex justify-center ${inView ? 'scale-100' : 'scale-0'} duration-1000 ease-in-out`}>
                                <div className=' h-[45vh] w-[45vh] rounded-md flex  relative hover:scale-110 duration-300 ease-in-out cursor-pointer'>
                                    <Image src='/media/lakepalace5.jpeg' height={500} width={500} alt='hello' className='object-cover rounded-md' />
                                    <div className='absolute bottom-2 left-0 right-0 text-white bg-black/60 text-2xl w-full py-2 '>
                                        <h1>Udaipur</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* taj mahal tiles/destinations tile ends*/}

                    </div>
                    {/* #2 ends */}


                    {/* #3 starts */}
                    <div>

                        {/* slider section starts */}

                        <div className={`h-full w-full backdrop-blur-sm z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ${open3 ? '-translate-x-0' : '-translate-y-full'} duration-1000`}>
                            <div className='bg-white bg-gradient-to-bl from-orange-200 to-pink-200 text-center font-serifjp md:p-10 px-2 py-10 lg:w-[80vw] md:w-[80vw] xl:w-[60vw] w-[90vw] relative md:h-[70vh] h-[90vh] shadow-xl rounded-md'>
                                <h1 className='text-4xl md:text-5xl'>The Statue Of Unity</h1>
                                <div className='flex-row md:flex justify-around py-5 md:py-10 min-h-[55vh] max-h-[55vh]'>
                                    <div className='xl:w-2/5 md:w-1/2 w-full flex'>
                                        <Swiper
                                            effect={"cube"}
                                            mousewheel={true}
                                            grabCursor={true}
                                            // navigation={true}
                                            autoplay={{
                                                delay: 3500,
                                                disableOnInteraction: false,
                                            }}
                                            cubeEffect={{
                                                shadow: true,
                                                slideShadows: true,
                                                shadowOffset: 20,
                                                shadowScale: 0.94,
                                            }}
                                            pagination={true}
                                            modules={[EffectFade, Autoplay, EffectFlip, EffectCube, Pagination]}
                                            className="swiper "
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}

                                        >

                                            <SwiperSlide className="relative">
                                                <img src="/media/india.jpg" alt="taj" className="object-contain" />
                                                <div className="absolute bottom-0 left-0 right-0">

                                                </div>
                                            </SwiperSlide>


                                            <SwiperSlide className="relative">
                                                <img src="/media/india1.jpg" alt="taj" className="object-contain" />
                                                <div className="absolute bottom-0 left-0 right-0">

                                                </div>
                                            </SwiperSlide>


                                            <SwiperSlide className="relative">
                                                <img src="/media/india2.jpg" alt="taj" className="object-contain" />
                                                <div className="absolute bottom-0 left-0 right-0">

                                                </div>
                                            </SwiperSlide>


                                            <SwiperSlide className="relative">
                                                <Image src='/media/taj.jpg' height={500} width={500} className='object-cover h-full' />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>

                                    <div className='md:w-3/5 overflow-y-auto max-h-[44vh] pt-4 p-2'>
                                        The Statue of Unity is a towering monument located in the western Indian state of Gujarat. It is the world's tallest statue, standing at a height of 182 meters. The statue is dedicated to Sardar Vallabhbhai Patel, a prominent Indian freedom fighter and the first Deputy Prime Minister of India. It offers breathtaking panoramic views of the surrounding landscape and the Narmada River. Visitors can also explore the museum and exhibition hall located within the monument to learn about Sardar Patel's life and contribution to India's history. A visit to the Statue of Unity is a must for anyone visiting India.                                    </div>
                                </div>
                                <div className='transition ease-in-out hover:scale-125 hover:opacity-90 duration-200  text-blue-500 text-xl my-3 mx-3 font-molengo hover:underline hover:text-blue-700 cursor-pointer absolute top-0 right-0' onClick={() => setOpen3(!open3)}>
                                    <Image src="/media/close.png" alt="" className=' ' width={25} height={25} />
                                </div>
                            </div>
                        </div>

                        {/* slider section ends */}


                        {/* taj mahal tiles/destinations tile starts*/}

                        <div className='max-w-screen-xl'>
                            <div ref={ref} onClick={() => { setOpen3(!open3) }} className={`p-5 flex justify-center ${inView ? 'scale-100' : 'scale-0'} duration-1000 ease-in-out`}>
                                <div className=' h-[45vh] w-[45vh] rounded-md flex  relative hover:scale-110 duration-300 ease-in-out cursor-pointer'>
                                    <Image src='/media/india.jpg' height={500} width={500} alt='hello' className='object-cover rounded-md' />
                                    <div className='absolute bottom-2 left-0 right-0 text-white bg-black/60 text-2xl w-full py-2 '>
                                        <h1>Taj Mahal</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* taj mahal tiles/destinations tile ends*/}
                    </div>
                    {/* #3 ends */}
                </div>
            </div>
        </section>
    )
}


