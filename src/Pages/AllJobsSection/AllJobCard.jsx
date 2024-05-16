

import  { useEffect, useState } from "react";
import banner from "../../../public/pexels-alscre-2847648.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const AllJobCard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5001/allJobs",{withCredentials: 'include'})
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setData(result);
  //     // axios.get("http://localhost:5001/allJobs")
  //     // .then(res => {
  //     //   setData(res)
  //     // })
  //     });
  // }, []);
  useEffect(() => {
    axios.get("http://localhost:5001/allJobs", {
      withCredentials: true 
    })
    .then((res) => {
      setData(res.data);
    });
  }, []);

  const getColorForJobType = (jobType) => {
    switch (jobType) {
      case "Onsite":
        return "text-blue-500 font-medium text-lg";
      case "Remote":
        return "text-green-500 font-medium text-lg";
      case "Hybrid":
        return "text-yellow-500 font-medium text-lg";
      case "Part-time":
        return "text-purple-500 font-medium text-lg";
      default:
        return "bg-gray-500 text-white py-1 px-2 text-sm";
    }
  };

  const filteredJobs = data.filter((job) =>
    job.job_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-96">
          <h1 className="text-4xl font-extrabold text-violet-900 mb-4">
            VIEW ALL JOBS
          </h1>
          <p className="text-center text-white">Get all the details about available jobs and find through your desired position.</p>
          <fieldset className="w-3/4 sm:w-full max-w-md space-y-4 text-gray-100">
            <label htmlFor="Search" className="hidden">
              Search Jobs By Category
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 text-slate-500"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search Jobs By Job Title"
                className="py-3 pl-12 text-lg rounded-md w-full focus:outline-none bg-white text-gray-100 focus:bg-gray-900 focus:border-violet-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
      </div>
      <div className="overflow-x-auto mt-4 p-6">
        <table className="table table-xl border-b-2 border-t-2 border-cyan-800 ">
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Posted On</th>
              <th>Deadline</th>
              <th>Annual Salary</th>
              <th>Job Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="font-bold">{job.job_title}</td>
                <td>{job.posted_by}</td>
                <td>{job.posting_date}</td>
                <td>{job.deadline}</td>
                <td className="font-bold">{job.salary_range}</td>
                <td
                  className={`${getColorForJobType(
                    job.job_type
                  )} rounded-md text-center`}
                >
                  {job.job_type}
                </td>
                <td>
                <Link to={`/singlejob/${job._id}`}>
                    <button className="btn btn-outline btn-success py-0">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobCard;

