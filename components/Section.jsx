import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import Image from "next/image";

export default function Section() {
  const [active, setActive] = useState(null);
  const langs = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOPsS16WObaQVVnY8VgXaSD9guvC3xD-lUg&usqp=CAU",
      name: "WEST BENGAL",
      des: "Experience the culture and charm of Kolkata, the natural beauty of Darjeeling and the spirituality of Varanasi.",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOPsS16WObaQVVnY8VgXaSD9guvC3xD-lUg&usqp=CAU",
      name: "WEST BENGAL",
      des: "Experience the culture and charm of Kolkata, the natural beauty of Darjeeling and the spirituality of Varanasi.",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOPsS16WObaQVVnY8VgXaSD9guvC3xD-lUg&usqp=CAU",
      name: "WEST BENGAL",
      des: "Experience the culture and charm of Kolkata, the natural beauty of Darjeeling and the spirituality of Varanasi.",
    },
  ];
  
  return (
    <div className="h-screen bg-[#00052a] text-white flex items-center justify-center">
      <div className="max-w-5xl ">
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
                <div
                  className={`card ${
                    active === i && "card-active"
                  } to-red-600/40`}
                >
                  <div className="logo">
                    <Image alt=""
                      width={96}
                      height={96}
                      src={langs.url}
                      className="logo h-24 w-24 rounded-full mx-auto"
                    />
                  </div>
                  <h2 className="text-3xl mt-2 font-semibold">
                    {langs.name}
                  </h2>
                  <p className="para">{langs.des}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}{" "}
        </Swiper>
      </div>
    </div>
  );
}
