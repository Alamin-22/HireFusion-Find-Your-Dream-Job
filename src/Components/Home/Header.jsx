import CountUp from 'react-countup';
import { motion } from "framer-motion"

const Header = () => {
    

    const testVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                staggerChildren: 0.1,
            }
        },
        exit: {
            x: 500,
            opacity: 0,
        }
    }




    return (
        <motion.div variants={testVariants} initial="initial" animate="animate" className="hero min-h-[80vh] " style={{ backgroundImage: 'url(https://i.ibb.co/3vV5P8Y/asdbanner.jpg)' }}>
            <div className="hero-overlay  bg-opacity-60"></div>
            <div className="hero-content   text-neutral-content">
                <div className="max-w-4xl ">
                    <h1 className="mb-5 text-2xl text-[#e4e2e2] font-bold">We have <CountUp className='text-[#8befe3cc]'
                        start={0}
                        end={5700}
                        duration={2.75} />+ great job offers you deserve!</h1>
                    <p className="mb-5 text-5xl text-white"><span className='font-bold'>Your Dream</span> <br />
                        Job is Waiting</p>
                    <p className='text-[#e4e2e2]'>Welcome to HireFusion, your ultimate destination for career excellence. Explore a world of endless possibilities as we connect you with the most exciting job opportunities. Whether you are a seasoned professional or just starting your journey, we are here to empower your dreams and ambitions. Browse, apply, and transform your career path today!</p>
                    <div>
                        <div className="">
                            <span className="max-w-lg text-[#8befe3cc] text-xl  font-semibold tracking-tight  xl:text-2xl  p-2 mt-2">Search Jobs By Categories.</span>
                            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                                <input id="email" type="text" className="md:w-96 px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search.." />

                                <button className="w-full btn btn-primary  md:w-auto md:mx-4 ">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;