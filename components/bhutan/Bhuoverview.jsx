import React from 'react'

export default function Bhuoverview() {
    const mystyle = {
        backgroundImage: 'url("/media/indbg4.jpg")',
        height: '100%',
        backgroundAttachment: 'fixed',
    }


    return (
        <div style={mystyle} className='bg-center bg-cover bg-no-repeat'>
            <div className='bg-orange-100/80 md:h-[100vh] h-full font-serifjp pt-10'>
                <div className=' max-w-screen-lg mx-auto text-center'>

                    <h1 className='sm:text-5xl text-4xl text-black font-bold pt-5 md:pt-10'>INDIA</h1>
                    <div className='flex justify-center py-5 md:py-5'>
                        <div className='border-[1px] border-orange-600 w-[300px]'></div>
                    </div>
                    <div className='py-5 px-3'>
                        <p className='font-medium sm:text-lg text-base md:pb-5 text-gray-900'>India is a vast and diverse country with a rich history and culture. It is home to a variety of landscapes, from the snow-capped Himalayas in the north to the tropical beaches of the south. As a tourist, you can explore ancient forts and palaces, visit colorful bazaars and bustling cities, and experience the spiritual practices and festivals of this vibrant country.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>One of the most popular tourist destinations in India is the Golden Triangle, which includes the cities of Delhi, Agra, and Jaipur. In Delhi, you can visit the Red Fort, Qutub Minar, and Humayun's Tomb, while in Agra, you can see the iconic Taj Mahal. Jaipur, known as the "Pink City," is famous for its beautiful palaces and forts, such as the Hawa Mahal and Amber Fort. Other must-see destinations include the beaches of Goa, the backwaters of Kerala, and the hill stations of Darjeeling and Shimla.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>However, India is not just about sightseeing. It is also a country of delicious food, colorful festivals, and warm hospitality. From the spicy street food of Mumbai to the rich biryanis of Hyderabad, India has something for every palate. The country is also home to a variety of festivals, such as Diwali, Holi, and Eid, which are celebrated with much enthusiasm and joy. Above all, India's people are known for their hospitality and warmth, and as a tourist, you are sure to feel welcome and at home here.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
