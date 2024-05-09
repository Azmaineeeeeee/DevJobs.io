import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import PrivateNavbar from "../Components/PrivateNavbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <PrivateNavbar></PrivateNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;