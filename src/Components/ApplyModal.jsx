import { useContext, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import { Context } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ApplyModal = ({ closeModal }) => {
  const { user } = useContext(Context);
  const start = Date.now();
  const [selectedJob, setSelectedJob] = useState(null);
  const { data, isPending } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5001/alljobs");
      return res.json();
    },
  });
  const handleJobSelection = (jobId) => {
    const job = data.find(job => job.id === jobId);
    setSelectedJob(job);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedJob) {
      toast.error("Please select a job before applying");
      return;
    }
    const form = e.currentTarget; 
    const formData = new FormData(form);
    const email = user.email;
    const name = user.displayName;
    const resume = formData.get("resume");
    const job_title = selectedJob.job_title;
    const posted_by = selectedJob.posted_by;
    const job_type = selectedJob.job_type;
    const appliedInfo = { email, name, resume,job_title,posted_by,job_type };
    console.log(appliedInfo);

    if (isPending) return <progress className="progress w-56"></progress>;
    if (data.some((job) => job.email === email)) {
      toast.error("Hiring Managers Cannot Apply");
      return;
    }
 if(start > data.deadline){
  toast.error("Not taking applications anymore");
      return;
 }


    fetch("http://localhost:5001/allapplicants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appliedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Applied",
            text: "Do you want to continue?",
            icon: "success",
            confirmButtonText: "Confirm",
          });
          closeModal();
        }
      });

    form.reset();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">
          APPLY FOR THE ROLE
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              value={user.displayName}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
              readOnly
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              value={user.email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
              readOnly
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="resume"
              className="block text-sm font-semibold mb-1"
            >
              Your Resume Link
            </label>
            <input
              name="resume"
              id="resume"
              type="text"
              placeholder="Resume Link"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500"
            />
          </div>

          <button onClick={() => handleJobSelection(data.id)}
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
          >
            Complete Applying
          </button>
        </form>
        <div className="flex  items-center justify-center mt-6"></div>
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

export default ApplyModal;
