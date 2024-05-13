import { useContext, useState } from "react";
import { Context } from "../Providers/AuthProviders";
import Swal from 'sweetalert2'
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const UpdateJob = () => {

    const updateSingleJob = useLoaderData()
    const [deadlineValue, setDeadlineValue] = useState(null);
    const {user} = useContext(Context)
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
       const image = form.image.value;
        const job_title = form.job_title.value;
        const posted_by = form.posted_by.value;
        const job_type = form.job_type.value;
        const salary_range = form.salary_range.value;
        const posting_date =  form.posting_date.value;
      
        const deadline = deadlineValue ? deadlineValue.toISOString() : null;
        const detailed_description = form.detailed_description.value;
        const name = user.displayName;
        const email = user.email;
        const updatedInfo = {
            image,job_title,posted_by,job_type,salary_range,posting_date,name,email,detailed_description,deadline
        }
     
     console.log(updatedInfo);
     fetch(`http://localhost:5001/updatejobs/${updateSingleJob._id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updatedInfo)
     })
   

     .then(res => res.json())
     .then(data => {
        if(data.modifiedCount>0){
            Swal.fire({
                title: 'Successfully Added',
                text: 'Do you want to continue?',
                icon: 'success',
                confirmButtonText: 'Confirm'
              })
        }
     })

    form.reset()
    }
    return (
        <div>
            <div>
            <h1 className="text-center text-2xl text-purple-700 font-bold mt-4">Update Single Job Information</h1>
            <h1 className="text-center text-sm   mt-2">Edit and update your added job information for the potential job seekers.</h1>
            <div className="max-w-2xl mx-auto p-6  rounded-md shadow-xl">
      
      <form onSubmit={handleSubmit} className="bg-slate-100 p-6 rounded-xl">
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium ">Image URL</label>
          <input type="text" id="image" name="image" defaultValue={updateSingleJob.image} className="mt-1 p-2 border border-gray-300 rounded-md w-full"  />
        </div>
        <div className="mb-4">
          <label htmlFor="job_title" className="block text-sm font-medium ">Job Title</label>
          <input type="text" id="job_title" name="job_title" defaultValue={updateSingleJob.job_title}  className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>

        <div className="mb-4">
          <label htmlFor="posted_by" className="block text-sm font-medium ">Company Name</label>
          <input type="text" id="posted_by" name="posted_by" defaultValue={updateSingleJob.posted_by} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="job_type" className="block text-sm font-medium ">Job Type</label>
          <select id="job_type" defaultValue={updateSingleJob.job_type} name="job_type"  className="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="" disabled selected>Select Job Type</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part-time">Part-time</option>
            
          </select>
        </div>
        
       <div className="mb-4">
          <label htmlFor="salary_range" className="block text-sm font-medium ">Salary Range</label>
          <input type="text" defaultValue={updateSingleJob.salary_range} id="salary_range" name="salary_range"  className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="posting_date" className="block text-sm font-medium ">Job Posted On</label>
          <input type="text" id="posting_date" name="posting_date" defaultValue={updateSingleJob.posting_date} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        
       <div className="mb-4">
        <label htmlFor="deadline" defaultValue={updateSingleJob.deadline} name='deadline' className="block text-sm border-gray-300 shadow-2xl font-medium">
          Deadline
        </label>
       
        <DatePicker
  selected={deadlineValue}
  onChange={(date) => setDeadlineValue(date)}
  dateFormat="P"
  showTimeSelect={false}
/>
      </div>
        <div className="mb-4">
          <label htmlFor="user_email" className="block text-sm font-medium ">User Email</label>
          <input type="email" placeholder={user.email} id="user_email" name="user_email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-sm font-medium ">User Name</label>
          <input type="text" placeholder={user.displayName} id="user_name" name="user_name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="detailed_description" className="block text-sm font-medium ">Detailed Description</label>
          <textarea id="short_description" name="detailed_description" defaultValue={updateSingleJob.detailed_description}   className="mt-1 p-2 border border-gray-300 rounded-md w-full h-20"></textarea>
        </div>
        <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary bg-green-600 border-none shadow-xl text-lg text-white">
                Update Job Information
              </button>
            </div>
      </form>
    </div>
        </div>
        </div>
    );
};

export default UpdateJob;