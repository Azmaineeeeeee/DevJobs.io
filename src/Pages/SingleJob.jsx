

import ApplyModal from "../Components/ApplyModal"
import PropTypes from 'prop-types';
import {  useLoaderData } from 'react-router-dom'; 
import { FaCalendarAlt, FaDollarSign, FaRegPaperPlane } from 'react-icons/fa'; 
import { useContext, useState } from 'react';
import { Context } from '../Providers/AuthProviders';

const SingleJob = () => {
    const {user} = useContext(Context)
  const singleJob = useLoaderData(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    image,
    job_title,
    posted_by,
    job_type,
    salary_range,
    posting_date,
    deadline,
    detailed_description
  } = singleJob; 

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="py-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-md">
          <div className="relative">
            <img src={image} alt={job_title} className="w-full rounded-t-md img-fluid mb-7" style={{ maxHeight: '350px' }} />
            </div>
          <div className="p-6">
            <h5 className="mb-1 font-bold text-lg">{job_title}</h5>
            <ul className="flex gap-4">
              <li>
                <i className="mdi mdi-account"></i> {posted_by}
              </li>
              <li className="text-yellow-500">
                <span className="px-2 py-1 text-white bg-yellow-500 rounded text-13 font-bold">4.8</span> <i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star-half-full"></i>
              </li>
            </ul>
            <div className="p-4  rounded">
              <p className="mb-1  dark:text-gray-300  font-bold">Detailed Description</p>
              <p className="font-normal">{detailed_description}</p>
            </div>
          </div>
        </div>
        <div className=" rounded-md  p-6 flex flex-col gap-4 lg:w-1/2">
         <div className='space-y-4 border-purple-200 border lg:p-10 p-6'>
          <h1 className='text-lg font-bold'>Job Overview</h1>
         <div className="flex items-center">
            <FaDollarSign className="text-2xl text-purple-500   gap-4    rounded-full mr-2 " />
            <div className="flex flex-col">
              <span className="font-bold">Salary Range</span>
              <span>{salary_range}</span>
            </div>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-2xl text-purple-500   gap-4   rounded-full mr-2" />
            <div className="flex flex-col">
              <span className="font-bold">Posting Date</span>
              <span>{posting_date}</span>
            </div>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-2xl text-purple-500   gap-4   rounded-full mr-2" />
            <div className="flex flex-col">
              <span className="font-bold ">Deadline</span>
              <span>{deadline.split('T')[0]}</span>
            </div>
          </div>
          <div className="flex items-center">
            <FaRegPaperPlane className="text-2xl text-purple-500   gap-4   rounded-full mr-2" />
            <div className="flex flex-col">
              <span className="font-bold">Job Type</span>
              <span>{job_type}</span>
            </div>
          </div>
          <button onClick={toggleModal} className="bg-purple-800 text-white px-4 py-2 rounded flex items-center justify-center gap-2">
            <FaRegPaperPlane className="text-lg" />
            Apply Now
          </button>
         </div>
          <div className="mt-8">
            <h1 className='text-center font-bold text-xl mb-4 text-purple-600'>Potential Candidate</h1>
          <div className="border rounded-md border-gray-100 dark:border-neutral-600 flex p-6">
            <img src={user.photoURL}  className="w-16 h-16 rounded-full" />
            <div className="ml-4 flex flex-col justify-center">
              <h5 className="font-bold">{user.displayName}</h5>
              <p className="">{user.email}</p>
            </div>
          </div>
        </div>
        <div>

        </div>
        </div>
        
      </div>
      {isModalOpen && <ApplyModal closeModal={toggleModal} />}
    </div>
  </section>
  );
};

SingleJob.propTypes = {
  spot: PropTypes.shape({
    image: PropTypes.string.isRequired,
    _id: PropTypes.number.isRequired,
    job_title: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posted_by: PropTypes.string.isRequired,
    job_type: PropTypes.string.isRequired,
    salary_range: PropTypes.number.isRequired,
    posting_date: PropTypes.number.isRequired,
  }),
};

export default SingleJob;
