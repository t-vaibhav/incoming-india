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
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.4 }}
              variants={{
                visible: { x: 0 },
                hidden: { x: "-100vh" },
              }}
              class="mb-8 sm:break-inside-avoid"
            >
              <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                <p class="leading-relaxed text-gray-700">
                  I had an incredible trip to India thanks to the team at
                  Incoming India! As a solo traveler, I was a bit nervous about
                  navigating such a large and culturally different country, but
                  the agency took care of everything for me. I highly recommend
                  their services to anyone looking for a stress-free and
                  enjoyable travel experience.
                </p>
              </blockquote>

              <div class="mt-4 flex items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  alt="Woman"
                  src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
                  class="h-12 w-12 rounded-full object-cover"
                />

                <div class="text-sm">
                  <p class="font-medium">Sarah</p>
                  <p class="mt-1">Freelance Writer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              class="mb-8 sm:break-inside-avoid"
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 0.7 }}
              variants={{
                visible: { x: 0 },
                hidden: { x: "-100vh" },
              }}
            >
              <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                <p class="leading-relaxed text-gray-700">
                  Incoming India exceeded all of my expectations. From the
                  moment I landed in Delhi, their team took care of everything -
                  transportation, accommodations, and sightseeing. They even
                  arranged for me to meet with local artisans and learn about
                  traditional crafts. It was an unforgettable experience that I
                  will treasure for a lifetime.
                </p>
              </blockquote>

              <div class="mt-4 flex items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  alt="Woman"
                  src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  class="h-12 w-12 rounded-full object-cover"
                />

                <div class="text-sm">
                  <p class="font-medium">David</p>
                  <p class="mt-1"> Marketing Executive</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              transition={{ duration: 1 }}
              variants={{
                visible: { x: 0 },
                hidden: { x: "-100vh" },
              }}
              class="mb-8 sm:break-inside-avoid"
            >
              <blockquote class="rounded-xl bg-gray-50 p-6 shadow">
                <p class="leading-relaxed text-gray-700">
                  As a first-time traveler to India, I was a bit overwhelmed by
                  the cultural differences and language barriers. But Incoming
                  India s team put me at ease and made me feel at home.
                </p>
              </blockquote>

              <div class="mt-4 flex items-center gap-4">
                <Image
                  width={48}
                  height={48}
                  alt="Woman"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  class="h-12 w-12 rounded-full object-cover"
                />

                <div class="text-sm">
                  <p class="font-medium">Maria</p>
                  <p class="mt-1">University Student</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
