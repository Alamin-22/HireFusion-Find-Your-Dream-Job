
import { Helmet } from "react-helmet-async";
import CareerStatics from "../Components/Home/CareerStatics";
import Header from "../Components/Home/Header";
import HomeTab from "../Components/Home/HomeTab";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Home = () => {

    const axios = useAxiosPublic();


    const getDataTawhidBhai = () => {
        axios.get("/api/v1/auth/cookie_checker/")
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }
    const getDataMollik = () => {
        axios.get("/api/v2/jwt")
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }

    const body = {
        // url: ""
        name: "Mr. Mollik",
        password: "Alamin12",
        // email: "mdalaminmollik96@gmail.com",
        email: "mr.mollik998877665544@gmail.com",
        CurrentItem: 6,
    }
    const LogInInfo = {
        // url: ""
        // name: "Mr. Mollik",
        password: "TawhidBhai",
        // email: "mdalaminmollik96@gmail.com",
        email: "mr.mollik998877665544@gmail.com",
        // CurrentItem: 6,
    }

    const PostData = () => {
        axios.post("/api/v1/jwt", body)
            // axios.post("http://localhost:8000/api/v1/jwt", body)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }
    const LoginCall = () => {
        axios.post("/api/v1/auth/login/", LogInInfo)
            // axios.post("http://localhost:8000/api/v1/jwt", body)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }


    return (
        <div>
            <Helmet><title>Hire Fusion | Home</title></Helmet>
            <Header></Header>
            <HomeTab></HomeTab>
            <div>
                <div>
                    <button onClick={getDataTawhidBhai} className="btn btn-secondary">get Tawhid Bhai</button>
                    <button onClick={PostData} className="btn btn-outline btn-error ml-4" >post Data</button>
                    <button onClick={LoginCall} className="btn btn-outline btn-neutral ml-4" >Login </button>
                    <button onClick={getDataMollik} className="btn btn-outline btn-success ml-4" >Get Mollik</button>
                </div>
                <CareerStatics></CareerStatics>
            </div>

        </div>
    );
};

export default Home;