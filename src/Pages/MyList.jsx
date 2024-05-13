import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { Context } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(Context);
  const [myListData, setMyListData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/mylist/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyListData(data);
        console.log(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your added spot has been deleted.",
            icon: "success",
          });

          const remainingJobs = myListData.filter((job) => job._id !== id);
          setMyListData(remainingJobs);

          // Send delete request to the server
          fetch(`http://localhost:5001/jobs/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "You want to undo delete? :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col gap-6 items-center mt-4">
        <h1 className="text-center text-3xl font-medium text-purple-700">
          See all of your added Job Listings
        </h1>
        <div className="bg-white shadow-2xl">
          <div className="max-w-md p-4 sm:flex sm:space-x-6">
            <div className="flex-shrink-0 w-full  h-36 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src={user.photoURL}
                alt=""
                className="object-cover object-center w-28 h-28 rounded"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl text-slate-800 font-semibold">
                  {user.displayName}
                </h2>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Email address"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                    ></path>
                  </svg>
                  <span className="text-slate-600">{user.email}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mt-4 p-6">
        <table className="table table-xl border-b-2 border-t-2 border-cyan-800 ">
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Average Salary</th>
              <th>Posted On</th>
              <th>Deadline</th>
              <th>Update Job</th>
              <th>Delete Job</th>
            </tr>
          </thead>
          <tbody>
            {myListData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.job_title}</td>
                <td>{data.posted_by}</td>
                <td>{data.salary_range}</td>
                <td>{data.posting_date}</td>
                <td>{data.deadline}</td>
                
                <td>
                  <Link to={`/updatejobs/${data._id}`}>
                    <button className="btn btn-outline btn-success py-0">
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(data._id)}
                    className="btn btn-outline btn-error py-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;