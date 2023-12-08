import CountUp from 'react-countup';

const CareerStatics = () => {
    return (
        <div>
            <div className="hero min-h-[60vh] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/1bNBnrc/carerstac.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl  font-bold">Careers Statistics</h1>
                        <div className='md:flex space-y-3 md:space-y-0 md:space-x-10 lg:space-x-28 justify-center'>
                            <div>
                                <CountUp className='text-5xl text-[#8befe3cc]'start={0}  end={109234} duration={8} />
                                <p className='text-2xl'>Candidates</p>
                            </div>
                            <div>
                                <CountUp className='text-5xl text-[#8befe3cc]'start={0}  end={59234} duration={8} />
                                <p className='text-2xl'>Job Posted</p>
                            </div>
                            <div>
                                <CountUp className='text-5xl text-[#8befe3cc]'start={0}  end={40691} duration={8} />
                                <p className='text-2xl'>Job Success </p>
                            </div>
                            <div>
                                <CountUp className='text-5xl text-[#8befe3cc]'start={0}  end={600} duration={8} /><span className='text-5xl text-[#8befe3cc]'>+</span>
                                <p className='text-2xl'>Companies </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CareerStatics;