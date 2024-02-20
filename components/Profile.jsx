"use client"
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';

const summitData = [
    {
        title: 'Empowering clients to achieve their objectives.',
        description:
            'Creating intelligent support networks and forming strategic alliances are crucial for companies aiming to provide exceptional value and seamless travel experiences. Through collaboration, alliance partners can offer a powerful combination of local expertise, cultural sensitivity, and global reach by leveraging shared resources.',
        image1: "/1.jpg",
        image2: "/2.jpg",
        description1:
            'Incoming India has strategically partnered with leading companies beyond India, seeking to foster openness and mutual benefit. The company aims to join hands with global leaders in the travel industry, co-developing products that enhance clients travel experiences in South Asia, particularly India. A commitment to an open and mutually beneficial association is extended, emphasizing a dedication to collective growth and success.',
        live: "",
        now: ""
    },
    {
        title: 'About Us',
        description:
            "Incoming India's subcontinent specialists, deeply rooted in the region, offer unparalleled firsthand knowledge acquired through extensive travel. Their transparent and practical approach ensures an optimal travel experience. Setting us apart is our commitment to ongoing improvement, with specialists regularly revisiting, meticulously inspecting hotels, and staying abreast of travel issues.",
        image1: "/3.jpg",
        image2: "/4.jpg",
        live: "",
        description1:
            'We redefine travel by introducing the joy of tailor-made experiences at Incoming India. Liberated from set itineraries, our guests explore at their own pace, selecting accommodations tailored to their needs with the guidance of our specialists. Whether first-time or returning visitors, our aim is to organize inspiring journeys across the Indian subcontinent, showcasing our passion for the region. Travel Redefined – the vision that led Anup Nair to establish Incoming India.',
        now: ""
    },
    {
        title: "Our team personifies the essence of our brand.",
        description:
            "At Incoming India, our team is the living embodiment of our brand, fueled by a shared passion for travel and a steadfast commitment to customer success. Working collaboratively in regional teams, our top talents come together to execute a unified supplier strategy, uphold consistent service standards, and follow operating guidelines.",
        image1: "/5.jpg",
        image2: "/6.jpg",
        live: "",
        description1:
            'Incoming India stands firm in its dedication to redefining travel, ensuring an exceptional and uniquely crafted experience for every traveler. Our commitment is not just to destinations but to the people we serve, embodying the spirit of travel in every interaction.',
        now: ""
    },
    {
        title: 'Our exploration of specialized domains',
        description:
            'Embark on a distinctive travel experience with Incoming India, where our expertise lies in navigating niche markets. From crafting bespoke cultural escapades to orchestrating exclusive culinary journeys, we redefine travel by catering to individual passions. Our deliberate foray into these specialized realms ensures that each expedition is a personalized and unforgettable exploration, making Incoming India your gateway to extraordinary adventures.',
        image1: "/7.jpg",
        image2: "/8.jpg",
        description1:
            'At Incoming India, our journey is marked by a dedicated pursuit of unique travel niches. Specializing in curated experiences, we offer tailored cultural immersions and exclusive culinary journeys that transcend conventional vacations. Our commitment to personalized adventures sets us apart, making Incoming India the go-to choice for those seeking more than just a trip – they desire an unparalleled exploration into the extraordinary facets of travel.',
        live: "",
        now: ""
    },
];

const Esummit = ({ title, description, image1, image2, live, now, description1 }) => (
    <div className="my-12 items-start flex flex-col mx-6 md:mx-12 lg:mx-16">
        <h1 className="text-black text-3xl lg:text-5xl uppercase xl:mx-24 font-alkatra font-semibold mx-6 md:mx-0 md:mb-12 mt-12 mb-6 md:mt-24">{title}<a className=' text-base md:text-lg text-violet-400 underline underline-offset-4 mx-4' href={live}>{now}</a></h1>
        <div className="mx-6 lg:mx-0 flex flex-col md:flex-row">

            <div className='flex flex-col md:basis-1/2'>
                <div className='w-full'>
                    <p className="text-black/60 text-base font-medium md:text-base lg:text-xl my-auto md:my-auto xl:mx-24 font-roboto">{description}</p>
                </div>
                <div className='w-full'>
                    <Image alt="" width={500} height={400} src={image1} className="md:scale-90 mx-auto xl:scale-[80%] my-8 md:my-0 rounded-2xl w-full" />
                </div>
            </div>
            <div className='flex flex-col md:flex-col-reverse md:basis-1/2'>
                <div className='w-full'>
                    <p className="text-black/60 text-base font-medium md:text-base lg:text-xl my-auto md:my-auto xl:mx-24 font-roboto">{description1}</p>
                </div>
                <div className='w-full'>
                    <Image alt="" width={500} height={400} src={image2} className="md:scale-90 mx-auto xl:scale-[80%] my-8 md:my-0 rounded-2xl w-full" />
                </div>
            </div>
        </div>
    </div>
);

export default function App() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.01 });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 1 }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 60 },
            }} >
            {summitData.map((data, index) => (
                <Esummit key={index} {...data} />
            ))}
        </motion.div>
    );
}