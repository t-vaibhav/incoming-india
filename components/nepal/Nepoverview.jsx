import React from 'react'

export default function Nepoverview() {
    const mystyle = {
        backgroundImage: 'url("/media/indbg4.jpg")',
        height: '100%',
        backgroundAttachment: 'fixed',
    }


    return (
        <div style={mystyle} className='bg-center bg-cover bg-no-repeat' id='nepover'>
            <div className='bg-orange-100/80 md:h-[100vh] h-full font-serifjp pt-10'>
                <div className=' max-w-screen-lg mx-auto text-center'>

                    <h1 className='sm:text-5xl text-4xl text-black font-semibold pt-5 md:pt-10'>Nepal</h1>
                    <div className='flex justify-center py-5 md:py-5'>
                        <div className='border-[1px] border-orange-600 w-[300px]'></div>
                    </div>
                    <div className='py-5 px-3'>
                        <p className='font-medium sm:text-lg text-base md:pb-5 text-gray-900'>Nepal is a truly magical destination that has captivated travelers for centuries. Its breathtaking natural beauty, rich cultural heritage, and warm hospitality make it a must-visit for any adventurer. With some of the highest peaks in the world, including Mount Everest, Nepal's stunning landscapes range from lush jungles to snow-capped mountains. The country is also home to serene lakes and rolling hills, offering an unparalleled experience for nature lovers.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>Nepal's rich cultural diversity is another draw for tourists, with ancient temples, monasteries, and colorful festivals offering a glimpse into the country's fascinating history. Nepalese cuisine is another highlight, with unique and delicious dishes like momos, dal bhat, and chow mein to savor. The warm and welcoming locals are always ready to guide and assist visitors, making their trip an unforgettable experience.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>Adventure seekers will find a plethora of activities in Nepal, from trekking to rafting and wildlife safaris. The country's stunning natural beauty makes it a photographer's paradise, with endless opportunities to capture breathtaking landscapes, festivals, and traditions. With so much to offer, Nepal is truly a destination that offers something for everyone, whether you're seeking a spiritual journey to a sacred temple or a thrilling adventure through rugged terrain.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
