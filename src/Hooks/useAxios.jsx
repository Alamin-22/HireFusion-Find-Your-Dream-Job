import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: "https://jobboard-cookie-test.vercel.app/api/v1",
    withCredentials: true
})
const useAxios = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log("error dhora khaise in the interceptor", error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log("Logout the user")
                logOut()
                    .then(() => {
                        navigate("/login")
                    })
                    .catch()
            }
        })
    }, [logOut, navigate])
    return axiosSecure;
};

export default useAxios;