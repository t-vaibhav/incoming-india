import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Reviews from "./Reviews";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Review() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const records =
    Reviews.map((review, i) => (

      <div className="mb-8 mt-8 space-y-4">
        <blockquote className="rounded-xl h-full text-lg bg-gray-50 px-4 py-3 shadow ">
          <p className="leading-relaxed text-gray-700 font-lora">
            &ldquo;{review.review} &rdquo;
          </p>
        </blockquote>
        <div className="mt-4 flex items-center mb-4">
          <Image
            width={48}
            height={48}
            alt="Woman"
            src={review.image}
            className="h-12 w-12 rounded-full mr-4 object-cover"
          />
          <div className="text-sm">
            <p className="font-bold text-white">{review.name}</p>
            <p className="mt-1 text-white">{review.position}</p>
          </div>
        </div>
      </div>

    ))


  return (
    <div className="bg-gradient-to-r from-[#e3cea4] via-[#d2c0a0] to-[#f3e6cb] pt-6">
      <section>
        <h1 className="text-center font-poppins font-semibold  text-[#82704c] text-xl md:text-4xl mb-8">
          Words From Our Delighted Customers
        </h1>
        <motion.div
          className="mx-auto max-w-screen-xl px-4 pb-16 pt-0 sm:px-6 lg:px-8 h-full"
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 h-full">

            {/* <Swiper
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
              className=" "
            >



            </Swiper> */}

            {records}

          </div>
        </motion.div>


      </section>
    </div >
  );
}
