
import { RiArrowDropDownLine } from "react-icons/ri"


export default function Nephero() {

    const mystyle = {
        backgroundImage: "url('/media/maldives-cover.jpg')",
        height: '100vh',
        backgroundAttachment: 'fixed',
    }

    return (
        <section id="nephero" className="bg-center bg-cover bg-no-repeat" style={mystyle}>

            <div className="h-screen bg-black/40 flex justify-center items-center relative">

                <div>
                    <h1 className="text-4xl md:text-7xl text-white font-semibold font-poppins  tracking-normal text-center">MALDIVES</h1>
                    <p className="text-2xl text-white font-poppins font-semibold">Paradise on Earth, where turquoise waters meet white sands.</p>
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
