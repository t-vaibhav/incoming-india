import React, { useState } from 'react'
import Image from 'next/image'

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, EffectFade, Autoplay, Mousewheel, Pagination, EffectFlip, EffectCube, EffectCoverflow } from "swiper";

export default function Malexp() {
    const mystyle = {
        backgroundImage: 'url("/media/ingbg2.png")',
        height: '100vh',
        backgroundAttachment: 'fixed',
    }

    const [north, setNorth] = useState(true)
    const [south, setSouth] = useState(false)
    const [lha, setLha] = useState(false)
    const [baa, setBaa] = useState(false)
    const [addu, setAddu] = useState(false)

    return (
        <section className='bg-cover bg-center bg-no-repeat' style={mystyle}>
            <div>
                <h1 className='text-4xl md:py-8 text-center font-serifjp py-3 font-semibold'>Experiences</h1>
                <div className='flex-row px-4 sm:flex space-x-5 max-w-screen-lg mx-auto'>
                    <div className='w-full sm:w-[35%] md:w-[25%] flex items-center md:justify-start justify-center'>

                        <div>
                            <div className='grid-cols-2 grid sm:block'>
                                <div className={`text-center px-2 md:py-1 cursor-pointer  text-base md:text-xl  ${north ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(true), setAddu(false), setLha(false), setSouth(false), setBaa(false) }}>North Atoll</div>
                                <div className={`text-center text-base md:py-1 md:text-xl cursor-pointer ${south ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setAddu(false), setLha(false), setSouth(true), setBaa(false) }}>South Atoll</div>
                                <div className={`text-center px-2 md:py-1 cursor-pointer text-base md:text-xl  ${baa ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setAddu(false), setLha(false), setSouth(false), setBaa(true) }}>Baa Atoll</div>
                                <div className={`text-center px-2 md:py-1 cursor-pointer text-base md:text-xl  ${lha ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setAddu(false), setLha(true), setSouth(false), setBaa(false) }}>Lhaviyani Atoll</div>
                            </div>
                            <div className={`text-center px-2 md:py-1 cursor-pointer text-base md:text-xl  ${addu ? 'border-b-2 border-b-orange-500 text-orange-500' : ''}`} onClick={() => { setNorth(false), setAddu(true), setLha(false), setSouth(false), setBaa(false) }}>Addu Atoll</div>
                        </div>
                    </div>

                    <div className='sm:w-[65%] md:w-[75%]'>
                        <div className='h-[40vh] md:h-[50vh] flex py-2'>
                            {/* <Image src='/media/india.jpg' height={500} width={500} className='object-cover' /> */}
                            <Swiper
                                effect={"coverflow"}
                                mousewheel={true}
                                grabCursor={true}
                                centeredSlides={true}

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
                                coverflowEffect={{
                                    rotate: 80,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectFade, Autoplay, EffectFlip, EffectCube, Pagination, EffectCoverflow]}
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
                        <div className='max-h-[35vh] md:max-h-[35vh] overflow-y-auto py-2'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, non. Aliquam, dolorum rerum cumque quae numquam aliquid, laudantium exercitationem ratione dolorem modi necessitatibus neque perspiciatis! Reprehenderit eum cumque iusto ex, excepturi, assumenda perspiciatis minus quod et consectetur rem nulla repudiandae eos consequatur. Veritatis corporis in provident accusamus. Molestias, est rem? Dolore molestiae dolorem nemo ipsa cupiditate exercitationem at aspernatur pariatur maxime quod. Saepe sequi cumque velit officia odio deserunt tempora, enim eligendi! Dolorem vel aperiam dolor similique earum, harum nobis eveniet. Libero esse obcaecati hic nulla in asperiores aperiam dolore, soluta temporibus error totam iure numquam tenetur vero consequuntur quasi ipsam non ipsum. Placeat, maiores.
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
