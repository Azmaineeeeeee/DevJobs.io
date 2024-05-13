import { Link } from "react-router-dom";
import "../../src/Components/BannerHome.css";

const BannerHome = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex lg:flex-row flex-col  justify-center items-center gap-6 bg-banner bg-cover  p-6">
        <div className="space-y-2 lg:w-1/2 w-full p-4 text-slate-200">
          <h1 className="text-md font-bold">WE HAVE 1500+ LIVE JOBS</h1>
          <p className="lg:text-4xl text-2xl font-bold">
            Find your dream jobs <br />
            <span className="text-purple-900">with DEVJOBS.io</span>
          </p>
          <p className="text-sm  font-medium">
            Find jobs, create job listings and enrich your
            applications.Carefully crafted after analyzing the needs of tech
            industries. Whether you're a seasoned professional seeking new
            challenges or a recent graduate eager to kickstart your career, our
            platform offers a diverse range of job openings to suit every
            ambition.
          </p>
         
        </div>
        <div className="lg:w-1/3 w-full">
          <section className="p-6">
            <form
              noValidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-1 gap-6 p-6  shadow-sm bg-white rounded-2xl">
                <h1 className="text-2xl font-medium">
                  GROW YOUR CAREER WITH{" "}
                  <span className="text-purple-900 font-bold">DEVJOBS.io</span>
                </h1>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="text-sm font-semibold"
                    >
                      Find Jobs
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      placeholder="Find your desired jobs"
                      className="w-full mt-1 px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-300 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="text-sm font-semibold">
                      Hiring Manager
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Find the best candidate"
                      className="w-full mt-1 px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-300 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">
                      Add Job Listing
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="List vacant positions"
                      className="w-full mt-1 px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-300 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">
                      Best Salary Package
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Find high paying jobs"
                      className="w-full mt-1 px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-300 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">
                      Advanced Features
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder=" Advanced Job Search"
                      className="w-full mt-1 px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-300 focus:border-violet-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">
                      Tech Blogs
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Read Interesting Blogs"
                      className="w-full mt-1 px-4 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border border-gray-300 focus:border-violet-500"
                    />
                  </div>
                </div>
               <Link to = '/alljobs'>
               <button className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300">
                  Explore All Job Listings
                </button>
               </Link>
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
