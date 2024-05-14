import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Context } from "../Providers/AuthProviders";

// const SingleBlog = () => {
//     const blog = useLoaderData()
//     const {title,job_title,blog_description,image} = blog;
//     const {user} = useContext(Context)
//     return (
//         <div className="container mx-auto p-8">
//         <img src={image} alt="Banner" className="w-full mb-8 rounded-lg" />
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center">
//             {user.photoURL && (
//               <img src={user.photoURL} className="w-12 h-12 rounded-full mr-4" alt="User" />
//             )}
//             <div className="flex flex-col">
//               <h2 className="text-xl font-bold">{user.displayName}</h2>
//               <p className="text-gray-600">{job_title}</p>
//             </div>
//           </div>
         
//         </div>
//         <h1 className="text-3xl font-bold">{title}</h1>
//         <p className="text-lg mb-8">{blog_description}</p>
//       </div>
//     );
// };

// export default SingleBlog;

const SingleBlog = () => {
    const blog = useLoaderData();
    const { title, job_title, blog_description, image } = blog;
    const { user } = useContext(Context);
  
    return (
      <div className="rounded-lg shadow-md px-8 py-12 mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="flex items-center w-full">
            {user.photoURL && (
              <img
                src={user.photoURL}
                className="w-12 h-12 rounded-full object-cover mr-4"
                alt="User"
              />
            )}
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">{user.displayName}</h2>
              <p className="">{job_title}</p>
            </div>
          </div>
          <img src={image} alt="Banner" className="w-full rounded-lg object-cover md:h-auto" />
        </div>
        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="text-lg leading-relaxed">{blog_description}</p>
      </div>
    );
  };
  
  export default SingleBlog;