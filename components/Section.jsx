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
    <div className="flex flex-col max-w-full" id="sectionDiv">
      <h1 className="text-white text-4xl font-poppins font-semibold md:text-5xl text-center mt-8 mb-0">
        WonderLust India
      </h1>
      <div className="h-[500px] text-white flex items-center justify-center mt-4 mb-24 max-w-full">
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
                <div className="h-96 w-72 flex no-border bg-gradient-to-tr from-blue-100/20 to-[#dedd81]/10 justify-evenly rounded-t-xl">
                  <div className={`w-72 no-border cursor-pointer border-b-4 rounded-xl h-56 object-cover text-center self-end rounded-t-xl duration-500 delay-100  ${active === i && "h-96"} `}>
                    <div className="relative text-5xl w-full text-white flex  h-1/2 ">
                      <Image
                        alt=""
                        width={184}
                        height={144}
                        src={Lang.url}
                        className=" text-5xl grid place-items-center h-full w-full object-cover rounded-t-xl"
                      />
                    </div>
                    <h2 className={`text-2xl  mt-2 font-semibold font-josefin ${active === i && "text-white"}`}>
                      {Lang.name}
                    </h2>
                    <p className={`para mt-3 font-oswald text-lg   ${active === i && "h-96"}`}>{Lang.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}{" "}
          </Swiper>
        </div>
      </div>
    </div >
  );
}