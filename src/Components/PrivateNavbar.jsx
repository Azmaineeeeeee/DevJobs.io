import { NavLink } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../Providers/AuthProviders";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const PrivateNavbar = () => {
  const {user} = useContext(Context)
    const navLinks = (
        <div className="flex lg:gap-6 gap-4 text-sm lg:text-md">
          <ul className="font-bold text-purple-700">
            <NavLink to="/appliedjobs">Jobs Applied</NavLink>
          </ul>
    
         
            <ul className="font-bold text-purple-700">
              <NavLink to="/myjobs">Job Listing</NavLink>
            </ul>
            <ul className="font-bold text-purple-700">
              <NavLink to="/addjobs">Add Jobs</NavLink>
            </ul>
          
        </div>
      );
    
    return (
      <div className="navbar bg-blue-50">
      <div className="flex mx-auto">{navLinks}</div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end flex items-center lg:gap-4">
          <div>
            <BsBoxArrowRight className="text-xl" />
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={user?.displayName || "Update User Name"}
          >
            <div className="w-10 rounded-full">
            
              {user ? (
                <img src={user.photoURL} alt="User Avatar" />
              ) : (
                <img
                  alt="Default Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              )}
            </div>
            
            <Tooltip id="my-tooltip" effect="solid" place="bottom" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default PrivateNavbar;