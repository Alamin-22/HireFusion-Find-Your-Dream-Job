import FeaturedSlider from "./FeaturedSlider";

const FeaturedJob = () => {
    return (
        <div className="mt-6">
            <h1 className=' my-6 text-4xl font-medium'>Featured Jobs</h1>
            <section>
                <FeaturedSlider></FeaturedSlider>
            </section>
            <div className=" w-full mt-14">
                <h1 className="text-lg text-center invisible md:visible">Add will be added here</h1>
            </div>
        </div>
    );
};

export default FeaturedJob;