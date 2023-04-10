import React from 'react'

export default function Contact() {
    return (
        <div className='bg-white'>
            <div className="container mx-auto">
                <section className="mb-32 text-gray-800 ">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover bg-black/60 bg-blend-overlay"
                        style={{ backgroundPosition: "50%", backgroundImage: "url('https://i.ibb.co/LNbY1RS/chris-lawton-o0l-M8-W-7w-A-unsplash-2.jpg')", height: "300px", opacity: "80%" }}>
                        <h1 className='text-4xl md:text-6xl font-semibold font-poppins tracking-wide hero-shadow'>CONTACT US</h1>
                    </div>
                    <div className="container text-gray-800 px-4 md:px-12 flex justify-center">
                        <div className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 w-fit"
                            style={{ marginTop: "-100px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(30px)" }}>
                            <div className="flex flex-col md:flex-row">
                                <div className="grow-0 shrink-0 basis-1/2 w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                                    <form>
                                        <div className="form-group mb-6">
                                            <input type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:bordbg-orange-500 focus:outline-none" id="exampleInput7"
                                                placeholder="Name" />
                                        </div>
                                        <div className="form-group mb-6">
                                            <input type="email" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:bordbg-orange-500 focus:outline-none" id="exampleInput8"
                                                placeholder="Email address" />
                                        </div>
                                        <div className="form-group mb-6">
                                            <textarea className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:bordbg-orange-500 focus:outline-none
              " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <button type="submit" className="
              w-full
              px-6
              py-2.5
              bg-orange-500
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-orange-500 hover:shadow-lg
              focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-orange-500 active:shadow-lg
              transition
              duration-150
              ease-in-out">Send</button>
                                    </form>
                                </div>
                                <div className="grow-0 shrink-0 basis-1/2 w-full xl:w-7/12">
                                    <div className="flex flex-col w-fit">
                                        <div className="mb-6 grow-0 shrink-0 basis-auto w-full px-3 lg:px-6">
                                            <div className="flex items-start flex-col">
                                                <div className="shrink-0 flex flex-row">
                                                    <div className="p-4 rounded-md w-14 h-14 flex items-center justify-center scale-150">
                                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                            <g id="SVGRepo_iconCarrier">
                                                                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#F97316" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#F97316" strokeWidth="2" stroke-linecap="round"></rect>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <p className="font-semibold mt-3 text-xl">E-Mail support</p>
                                                </div>
                                                <div className="grow ml-4">
                                                    <p className="text-orange-400 font-semibold text-lg">info@incomingindia.co.in</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-6 grow-0 shrink-0 basis-auto w-full md:w-[100%] px-3 lg:px-6 mt-4">
                                            <div className="flex items-start flex-col">
                                                <div className="shrink-0 flex flex-row">
                                                    <div className="p-4 rounded-md w-14 h-14 flex items-center justify-center">
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" className="w-6 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 482">
                                                            <path fill="#F97316" stroke="#F97316" d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388C335.179,61.609,273.569,0,197.849,0zM197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
                                                        </svg>
                                                    </div>
                                                    <p className="font-semibold mt-2 text-xl">Location</p>
                                                </div>
                                                <div className="grow ml-4">
                                                    <p className="text-orange-400 font-semibold text-lg">DMS-439, 4th Floor, DLF Towers, Shivaji Marg, New Delhi 110015 (India)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}
