import React from 'react'
import Image from 'next/image'
import Data from "./Data"

export default function Presence() {
  return (
    <div>
      <div
        className="w-full h-[100vh] flex justify-center bg-fixed flex-col text-center"
        id="presence"
      >
        <h1 className="text-white text-6xl text-center font-poppins tracking-wide hero-shadow font-semibold">
          PRESENCE
        </h1>
        <h3 className='md:text-3xl text-lg font-poppins font-semibold tracking-wide text-white hero-shadow my-6 mx-2'>Find the Perfect Spot to Plan Your Next Adventure</h3>

        <div className='flex flex-row m-0 flex-wrap justify-center mt-8'>
          {Data.map((Lang, i) => (
            <div key={i}>
              <label htmlFor={`my-modal${i}`} className="btn bg-blend-multiply backdrop-blur-lg bg-opacity-10 bg-yellow-100 text-black border-none m-4 md:mx-8 border-yellow-600 border-2 hover:bg-yellow-400 hover:cursor-default">{Lang.title}</label>
              <input type="checkbox" id={`my-modal${i}`} className="modal-toggle" />
              {/* <div className="modal">
                <div className="modal-box bg-yellow-100 text-black p-0">
                  <figure><Image width={384} height={240} src={Lang.img} alt="Shoes" className='h-fit w-screen' /></figure>
                  <h3 className="font-bold my-4 text-center text-orange-500 text-2xl">{Lang.title}</h3>
                  <div class="shrink-0 flex flex-row ml-2">
                    <div class="rounded-md w-14 h-14 flex items-center justify-center pb-5 pl-4">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" class="w-6 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 482">
                        <path fill="#F97316" stroke="#F97316" d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388C335.179,61.609,273.569,0,197.849,0zM197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
                      </svg>
                    </div>
                    <p class="text-orange-400 font-semibold text-base sm:text-lg mr-4 pr-2">{Lang.location}</p>
                  </div>
                  <div className="modal-action m-4">
                    <label htmlFor={`my-modal${i}`} className="btn bg-yellow-200 text-black border-none hover:bg-yellow-300">Close</label>
                  </div>
                </div>
              </div> */}

            </div>
          ))}{" "}
        </div>
      </div>
    </div >
  )
}
