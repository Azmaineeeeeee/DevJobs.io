import logo from "../../public/png-clipart-job-description-employment-computer-icons-career-others-miscellaneous-purple-thumbnail_prev_ui.png";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const navLinks = (
    <>
      <li className=" text-slate-700">
        <NavLink to="/">Home</NavLink>
      </li>

      <div className="flex lg:flex-row gap-1 flex-col">
        <li className="text-slate-700">
          <NavLink to="/alljobs">All Jobs</NavLink>
        </li>
        <li className="text-slate-700">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
      </div>
    </>
  );

  return (
    <div className="">
      <div className="navbar shadow-sm  p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-white"
            >
              {navLinks}
            </ul>
          </div>

          <div className="flex items-center">
            <img src={logo} className="h-16 w-full"></img>

            <div>
              <h1 className="font-extrabold">
                <span className="text-purple-600 text-xl">DevJobs</span>
                <span className="text-purple-700 text-md">.io</span>
              </h1>
            </div>
          </div>
          <div className="navbar-start lg:ml-10 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 z-10">{navLinks}</ul>
        </div>
        </div>
        

        <div className="navbar-end">
          {/* (
            <div className="btn btn-ghost btn-circle avatar mr-2" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName || 'Update User Name'}>
              <div className="w-12 rounded-full object-cover">
                {user.photoURL ? <img alt="Profile" src={user.photoURL} /> : <img alt="Profile" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />}
              </div>
            </div>
          ) */}
          <Tooltip id="my-tooltip" effect="solid" place="bottom" />
          <p className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple-800  hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>

            <button>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
