import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { useState } from "react";
import { SiGoogle } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import auth from "../FireBase/FireBase.config";

const LoginModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [successfulLogin, setSuccessfulLogin] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccessfulLogin(true);
        toast.success("Successfully Logged In");
        closeModal();
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((error) => {
        setSuccessfulLogin(false);
        toast.error("Failed to login. Please try again.");
      });
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
      console.log(res.user);
      toast.success("Successfully Logged In");
      closeModal();
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">
          LOGIN HERE AT, <br />{" "}
          <span className="font-bold text-purple-900">DEVJOBS.io</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>
          <h1 className="mb-4 text-sm font-medium">
            First Time to DevJobs.io?{" "}
            <Link onClick={closeModal} to="/register">
              <span className="font-bold text-purple-700">
                Register your account here.
              </span>
            </Link>
          </h1>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="flex  items-center justify-center mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center px-4 py-2 bg-green-700 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
          >
            <SiGoogle className="mr-2" />
            Login with Google
          </button>
        </div>
      </div>
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <Toaster />
    </div>
  );
};

export default LoginModal;
