import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Reviews from "./utilities/Reviews";

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
        <motion.div
          className="mx-auto max-w-screen-xl px-4 pb-16 pt-0 sm:px-6 lg:px-8"
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <div className="[column-fill:_balance] sm:columns-3 sm:gap-6 lg:columns-3 lg:gap-8" id="review-section">
            {Reviews.map((review, i) => (
              <div className="mb-8 sm:break-inside-avoid">
                <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
                  <p className="leading-relaxed text-gray-700 font-lora">
                    &ldquo;{review.review} &rdquo;
                  </p>
                </blockquote>
                <div className="mt-4 flex items-center gap-4">
                  <Image
                    width={48}
                    height={48}
                    alt="Woman"
                    src={review.image}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="mt-1 text-white">{review.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
