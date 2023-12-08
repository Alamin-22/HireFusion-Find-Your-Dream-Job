
import { Helmet } from "react-helmet-async";
import CareerStatics from "../Components/Home/CareerStatics";
import Header from "../Components/Home/Header";
import HomeTab from "../Components/Home/HomeTab";

const Home = () => {
    return (
        <div>
            <Helmet><title>Hire Fusion | Home</title></Helmet>
            <Header></Header>
            <HomeTab></HomeTab>
            <div>
                <div>
                    
                </div>
                <CareerStatics></CareerStatics>
            </div>

        </div>
    );
};

export default Home;