import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import error from "../assets/gif/Animation - error.json"
const Error = () => {
    return (
        <div>

            <section>
                {/*  Container  */}
                <div className="mx-auto w-full h-screen max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    {/*  Component */}
                    <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
                        <div>
                            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Oops!</h1>
                            <p className="mb-6 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-10 lg:mb-12">
                            We could not find the page you are looking for. Be patient we will fix it soon!!
                            </p>
                            <Link to={"/"} className="inline-block items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white">Back Home</Link>
                        </div>
                        <div>
                            {/* <img src="https://i.ibb.co/1skTgp9/page-error.png" alt="" className="mx-auto inline-block h-[80vh] w-full  max-w-[640px] object-cover" /> */}
                            <Lottie animationData={error} className='w-96 mx-auto '></Lottie>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;