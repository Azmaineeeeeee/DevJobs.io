import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import PrivateNavbar from "../Components/PrivateNavbar";
import { useContext } from "react";
import { Context } from "../Providers/AuthProviders";


const MainLayout = () => {
    const {user} = useContext(Context)
    return (
        <div>
            <Navbar></Navbar>
            {
                user && <PrivateNavbar></PrivateNavbar>
            }
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;