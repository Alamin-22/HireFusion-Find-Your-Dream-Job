import axios from "axios";

const useAxiosPublic = () => {
    const axiosPublic = axios.create({
        baseURL: "https://meherun-server.vercel.app", //twhid Bhai
        // baseURL: "https://jobboard-cookie-test.vercel.app", // Mollik
        // baseURL: "http://localhost:8000",
        withCredentials: true
    })
    return axiosPublic;
};

export default useAxiosPublic;