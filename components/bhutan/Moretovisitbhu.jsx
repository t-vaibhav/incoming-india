// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Moretovisitbhu() {
    const mystyle = {
        backgroundImage: 'url("/media/morebg.webp")',
        height: '100%',

    }

    return (
        <section className='bg-center bg-cover bg-no-repeat py-5 text-black' style={mystyle} id='bhutanmore'>
            <div>
                <div className='max-w-screen-lg mx-auto'>
                    <h1 className='text-center text-4xl md:text-5xl font-poppins py-5 font-semibold'>More to Explore!</h1>
                    <div className="h-[50vh] py-5">

                        <Swiper
                            slidesPerView={2}
                            spaceBetween={20}
                            centeredSlides={true}
                            loop={true}

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
                                <a href="/india">
                                    <div className="relative object-cover h-full">
                                        <Image src='/media/india1.webp' fill={true} className="object-cover" />
                                        <div className="bg-black/80 w-full  text-white absolute bottom-6">
                                            <h3 className="text-3xl">India</h3>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>

                            <SwiperSlide>
                                <a href="/maldives">
                                    <div className="relative object-cover h-full">
                                        <Image src='/media/maldives1.webp' fill={true} className="object-cover" />
                                        <div className="bg-black/80 w-full  text-white absolute bottom-6">
                                            <h3 className="text-3xl">Maldives</h3>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>

                            <SwiperSlide>
                                <a href="/lanka">
                                    <div className="relative object-cover h-full">
                                        <Image src='/media/lanka2.webp' fill={true} className="object-cover" />
                                        <div className="bg-black/80 w-full  text-white absolute bottom-6">
                                            <h3 className="text-3xl">Sri Lanka</h3>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>

                            <SwiperSlide>
                                <a href="/nepal">
                                    <div className="relative object-cover h-full">
                                        <Image src='/media/nepal1.webp' fill={true} className="object-cover" />
                                        <div className="bg-black/80 w-full  text-white absolute bottom-6">
                                            <h3 className="text-3xl">Nepal</h3>
                                        </div>
                                    </div>
                                </a>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>)
}
