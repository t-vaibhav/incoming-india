import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { IoLogoWhatsapp } from 'react-icons/io'
import '@/styles/globals.css'
import Image from 'next/image'

export default function App({ Component, pageProps }) {
  return (
    <>
      < Component {...pageProps} />
      <div className='hero-shadow text-3xl fixed md:bottom-8 bottom-8 right-8 md:right-8 h-10 w-10 z-50'>
        <a href="https://wa.me/919891242028">
          <Image src='/media/whatsapp.png' fill={true} className='object-cover hover:scale-110 duration-300 cursor-pointer' />
        </a>
      </div>
      <Navbar />
      <Footer />
    </>

  )
}
