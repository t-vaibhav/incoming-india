import Image from "next/image";
import Documents from "../assets/documents.jpg"
import Communication from "../assets/communication.jpg"
import Cuisine from "../assets/cuisine.jpg"
import Protection from "../assets/protection.jpg"
import Recreation from "../assets/recreation.jpg"
import Traditions from "../assets/traditions.jpg"
import Transit from "../assets/transit.jpg"
<<<<<<< Updated upstream
import React, { useState, useEffect } from "react";





=======
>>>>>>> Stashed changes
export default function Insights() {

  React.useEffect(() => {
    window.addEventListener('scroll', changeColor)
  }, []);

  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= window.innerHeight) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  return (
    <div>
      <div
        className="w-full h-[100vh] flex justify-center"
        id="insights"
      >
<<<<<<< Updated upstream
        <h1 className="text-white text-6xl text-center m-auto font-poppins tracking-wide hero-shadow font-semibold">
          INSIGHTS
        </h1>
      </div>
      <div id="insight-section" className='bg-yellow-100'>
        <nav className={`${color ? ' fixed top-[60px] lg:h-[30px] h-[50px] bg-white right-0 left-0' : 'h-[60px]'} bg-white z-10 w-full flex justify-center items-center font-serifjp`}>
=======
        <h1 className="md:text-6xl text-6xl font-poppins font-semibold tracking-wide text-white hero-shadow my-auto">
          Insights
        </h1>
      </div>
      <div id="insight-section" className='bg-yellow-100/0'>
        <nav className={`${color ? ' fixed top-[60px] lg:h-[30px] h-[50px] bg-white right-0 left-0' : 'h-[60px]'} bg-white z-10 w-[100vw] flex justify-center items-center font-serifjp`}>
>>>>>>> Stashed changes
          <ul className='lg:flex flex-row justify-center md:space-x-12 text-sm sm:text-md lg:text-lg'>
            <div className='justify-center flex '>
              <div className='lg:space-x-12 space-x-5 flex'>
                <li className={` cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500`}> <a href="#1">Documents</a></li>
                <li className={` cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500`}><a href="#2">Traditions</a></li>
                <li className={` cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500`}> <a href="#3">Protection</a></li>
              </div>
            </div>
            <div className=' lg:space-x-12 space-x-5 flex'>
              <li className={`cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500`} > <a href="#4">Communication</a></li>
              <li className={`cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500`} > <a href="#5">Transit</a></li>
              <li className={`cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500`} > <a href="#6">Recreation</a></li>
              <li className={`cursor-pointer hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500`} > <a href="#7">Cuisine</a></li>
            </div>
          </ul>
        </nav >

        <div className="flex flex-col lg:flex-row font-lora bg-orange-300/40 " id='1'>
          <div className="w-full lg:w-1/2 ">
            <Image
              src={Documents}
              alt="Your Image"
              width={720}
              height={640}
              className=''
              layout="responsive"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center my-4 mb-6">
            <div>
              <h1 className="text-center text-4xl mb-6 underline decoration-orange-500 underline-offset-[12px]">DOCUMENTS</h1>
              <p className="text-center text-lg  mx-8">Foreign tourists visiting India are required to have a valid passport and a visa, unless they come from countries that are exempt from visa requirements. Visa applications can be made online or in-person at an Indian embassy or consulate. Different types of visas are available, including tourist, business, and student visas, and each has its own requirements and fees. It&lsquo;s important to check the validity of your passport and any additional requirements, such as minimum validity period and number of blank pages, before applying for a visa.</p>
            </div>
          </div>
        </div>


<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes
        <div className="flex flex-col-reverse lg:flex-row font-lora bg-purple-400/30" id='2'>
          <div className="w-full lg:w-1/2 flex items-center justify-center my-4 mb-6">
            <div>
              <h1 className="text-center text-4xl mb-6 underline decoration-orange-500 underline-offset-[12px]">TRADITIONS</h1>
              <p className="text-center text-lg  mx-8">India has a rich and diverse culture with many customs and traditions that may be unfamiliar to foreign tourists. It&lsquo;s important to be respectful of local customs and etiquette to avoid offending locals. Some examples of customs to be aware of include removing shoes before entering a home or temple, covering your head in places of worship, and avoiding public displays of affection. Dress modestly and conservatively, especially when visiting religious sites. It&lsquo;s also important to be respectful of people&lsquo;s personal space and avoid intrusive behavior, such as taking photos without permission.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={Traditions}
              alt="Your Image"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
<<<<<<< Updated upstream


        <div className="flex flex-col lg:flex-row font-lora bg-violet-500/40 pb-4" id='3'>
=======
        <div className="flex flex-col lg:flex-row font-lora bg-violet-700/20" id='3'>
>>>>>>> Stashed changes
          <div className="w-full lg:w-1/2">
            <Image
              src={Protection}
              alt="Your Image"
              width={640}
              height={640}
              className='h-auto w-auto'
              layout="responsive"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center my-4 mb-6">
            <div>
              <h1 className="text-center text-4xl mb-6  underline decoration-orange-500 underline-offset-[12px]">PROTECTION</h1>
              <p className="text-center text-lg  mx-8">India is generally a safe country for tourists, but there are some safety concerns to be aware of. Petty theft, scams, and pickpocketing can occur in crowded areas, so it&lsquo;s important to be vigilant and keep your valuables secure. Women should take extra precautions, such as avoiding traveling alone at night and dressing conservatively. It&lsquo;s also important to be aware of the risk of natural disasters, such as floods and earthquakes, and to follow local safety guidelines in case of emergency.</p>
            </div>
          </div>
        </div>


        <div className="flex flex-col-reverse lg:flex-row font-lora bg-red-400/20" id='4'>
          <div className="w-full lg:w-1/2 flex items-center justify-center my-4 mb-6">
            <div>
              <h1 className="text-center text-4xl mb-6  underline decoration-orange-500 underline-offset-[12px]">COMMUNICATION</h1>
              <p className="text-center text-lg  mx-8">India has many different languages and dialects, but English is widely spoken and understood, especially in tourist areas. However, it can still be helpful to learn a few basic phrases in Hindi or other local languages to communicate with locals and show respect for their culture. Use non-verbal communication, such as gestures and facial expressions, to communicate effectively.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={Communication}
              alt=''
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>


<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
        <div className="flex flex-col lg:flex-row font-lora bg-green-500/20" id='5'>
          <div className="w-full lg:w-1/2">
            <Image
              src={Transit}
              alt="Your Image"
              width={640}
              height={640}
              className='h-auto w-auto'
              layout="responsive"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center my-4 mb-6">
            <div>
              <h1 className="text-center text-4xl mb-6  underline decoration-orange-500 underline-offset-[12px]">TRANSIT</h1>
              <p className="text-center text-lg  mx-8">India has a variety of transportation options, including buses, trains, taxis, and ride-sharing services. Public transit can be crowded and confusing for tourists, so it&lsquo;s important to plan your route in advance and ask for help if needed. Taxis and ride-sharing services are widely available and can be a convenient way to get around, but be sure to negotiate the fare in advance and avoid unlicensed taxis. Traffic in India can be chaotic and unpredictable, so it&lsquo;s important to be alert and cautious when crossing the street or driving.</p>
            </div>
          </div>
        </div>


        <div className="flex flex-col-reverse lg:flex-row font-lora bg-sky-400/20" id='6'>
          <div className="w-full lg:w-1/2 flex items-center justify-center my-4 mb-6">
            <div>
              <h1 className="text-center text-4xl  mb-6  underline decoration-orange-500 underline-offset-[12px]">RECREATION</h1>
              <p className="text-center text-lg  mx-8">India is home to many popular tourist attractions, such as the Taj Mahal, the beaches of Goa, and the backwaters of Kerala. There are also many cultural festivals and outdoor adventures to enjoy, such as hiking in the Himalayas or attending the colorful Holi festival. Be sure to check the best time to visit each attraction and any entrance fees or other costs associated with visiting them. Consider exploring off-the-beaten-path destinations to experience the local culture and avoid crowds.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={Recreation}
              alt="Your Image"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>


        <div className="flex flex-col lg:flex-row font-lora bg-fuchsia-500/20" id='7'>
          <div className="w-full lg:w-1/2">
            <Image
              src={Cuisine}
              alt="Your Image"
              width={640}
              height={640}
              className='h-auto w-auto'
              layout="responsive"
            />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center my-4 mb-6">
            <div>
              <h1 className="text-center text-4xl mb-6  underline decoration-orange-500 underline-offset-[12px]">CUISINE</h1>
              <p className="text-center text-lg  mx-8">India has a rich and diverse culinary scene, with many regional specialties and vegetarian options. Street food is popular and delicious, but it&lsquo;s important to be cautious about food safety to avoid getting sick. Stick to busy food stalls with high turnover, avoid raw or undercooked foods, and drink bottled water or boiled water. Try popular dishes like biryani, butter chicken, and dosa, and enjoy popular beverages like chai tea and lassi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}