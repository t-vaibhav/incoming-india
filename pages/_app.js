import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { IoLogoWhatsapp } from 'react-icons/io'
import '@/styles/globals.css'
import Image from 'next/image'

export default function App({ Component, pageProps }) {
  return (
    <>


      < Component {...pageProps} />
      <div className='hero-shadow text-3xl fixed md:bottom-8 bottom-8 right-8 bg-white rounded-full  md:right-8 h-16 w-16 p-2 z-50 hover:scale-110 duration-300'>
        <a href="https://wa.me/919891242028" >
          <img src='/media/whatsapp.png' className='object-cover  cursor-pointer' />
        </a>
      </div>
      <Navbar />
      <Footer />
    </>

  )
}
