import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import animation from "../assets/gif/Animation - 1699464524542.json";
import Lottie from 'lottie-react';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location.pathname)




    if (loading) {
        return (
            <div>
                {/* <div className="w-full max-w-7xl h-screen mx-auto animate-pulse p-9">
                    <h1 className="h-2 bg-gray-300 rounded-lg w-52 "></h1>

                    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg "></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg "></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg "></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg "></p>
                    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg "></p>
                    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg "></p>

                </div> */}
                <div className='h-[60vh] flex items-center'>
                    <Lottie animationData={animation} className='w-96 mx-auto '></Lottie>
                </div>

            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;