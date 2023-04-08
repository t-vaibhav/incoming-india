import { RiArrowDropDownLine } from "react-icons/ri"



export default function Nephero() {

    const mystyle = {
        backgroundImage: "url('/media/bhutan-cover.webp')",
        height: '100vh',
        backgroundAttachment: 'fixed',
    }

    return (
        <section id="nephero" className="bg-center bg-cover bg-no-repeat" style={mystyle}>

            <div className="h-screen bg-black/40 flex justify-center items-center relative px-3">

                <div>
                    <h1 className="text-4xl md:text-7xl text-white font-semibold font-poppins  tracking-normal text-center">BHUTAN</h1>
                    <p className="md:text-2xl text-xl text-center text-white font-poppins font-semibold">the land of the thunder dragon and spiritual serenity.</p>
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
