import { useContext, useEffect, useState } from "react";
import logo from "../../public/png-clipart-job-description-employment-computer-icons-career-others-miscellaneous-purple-thumbnail_prev_ui.png";
import { NavLink } from "react-router-dom";
import LoginModal from "../Components/LoginModal";
import { Context } from "../Providers/AuthProviders";



const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user,logOut} = useContext(Context)
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] =  useState(localStorage.getItem("theme") || "light");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    
  };
 

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  

  const themeChange = (e) => {
    const newTheme = e.target.checked ? "business" : "light";
    setTheme(newTheme);
    
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navLinks = (
    <>
      

      <div className="flex lg:flex-row gap-1 flex-col">
      <li className="font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
        <li className="font-medium">
          <NavLink to="/alljobs">All Jobs</NavLink>
        </li>
        <li className="font-medium">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
        <div>
          <h1 className="font-medium">Change Mode</h1>
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={themeChange}
                type="checkbox"
               className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
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

       
         
          
          <p className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple-800  hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>

           {
            user ?  <button onClick={logOut}>Logout</button> :  <button onClick={toggleModal}>Login</button>
           }
          </p>
        </div>
        {isModalOpen && <LoginModal closeModal={toggleModal} />}
      </div>
    </div>
  );
};

export default Navbar;
