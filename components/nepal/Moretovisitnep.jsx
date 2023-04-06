// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Moretovisitnep() {
    const mystyle = {
        backgroundImage: 'url("/media/indbg3.png")',
        height: '100%',

    }

    return (
        <section className='bg-center bg-cover bg-no-repeat py-5' style={mystyle} id='nepmore'>
            <div>
                <div className='max-w-screen-lg mx-auto'>
                    <h1 className='text-center text-4xl font-serifjp py-5 font-semibold'>More to Explore!</h1>
                    <div className="h-[50vh] py-5">

                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            centeredSlides={true}

                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide>
                                <div className="relative object-cover h-full">
                                    <Image src='/media/bhutan.jpg' fill={true} className="object-cover" />
                                    <div className="bg-black/80 w-full  text-white absolute bottom-6">
                                        <h3 className="text-3xl">Bhutan</h3>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="relative object-cover h-full">
                                    <Image src='/media/maldives.jpg' fill={true} className="object-cover" />
                                    <div className="bg-black/80 w-full  text-white absolute bottom-6">
                                        <h3 className="text-3xl">Maldives</h3>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="relative object-cover h-full">
                                    <Image src='/media/lanka.jpg' fill={true} className="object-cover" />
                                    <div className="bg-black/80 w-full  text-white absolute bottom-6">
                                        <h3 className="text-3xl">Sri Lanka</h3>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="relative object-cover h-full">
                                    <Image src='/media/india.jpg' fill={true} className="object-cover" />
                                    <div className="bg-black/80 w-full  text-white absolute bottom-6">
                                        <h3 className="text-3xl">India</h3>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>)
}
