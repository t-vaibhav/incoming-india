import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Review() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="bg-gradient-to-r from-[#e3cea4] via-[#d2c0a0] to-[#f3e6cb] pt-6">
      <section>
        <h1 className="text-center font-alkatra text-[#82704c] font-bold text-xl md:text-4xl mb-8">
          Words From Our Delighted Customers
        </h1>
        <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-0 sm:px-6 lg:px-8">
          <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              className="mb-8 sm:break-inside-avoid"
            >
              <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                <p className="leading-relaxed text-gray-700 font-lora">
                  &ldquo; I had an incredible trip to India thanks to the team at
                  Incoming India! As a solo traveler, I was a bit nervous about
                  navigating such a large and culturally different country, but
                  the agency took care of everything for me. I highly recommend
                  their services to anyone looking for a stress-free and
                  enjoyable travel experience. &rdquo;
                </p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  alt="Woman"
                  src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-bold text-white">Sarah</p>
                  <p className="mt-1 text-white">Freelance Writer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mb-8 sm:break-inside-avoid"
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
            >
              <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                <p className="leading-relaxed text-gray-700 font-lora">
                  &ldquo; Incoming India exceeded all of my expectations. From the
                  moment I landed in Delhi, their team took care of everything -
                  transportation, accommodations, and sightseeing. They even
                  arranged for me to meet with local artisans and learn about
                  traditional crafts. It was an unforgettable experience that I
                  will treasure for a lifetime. &rdquo;
                </p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  alt="Woman"
                  src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-bold text-white">David</p>
                  <p className="mt-1 text-white"> Marketing Executive</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              className="mb-8 sm:break-inside-avoid"
            >
              <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                <p className="leading-relaxed text-gray-700 font-lora">
                  &ldquo; As a first-time traveler to India, I was a bit overwhelmed by
                  the cultural differences and language barriers. But Incoming
                  India s team put me at ease and made me feel at home. &rdquo;
                </p>
              </blockquote>

              <div className="mt-4 flex items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  alt="Woman"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-bold text-white">Maria</p>
                  <p className="mt-1 text-white">University Student</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
