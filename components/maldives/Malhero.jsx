
import { RiArrowDropDownLine } from "react-icons/ri"


export default function Nephero() {

    const mystyle = {
        backgroundImage: "url('/media/maldives-cover.webp')",
        height: '100%',
        backgroundAttachment: 'fixed',
    }

    return (
        <section id="nephero" className="bg-center bg-cover bg-no-repeat sm:h-[100vh] h-[60vh]" style={mystyle}>

            <div className="h-screen bg-black/40 flex justify-center items-center relative px-3">

                <div>
                    <h1 className="text-4xl md:text-6xl text-white font-semibold font-poppins  tracking-wide hero-shadow text-center hero-shadow">MALDIVES</h1>
                    <p className="md:text-2xl text-xl text-center  text-white font-poppins tracking-wide hero-shadow font-semibold">Paradise on Earth, where turquoise waters meet white sands.</p>
                </div>
                <div className='text-center text-white absolute bottom-1'>
                    <p className="">Scroll Down!</p>
                    <div className='flex justify-center animate-bounce py'>
                        <RiArrowDropDownLine className='text-5xl font-extrathin' />
                    </div>
                </div>

            </div>


        </section >
    )
}
