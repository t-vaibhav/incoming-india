import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import Image from "next/image";
import Data from "./Location";

export default function Section() {
  const [active, setActive] = useState(null);
  const langs = Data;

  return (
    <div className="flex flex-col" id="sectionDiv">
      <h1 className="text-white text-4xl font-serif md:text-5xl font-bold text-center mt-8 mb-0">
        WonderLust India
      </h1>
      <div className="h-[500px] text-white flex items-center justify-center mt-4 mb-24">
        <div className="max-w-5xl my-0">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={(cur) => setActive(cur.realIndex)}
            loop={true}
            centeredSlides={true}
            speed={800}
            autoplay={{ delay: 1500 }}
            modules={[Autoplay]}
          >
            {langs.map((Lang, i) => (
              <SwiperSlide key={i}>
                <div className="h-96 flex no-border bg-gradient-to-tr from-blue-100/20 to-[#dedd81]/10 justify-center rounded-t-xl">
                  <div className={`w-72 no-border cursor-pointer border-b-4 rounded-xl h-56 text-center px-2 py-2 self-end duration-500 delay-100  ${active === i && "h-96"} `}>
                    <div className="relative text-5xl mt-2 mx-auto text-white flex place-items-center h-1/2 ">
                      <Image
                        alt=""
                        width={184}
                        height={144}
                        src={Lang.url}
                        className=" text-5xl mx-auto grid place-items-center h-full w-full object-cover"
                      />
                      <h2 className="text-2xl absolute bottom-0 w-full bg-black/90 mt-2 font-semibold font-josefin">
                        {Lang.name}
                      </h2>
                    </div>
                    <p className={`para mt-3 font-oswald text-lg   ${active === i && "h-96"}`}>{Lang.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}{" "}
          </Swiper>
        </div>
      </div>
    </div>
  );
}