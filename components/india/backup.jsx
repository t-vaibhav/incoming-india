<div className=''>

    {/* slider section starts */}

    <div className={`h-full w-full backdrop-blur-sm z-50 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ${open1 ? '-translate-x-0' : '-translate-y-[150vh]'} duration-1000`}>
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

                <div className='md:w-3/5 overflow-y-auto max-h-[40vh] pt-4 p-2'>
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