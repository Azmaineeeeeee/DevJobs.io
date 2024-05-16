import { NavLink } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../Providers/AuthProviders";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const PrivateNavbar = () => {
  const { user } = useContext(Context);
  const navLinks = (
    <div className="flex lg:gap-6 gap-4 text-sm lg:text-md">
      <ul className="font-medium">
        <NavLink to="/appliedjobs">Jobs Applied</NavLink>
      </ul>

      <ul className="font-medium">
        <NavLink to="/myjobs">My Jobs</NavLink>
      </ul>
      <ul className="font-medium">
        <NavLink to="/addjobs">Add Jobs</NavLink>
      </ul>
    </div>
  );

  return (
    <div className="navbar shadow-sm">
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
                <img src={user.photoURL} alt="User" />
              ) : (
                <img
                  alt="Default Avatar"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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
