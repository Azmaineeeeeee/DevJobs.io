import { useForm } from "react-hook-form";
import { Link} from "react-router-dom";
import { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import  { Context } from "../Providers/AuthProviders";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../FireBase/FireBase.config";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import banner from '../../public/reg.gif'

const Register = () => {
  const navigate = useNavigate()
 const { updateUser} = useContext(Context);
  const {
    register, 
    formState: { errors },
  } = useForm();
  const [passwordError, setPasswordError] = useState("");
 const [showPass,setShowPass] = useState(false)
  const formSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get("email")
    const name = form.get("name")
    const password = form.get("password")
    const photo = form.get("photo")

    if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      const errorText = (
        <ul className="list-disc text-red-500 text-xs mt-1">
          <p>Password must contain:</p>
          <div className="ml-3">
            <li>at least one lowercase letter</li>
            <li>at least one uppercase letter</li>
            <li>at least 6 characters</li>
          </div>
        </ul>
      );
      setPasswordError(errorText);
      toast.error("Error in password");
      return;
    }
    setPasswordError(""); 


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      navigate('/')
      updateUser(name,photo)
      .then(() => {
        toast.success("User Created Successfully")
       
      })
     
    })
    .catch((error) => {
    toast.error("Account exists with this email");
    });
  
        
};


  return (
    <div className="hero">
      <Helmet>
        <title>DevJobs-Registration</title>
        </Helmet>
        
      <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="hidden lg:block lg:w-1/2">
          <img src={banner} alt="Registration Page Image" className="w-full h-full object-cover" />
        </div>
        <div className="card shadow-2xl border-2">
          <form
            onSubmit={formSubmit}
            className="card-body lg:w-96 md:w-[360px] w-72"
          >
            <h1 className="text-center text-purple-700 font-bold text-2xl mb-2 " data-aos="flip-left" data-aos-delay="200" data-aos-anchor=".example-selector">
              Account Registration
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: "Please fill in the name field*",
                })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
              <div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                {...register("photo", {
                  required: "Please fill in the photo url field*",
                })}
                type="text"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
              <div>
                {errors.photo && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.photo.message}
                  </p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              <div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
              <input
                {...register("password", {
                  required: "Please fill in the password field*",
                })}
                type={showPass ? 'text' : 'password'}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span className="absolute text-xl border-2 p-1 border-purple-900 rounded-xl right-2 top-2 cursor-pointer" onClick={() => setShowPass(!showPass)}>{showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
              </div>
              <div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {passwordError && (
                <div className="error-message text-red-500 text-xs mt-1">
                  {passwordError}
                </div>
              )}
            </div>

            <div type="submit" className="form-control mt-6">
              <button className="btn btn-primary bg-purple-800 text-white border-none">
                Register
              </button>
            </div>
            <Toaster />
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;