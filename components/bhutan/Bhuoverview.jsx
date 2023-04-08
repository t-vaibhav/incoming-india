import React from 'react'

export default function Bhuoverview() {
    const mystyle = {
        backgroundImage: 'url("/media/indbg4.jpg")',
        height: '100%',
        backgroundAttachment: 'fixed',
    }


    return (
        <div style={mystyle} className='bg-center bg-cover bg-no-repeat' id='bhutanover'>
            <div className='bg-orange-100/80 md:h-[100vh] h-full font-serifjp pt-10'>
                <div className=' max-w-screen-lg mx-auto text-center'>

                    <h1 className='md:text-5xl text-4xl font-poppins text-black font-semibold pt-5 md:pt-10'>BHUTAN</h1>
                    <div className='flex justify-center py-5 md:py-5'>
                        <div className='border-[1px] border-orange-600 w-[300px]'></div>
                    </div>
                    <div className='py-5 px-3'>
                        <p className='font-medium sm:text-lg text-base md:pb-5 text-gray-900'>Bhutan is a unique and fascinating tourist destination, known for its stunning natural beauty, vibrant culture, and commitment to sustainability. As a country that places a strong emphasis on Gross National Happiness, Bhutan has developed a tourism industry that prioritizes responsible and sustainable practices, ensuring that visitors can enjoy the country's offerings while minimizing their impact on the environment and local communities.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>One of the main draws for tourists in Bhutan is the country's rich cultural heritage. With a deep connection to Buddhism and a long history of isolation from the outside world, Bhutan offers a wealth of ancient temples, monasteries, and fortresses to explore. Visitors can witness colorful festivals, learn about traditional Bhutanese art and architecture, and interact with locals to gain a deeper understanding of the country's unique culture.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>Another highlight of Bhutan is its breathtaking natural scenery. With a diverse range of landscapes, from snow-capped peaks to lush forests, Bhutan offers a range of outdoor activities for visitors to enjoy, such as hiking, trekking, and wildlife safaris. The country's commitment to sustainable tourism means that these experiences are carefully managed to ensure that they do not harm the environment or disrupt local communities, making Bhutan a truly unique and responsible travel destination.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
