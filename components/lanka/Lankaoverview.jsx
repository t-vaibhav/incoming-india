import React from 'react'

export default function Lankaoverview() {
    const mystyle = {
        backgroundImage: 'url("/media/indbg4.jpg")',
        height: '100%',
        backgroundAttachment: 'fixed',
    }


    return (
        <div style={mystyle} className='bg-center bg-cover bg-no-repeat' id='lankaover'>
            <div className='bg-orange-100/80 md:h-[100vh] h-full font-serifjp pt-10'>
                <div className=' max-w-screen-lg mx-auto text-center'>

                    <h1 className='sm:text-5xl text-4xl text-black font-bold pt-5 md:pt-10'>SRI LANKA</h1>
                    <div className='flex justify-center py-5 md:py-5'>
                        <div className='border-[1px] border-orange-600 w-[300px]'></div>
                    </div>
                    <div className='py-5 px-3'>
                        <p className='font-medium sm:text-lg text-base md:pb-5 text-gray-900'>Sri Lanka, the jewel of the Indian Ocean, is a tropical paradise that never fails to enchant travelers with its stunning beauty, rich cultural heritage, and warm hospitality. The country is blessed with a diverse landscape that includes golden beaches, misty mountains, lush green forests, and ancient ruins that bear witness to a fascinating history. The tropical climate ensures that the weather is always pleasant, making it an ideal destination for year-round travel.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>The island nation is home to a rich cultural heritage that is evident in its ancient temples, palaces, and monuments. The Cultural Triangle in the north-central region of the island is a UNESCO World Heritage Site that showcases some of the most important historical and cultural landmarks of the country. From the sacred Temple of the Tooth in Kandy to the ancient city of Anuradhapura, Sri Lanka is a treasure trove of cultural wonders that are a testament to the country's rich history and vibrant culture. The country is also known for its traditional dance forms, colorful festivals, and music that reflect the country's diverse cultural influences.</p>
                        <p className='font-medium sm:text-lg text-base md:pb-5  text-gray-900'>Sri Lanka's coastline is dotted with stunning beaches that offer a range of activities, from surfing to whale watching. The south coast region, in particular, is known for its picturesque beaches and lively nightlife. The east coast region, on the other hand, offers a more tranquil and secluded beach experience, with pristine beaches and clear blue waters. The country is also home to a variety of wildlife, including elephants, leopards, and birds, making it a nature lover's paradise. The diverse landscape, rich cultural heritage, and warm hospitality make Sri Lanka a destination that should be on every traveler's bucket list</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
