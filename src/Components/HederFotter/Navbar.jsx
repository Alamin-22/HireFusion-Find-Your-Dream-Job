import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LogoJob.png"
import { AiOutlineMenu } from 'react-icons/ai';
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";



const Navbar = () => {
    const { user, logOut } = useAuth();

    const axios = useAxios();

    const NavbarLinks = <>
        <NavLink to={"/"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "  py-3 px-3 text-lg text-[#4480a8] " : "py-3 px-3 hover:text-[#4480a8] text-lg hover:bg-gray-200 rounded-lg"
        } ><li>Home</li></NavLink>
        <NavLink to={"/all_jobs"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " py-3  px-3 text-lg text-[#4480a8]  " : " py-3 px-3 hover:text-[#4480a8]   text-lg hover:bg-gray-200 rounded-lg "
        } ><li>All Jobs</li></NavLink>

        {
            user && <>
                <NavLink to={"/applied_jobs"} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " py-3 px-3 text-lg text-[#4480a8]  " : " py-3  px-3 hover:text-[#4480a8]  text-lg hover:bg-gray-200 rounded-lg "
                } ><li> Applied Jobs</li></NavLink>
                <NavLink to={"/add_job"} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " py-3 px-3  text-lg text-[#4480a8]  " : " py-3 px-3 hover:text-[#4480a8]  text-lg hover:bg-gray-200 rounded-lg "
                } ><li>Post Job</li></NavLink>
                <NavLink to={"/my_jobs"} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " py-3 px-3 text-lg text-[#4480a8]  " : " py-3 px-3  hover:text-[#4480a8] text-lg hover:bg-gray-200  rounded-lg "
                } ><li>My Jobs</li></NavLink>
            </>
        }
        <NavLink to={"/blogs"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " py-3 px-3 text-lg text-[#4480a8]  " : " py-3 px-3 hover:text-[#4480a8]  text-lg hover:bg-gray-200 rounded-lg  "
        } ><li>Blogs</li></NavLink>

    </>



    const handleLogout = () => {
        logOut()
            .then(() => {
                axios.post("/logout", {}, {})
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch()
    }

    return (
        <div>
            <header className="p-4 bg-gray-300 ">
                <div className="container flex justify-between h-16 mx-auto">
                    {/* logo */}
                    <img src={logo} alt="HireFusion" />
                    {/* links */}
                    <ul className="items-stretch hidden  mt-2 lg:flex">
                        {NavbarLinks}
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {/* <button className="self-center px-8 py-3 rounded">Sign in</button> */}
                        {user ? (
                            <div className="dropdown dropdown-end ">
                                <label tabIndex={0} className="cursor-pointer">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </label>
                                <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <p className="px-4 py-2 hover:bg-base-300 rounded-lg"> {user.displayName}</p>
                                    <NavLink to="/user" className="px-4 py-2 hover:bg-base-300 rounded-lg">
                                        Profile
                                    </NavLink>

                                    <div onClick={handleLogout}
                                        className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-300 rounded-lg">
                                        Logout
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? 'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'
                                }
                            >
                                Login
                            </NavLink>
                        )}
                    </div>
                    <button className="p-4 lg:hidden">
                        <div className="drawer drawer-end z-10">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4"  ><AiOutlineMenu className="text-2xl cursor-pointer" /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                                    {NavbarLinks}
                                    <li>
                                        {user ? (
                                            <div className="dropdown dropdown-left mx-auto ">
                                                <label tabIndex={0} className="cursor-pointer">
                                                    <div className="avatar">
                                                        <div className="w-10 rounded-full">
                                                            <img src={user.photoURL} />
                                                        </div>
                                                    </div>
                                                </label>
                                                <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52" >
                                                    <p className="px-4 py-2 hover:bg-base-300 rounded-lg"> {user.displayName}</p>
                                                    <NavLink to="/user" className="px-4 py-2 hover:bg-base-300 rounded-lg">
                                                        Profile
                                                    </NavLink>


                                                    <div onClick={handleLogout} className="cursor-pointer text-red-500 px-4 py-2 hover:bg-base-30 rounded-lg" >
                                                        Logout
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <NavLink to="/login" className={({ isActive }) => isActive ?
                                                'btn btn-primary btn-sm' : 'btn btn-ghost btn-sm'}  >
                                                Login
                                            </NavLink>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
