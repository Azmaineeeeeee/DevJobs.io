import { FaRegBuilding, FaPhoneAlt, FaUser, FaRegEnvelope } from 'react-icons/fa';
import logo from "../../public/png-clipart-job-description-employment-computer-icons-career-others-miscellaneous-purple-thumbnail_prev_ui.png";

const Footer = () => {
  return (
    <footer className="footer p-6 mt-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <img src={logo} className="w-12 h-12 rounded-full" alt="DevJobs.io Logo" />
        <h1 className="text-lg font-bold text-purple-600">DevJobs.io</h1>
      </div>
      <div className="flex flex-wrap justify-center md:justify-around gap-12">
        <nav className="mb-6 flex flex-col gap-2">
          <h6 className="footer-title text-lg font-semibold mb-3 text-purple-600">Services</h6> 
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Branding</a>
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Design</a>
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Marketing</a>
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Advertisement</a>
        </nav> 
        <nav className="mb-6 flex flex-col gap-2">
          <h6 className="footer-title text-lg font-semibold mb-3 text-purple-600">Company</h6> 
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">About us</a>
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Contact</a>
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Jobs</a>
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Press kit</a>
        </nav> 
        <nav className="mb-6 flex flex-col gap-2">
          <h6 className="footer-title text-lg font-semibold mb-3 text-purple-600">Legal</h6> 
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Terms of use</a>
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Privacy policy</a>
          <a href="#" className="link link-hover  mt-2 hover:text-purple-600">Cookie policy</a>
        </nav>
      </div>
      <div className="flex flex-wrap justify-center md:justify-around gap-8">
        <div className="flex flex-col items-center">
          <FaRegBuilding className="text-3xl text-purple-600" />
          <p className=" mt-2">123 Bangladesh, Dhaka</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhoneAlt className="text-3xl text-purple-600" />
          <p className=" mt-2">+1234567890</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUser className="text-3xl text-purple-600" />
          <p className=" mt-2">DevJobs.io</p>
        </div>
        <div className="flex flex-col items-center">
          <FaRegEnvelope className="text-3xl text-purple-600" />
          <p className=" mt-2">devjobs@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

