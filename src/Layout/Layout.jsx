import { Outlet } from "react-router-dom";
import Navbar from "../Components/HederFotter/Navbar";
import Footer from "../Components/HederFotter/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;