import image from "../../public/pexels-danielabsi-952670.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HomePageJobCard = ({ job }) => {
  const {
    posted_by,
    job_title,
    posting_date,
    deadline,
    salary_range,
    job_type,
  } = job;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200 transition duration-300 transform hover:scale-105 hover:border-purple-500  border-transparent">
      <div className="relative">
        <img src={image} alt="Job Image" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold z-10">
          {job_title}
        </h1>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <h1 className="font-semibold text-purple-700 text-xl">
            {salary_range}
          </h1>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-sm font-semibold text-gray-600 mr-2">
            Posted By:
          </h1>
          <h1 className="text-base font-medium text-gray-900">{posted_by}</h1>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-sm font-semibold text-gray-600 mr-2">
            Deadline:
          </h1>
          <h1 className="text-base font-medium text-gray-900">{deadline}</h1>
        </div>
        <div className="flex items-center mb-4">
          <h1 className="text-sm font-semibold text-gray-600 mr-2">
            Posted On:
          </h1>
          <h1 className="text-base font-medium text-gray-900">
            {posting_date}
          </h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-purple-950 font-medium rounded-xl bg-purple-300 px-4 py-1">
            {job_type}
          </h1>
          <div className="flex items-center gap-2 text-purple-600 font-semibold cursor-pointer">
            <h1>View Details</h1>
            <MdKeyboardDoubleArrowRight className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageJobCard;
