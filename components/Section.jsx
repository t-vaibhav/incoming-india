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
                <div className="h-96 flex">
                  <div className={`card ${active === i && "card-active"} 0`}>
                    <div className="logo">
                      <Image
                        alt=""
                        width={144}
                        height={144}
                        src={Lang.url}
                        className="logo h-36 w-36 rounded-full mx-auto"
                      />
                    </div>
                    <h2 className="text-3xl mt-2 font-semibold font-josefin">
                      {Lang.name}
                    </h2>
                    <p className="para font-oswald text-lg">{Lang.des}</p>
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
