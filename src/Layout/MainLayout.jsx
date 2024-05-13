import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import PrivateNavbar from "../Components/PrivateNavbar";
import { useContext } from "react";
import { Context } from "../Providers/AuthProviders";
import Footer from "../Components/Footer";


const MainLayout = () => {
    const {user} = useContext(Context)
    return (
        <div>
            <Navbar></Navbar>
            {
                user && <PrivateNavbar></PrivateNavbar>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;