import { RiArrowDropDownLine } from "react-icons/ri"


export default function Nephero() {

    const mystyle = {
        backgroundImage: "url('/media/lanka-cover.jpg')",
        height: '100vh',
        backgroundAttachment: 'fixed',
    }

    return (
        <section id="nephero" className="bg-center bg-cover bg-no-repeat" style={mystyle}>

            <div className="h-screen bg-black/40 flex justify-center items-center relative">

                <div>
                    <h1 className="text-4xl md:text-7xl text-white font-semibold font-poppins  tracking-normal text-center">SRI LANKA</h1>
                    <p className="sm:text-2xl text-xl px-2 text-center text-white font-poppins font-semibold">Teardrop isle of lush landscapes and ancient marvels.</p>
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
