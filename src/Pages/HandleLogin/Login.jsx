import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useAxios from "../../Hooks/useAxios";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { Login } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();

    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password")

        // login
        console.log(email, password)
        Login(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email }
                Swal.fire('Success!', 'Login Successful', 'success')

                // send data via server

                axios.post("/jwt", user)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location.state : '/');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })


            })
            .catch(error => {
                console.log(error);
                Swal.fire('Login Failed!', 'Please make sure your  Email and Password is correct', 'error')
            })
    }


    return (
        <div>
            <Helmet><title>Hire Fusion | Login</title></Helmet>
            <div className="flex flex-wrap w-full">
                <div className="flex flex-col w-full lg:w-1/2 mt-6 mb-9">
                    <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                        <form onSubmit={handleLogin} className="card-body bg-emerald-50 shadow-2xl rounded-xl ">
                            <h1 className="text-3xl font-semibold">Login Now!!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className=" form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div >
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password" placeholder="password" className="input input-bordered w-full" required />
                                    <span className="absolute right-5 bottom-2  cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} >
                                        {
                                            showPassword ? <AiFillEye className="text-2xl " /> : <AiFillEyeInvisible className="text-2xl " />
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="my-4 text-center">
                            <p>
                                Don&#x27;t have an account?
                                <Link to={"/register"} className="font-semibold underline text-blue-800">
                                    Register here.
                                </Link>
                            </p>
                        </div>
                        <div className=" divider">Singup with Social Accounts</div>
                        <SocialLogin></SocialLogin>
                        </form>
                        
                    </div>

                </div>
                <div className="w-1/2 shadow-2xl mt-6 mb-9 ">
                    <img className="hidden object-cover w-full h-screen lg:block" src="https://i.ibb.co/ynvfh8v/job-board-software.png" />
                </div>
            </div>
        </div>
    );
};

export default Login;