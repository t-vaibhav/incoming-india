import React, { useState } from 'react'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer'
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, EffectFade, Autoplay, Mousewheel, Pagination, EffectFlip } from "swiper";
import { destRecInd } from '@/utility/data';




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
            <div className='h-full bg-center bg-cover bg-no-repeat font-serifjp text-center' style={mystyle1}>
                <h1 className='sm:text-5xl text-4xl text-black font-bold pt-5 md:pt-10'>THE MOST LOVED DESTINATIONS</h1>

                {/* slider section starts */}

                <div className={`h-full w-full backdrop-blur-sm z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ${open ? '-translate-x-0' : '-translate-y-full'} duration-1000`}>
                    <div className='bg-white bg-gradient-to-bl from-orange-200 to-pink-200 text-center font-serifjp p-10 w-[60vw] relative h-[70vh] shadow-xl rounded-md'>
                        <h1 className='text-5xl'>Taj Mahal</h1>
                        <div className='flex justify-around py-10 min-h-[55vh] max-h-[55vh]'>
                            <div className='w-2/5 border flex'>
                                <Swiper
                                    effect={"fade"}
                                    mousewheel={true}
                                    grabCursor={true}
                                    navigation={true}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Navigation, EffectFade, Autoplay, EffectFlip]}
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
                                        <Image src='/media/taj.jpg' height={500} width={500} className='object-cover h-full rounded-md' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className='w-3/5 min-h-full overflow-y-auto p-5'>
                                The Taj Mahal is a breathtaking beauty, an architectural wonder crafted with stunning white marble and adorned with intricate carvings and precious stones. Its grandeur and magnificence will leave you speechless, and the story of its creation, as a symbol of love and devotion, will touch your heart. As you walk through the gates and catch your first glimpse of this masterpiece, you will understand why it is considered one of the most beautiful buildings in the world.
                            </div>
                        </div>
                        <div className='transition ease-in-out hover:scale-125 hover:opacity-90 duration-200  text-blue-500 text-xl my-3 mx-3 font-molengo hover:underline hover:text-blue-700 cursor-pointer absolute top-0 right-0' onClick={() => setOpen(!open)}>
                            <Image src="/media/close.png" alt="" className=' ' width={25} height={25} />
                        </div>
                    </div>
                </div>

                {/* slider section ends */}


                {/* taj mahal tiles/destinations tile starts*/}

                <div className='max-w-screen-xl grid grid-cols-3  mx-auto py-10'>
                    <div ref={ref} onClick={() => { setOpen(!open) }} className={`p-5 flex justify-center ${inView ? 'scale-100' : 'scale-0'} duration-1000 ease-in-out`}>
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