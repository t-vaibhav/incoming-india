import React from 'react'

export default function Maloverview() {
    const mystyle = {
        backgroundImage: 'url("/media/indbg4.jpg")',
        height: '100%',
        backgroundAttachment: 'fixed',
    }


    return (
        <div style={mystyle} className='bg-center bg-cover bg-no-repeat text-black' id='malover'>
            <div className='bg-orange-100/80 md:h-[100vh] h-full font-serifjp pt-10'>
                <div className=' max-w-screen-lg mx-auto text-center'>

                    <h1 className='sm:text-5xl text-4xl text-black  font-poppins font-semibold pt-5 md:pt-10'>MALDIVES</h1>
                    <div className='flex justify-center py-5 md:py-5'>
                        <div className='border-[1px] border-orange-600 w-[300px]'></div>
                    </div>
                    <div className='py-5 px-3'>
                        <p className='font-medium sm:text-lg text-base md:pb-5 text-gray-900'>The Maldives is a stunning archipelago of over 1,000 coral islands scattered across the Indian Ocean. Known for its crystal-clear turquoise waters, pristine beaches, and vibrant marine life, it is a dream destination for any traveler seeking an idyllic tropical paradise. Whether you're looking for a romantic getaway, a family vacation, or a solo adventure, the Maldives offers something for everyone. The Maldives is also a perfect place to unwind and relax in the luxurious resorts that are located on some of the most pristine beaches in the world.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>One of the biggest draws of the Maldives is its world-renowned snorkeling and diving opportunities. The coral reefs surrounding the islands are home to an incredible array of marine life, including colorful fish, sea turtles, and even whale sharks. Visitors can explore these underwater wonderlands with the help of experienced guides, or simply don a mask and fins and dive in on their own. Besides, the Maldives also offers a wide range of other water-based activities like windsurfing, kayaking, and fishing.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>Beyond the stunning beaches and crystal-clear waters, the Maldives also offers a rich cultural heritage that is well worth exploring. Visitors can immerse themselves in the local Maldivian culture by visiting traditional fishing villages, learning about local crafts and cuisine, and attending cultural festivals. With its perfect blend of natural beauty and cultural richness, the Maldives is a truly unforgettable destination that is sure to leave visitors with lasting memories. The Maldives also offers a perfect combination of adventure and relaxation, making it an ideal destination for anyone looking for an escape from the hustle and bustle of everyday life.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
