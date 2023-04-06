import React from "react";
import ReactCardFlip from 'react-card-flip';
import Front from "react-flipme/dist/cjs/components/FlipCard/sides/Front";



class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }



    render() {
        const mystyle = {
            backgroundImage: 'url(/media/india.webp)',
            height: '100%',
        }
        const mystyle2 = {
            backgroundImage: 'url(/media/navbg1.webp)',
            height: '100%',
        }

        return (
            <section className="max-w-screen-lg mx-auto">
                <div className="flex justify-center md:col-span-2 md:w-full">

                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" className='cursor-pointer'>
                        <div key={"front"} onMouseEnter={this.handleClick} className='bg-cover bg-center bg-no-repeat relative h-[25rem] w-[21rem]'>
                            <div className='absolute text-white bottom-4 bg-black/70 w-full py-1 text-3xl font-serifjp bg-center bg-no-repeat bg-cover' style={mystyle}>
                                <p>INDIA</p>
                            </div>
                        </div>

                        <div key={"back"} onMouseLeave={this.handleClick} className='bg-black/70  bg-cover bg-center bg-no-repeat ' style={mystyle2} >
                            <div className='bg-black/70 h-full  bg-cover bg-center bg-no-repeat' >
                                <div className=' text-white text-base font-serifjp px-5 bg-black/50 flex items-center h-96 w-[21rem]'>
                                    <div style={mystyle2} className="h-96 text-white bg-black/70 w-full py-1 font-serifjp bg-center bg-no-repeat bg-cover">
                                        <h2 className='text-3xl font-bold pb-2'>INDIA</h2>
                                        <p>India is a land of diverse cultures, religions, and languages, with a rich history that spans thousands of years. It offers a unique blend of ancient traditions and modernity, with vibrant cities, peaceful villages, and stunning natural landscapes. From the magnificent Taj Mahal to the backwaters of Kerala, India has something to offer everyone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
            </section>
        )
    }
}

export default Test