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

      <div className=" md:my-4 space-y-4 px-2 min-h h-full" key={i}>
        <div className="rounded-xl py-3 text-lg bg-gray-50 px-4 h-48 shadow ">
          <p className="leading-relaxed text-gray-700 font-lora">
            &ldquo;{review.review} &rdquo;
          </p>
        </div>
        <div className="mt-2 flex items-center mb-2">
          <Image
            width={48}
            height={48}
            alt="Woman"
            src={review.image}
            className="h-12 w-12 rounded-full mr-4 object-cover"
          />
          <div className=" text-lg md:text-sm">
            <p className="font-bold text-white">{review.name}</p>
            <p className="mt-1 text-white">{review.position}</p>
          </div>
        </div>
      </div>

    ))


  return (
    <div className="bg-gradient-to-r from-[#e3cea4] via-[#d2c0a0] to-[#f3e6cb] md:pt-6  pb-4">
      <section>
        {/* <h1 className="text-center font-poppins font-semibold  text-[#82704c] text-xl md:text-4xl mb-8">
          Words From Our Delighted Customers
        </h1> */}
        < h2 className='text-3xl md:text-5xl font-poppins py-5 md:py-10 text-gray-900 font-semibold text-center px-3' >Words From Our Delighted Customers</h2 >

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:pb-6 gap-8 max-w-screen-xl mx-auto h-full">

          {records}

        </div>



      </section>
    </div >
  );
}
