import React from 'react'

export default function Welcome() {
    const mystyle = {
        backgroundImage: 'url("/media/welcomebg.webp")',
        height: "80vh",
        backgroundAttachment: "fixed",
    }
    return (
        <section className=' md:h-[80vh] w-full bg-center bg-cover bg-no-repeat font-serifjp' style={mystyle}>
            <div className='bg-orange-100/80 h-[80vh] text-center px-4 md:pt-10 pt-6'>
                <div className=' max-w-screen-lg mx-auto'>

                    <h1 className='sm:text-5xl text-2xl text-black font-poppins font-semibold  py-3 md:py-8'>Welcome to our World!</h1>
                    <div className='flex justify-center py-0 md:py-5'>
                        <div className='border-[1px] border-orange-600 w-[300px]'></div>
                    </div>
                    <p className='font-medium sm:text-xl text-base py-5 md:py-10  md:pb-16 text-gray-900 '>Welcome to Incoming India, your ultimate travel companion for exploring the wonders of India. We are a premier travel agency that specializes in creating unforgettable experiences for visitors from around the world. With our expert knowledge of India's rich history, culture, and landscapes, we are dedicated to helping you discover India's best. From the moment you contact us, our team of experienced travel professionals will work with you to plan and execute the trip of your dreams. So why wait? Let's explore the magic of India together with Incoming India</p>
                    <div>
                        <a href="#" className='px-4 md:px-8 py-1 md:py-2 text-xl rounded-full bg-orange-500 text-white border-orange-500 border-[2px]'>About Us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
