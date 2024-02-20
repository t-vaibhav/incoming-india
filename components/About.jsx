import React, { useState } from "react";
import Image from "next/image";

export default function About() {
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= window.innerHeight) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  return (
    <div id="about" className="">
      <div
        className="flex text-white justify-center items-center h-[64vh] lg:h-[100vh]"
        id="whyus"
      >
        <h1 className="text-4xl md:text-6xl font-semibold font-poppins tracking-wide hero-shadow">
          ABOUT US
        </h1>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="my-6 mx-6 md:mx-36">
          <h1 className="text-center mt-4 text-4xl md:text-6xl mb-6 font-bold text-slate-800">
            Why Us
          </h1>
          <p className="text-center text-slate-700 my-4 md:mx-18 font-roboto font-bold text-lg md:text-2xl">
            Our focus is to create journeys that are unique, dynamic and
            beneficial for all involved; the traveler and the local communities.
            We ensure a privileged access to a country which challenges as much
            as it empowers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-4">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 mx-6 my-6">
            <div className="h-[480px] w-[620px]">
              <Image
                width={620}
                height={480}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://i.ibb.co/nk7mw0R/headway-5-Qg-Iuu-Bx-Kw-M-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Tailor Made
              </h1>
              <p className="mb-3 text-xl my-4 md:text-2xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-2">
                We specialize in tailor-made travel, designing customized
                holidays to suit individual needs. Our experienced specialists
                offer advice on sightseeing, activities, and accommodation.
                Whether you prefer a safari or a beach vacation, we can help you
                explore at your own pace.
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 mx-6 my-6">
            <div className="h-[480px] w-[620px]">
              <Image
                width={620}
                height={480}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://i.ibb.co/BBg3nR0/kees-streefkerk-O3g3s-K3x-KI-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Researching New Routes
              </h1>
              <p className="mb-3 text-xl my-4 md:text-2xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-2">
                Our operations aim to be Informative, Innovative, and
                Interactive from query to travel. Our success is due to our
                research efforts, proactive associates, and experienced team
                committed to the company for over 10 years. We offer
                high-quality service to help travelers navigate complex
                destinations like India.
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 mx-6 my-6">
            <div className="h-[480px] w-[620px]">
              <Image
                width={620}
                height={480}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://i.ibb.co/6gxJfPT/alvaro-reyes-q-Wwp-Hwip31-M-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Attention To Details
              </h1>
              <p className=" mb-3 text-xl my-4 md:text-2xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-2">
                We take a boutique approach to understand clients, creating a
                collaborative planning process. With local offices and carefully
                selected guides, we offer continued assistance and invite
                clients to experience local customs while catering to individual
                interests.
              </p>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 mx-6 my-6">
            <div className="h-[480px] w-[620px]">
              <Image
                width={620}
                height={480}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="https://i.ibb.co/6WrKSkj/ashim-d-silva-KF7pv-8-Oiy-Y-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                The Maharaja Feel!
              </h1>
              <p className=" mb-3 text-xl my-4 md:text-2xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-2">
                Our &quot;Maharaja Feel&quot; philosophy puts guests at the
                center of their Indian journey. Referrals attest to our expert
                team&#39;s creativity and diverse travel options, from private
                jet tours to wildlife excursions, for families, researchers,
                conferences, and adventure enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
