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




export default function Inddest() {

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

    return (
        <section className='bg-center bg-no-repeat bg-cover' style={mystyle1} id='inddest'>

            <div className='h-full font-serifjp text-center bg-red-400/50' >
                <h1 className='md:text-5xl text-4xl  font-semibold pt-5 md:pt-10'>THE MOST LOVED DESTINATIONS</h1>

                <div className={`max-w-screen-lg mx-auto  gap-5 py-5 `}>

                    <div className=''>
                        <div className='flex-row md:flex justify-around py-5 md:py-10 min-h-[55vh]  h-full '>
                            <div className='xl:w-2/5 md:w-1/2 w-full flex px-2'>
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

                            <div className='md:w-3/5  '>
                                <h1 className='text-3xl md:text-4xl py-3'>The Taj Mahal</h1>
                                <div className='overflow-y-auto px-2 max-h-[40vh]'>
                                    The Taj Mahal is a breathtaking beauty, an architectural wonder crafted with stunning white marble and adorned with intricate carvings and precious stones. Its grandeur and magnificence will leave you speechless, and the story of its creation, as a symbol of love and devotion, will touch your heart. As you walk through the gates and catch your first glimpse of this masterpiece, you will understand why it is considered one of the most beautiful buildings in the world.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex-row md:flex justify-around py-5 md:py-10 min-h-[55vh] h-full'>
                            <div className='xl:w-2/5 md:w-1/2 w-full flex px-2'>
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

                            <div className='md:w-3/5  px-2'>
                                <h1 className='text-3xl md:text-4xl py-3'>Udaipur</h1>
                                <div className='overflow-y-auto  max-h-[40vh]'>
                                    Udaipur, also known as the "City of Lakes" is a mesmerizing destination in the Indian state of Rajasthan. It offers a perfect blend of natural beauty, rich culture, and regal heritage. The city boasts of stunning palaces, tranquil lakes, colorful bazaars, and vibrant festivals. It is also home to some of the finest luxury hotels in India. A visit to Udaipur is a must for anyone seeking an immersive experience of India's royal past and a taste of its vibrant present.
                                </div>
                            </div>

                        </div>
                    </div>



                    <div>
                        <div className='flex-row md:flex justify-around py-5 md:py-10 min-h-[55vh] h-full'>
                            <div className='xl:w-2/5 md:w-1/2 w-full flex px-2'>
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

                            <div className='md:w-3/5 overflow-y-auto px-2'>
                                <h1 className='text-3xl md:text-4xl py-3'>Statue Of Unity</h1>
                                <div className=' max-h-[40vh] '>
                                    The Statue of Unity is a towering monument located in the western Indian state of Gujarat. It is the world's tallest statue, standing at a height of 182 meters. The statue is dedicated to Sardar Vallabhbhai Patel, a prominent Indian freedom fighter and the first Deputy Prime Minister of India. It offers breathtaking panoramic views of the surrounding landscape and the Narmada River. Visitors can also explore the museum and exhibition hall located within the monument to learn about Sardar Patel's life and contribution to India's history. A visit to the Statue of Unity is a must for anyone visiting India.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}


