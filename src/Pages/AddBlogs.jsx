import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AddBlogs = () => {
   


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const job_title = form.job_title.value;
        const blog_description = form.blog_description.value;
        const blogInfo = {title,image,job_title,blog_description}
        fetch('http://localhost:5001/allblogs', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(blogInfo)
         })
         .then(res => res.json())
         .then(data => {
            if(data.insertedId){
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
    <div className="flex items-center justify-center h-screen">
      <div className="lg:w-1/2 w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Add a Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
         
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium ">Title of your Blog</label>
          <input type="text" id="title" name="title"  className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium ">Banner Image URL</label>
          <input type="text" id="image" name="image"  className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>

        <div className="mb-4">
          <label htmlFor="job_title" className="block text-sm font-medium ">Author's Job Title</label>
          <input type="text" id="job_title" name="job_title"  className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
         
            
          <div>
            <label htmlFor="blogDescription" className="block font-semibold">Blog Description</label>
            <textarea
              id="blogDescription"
              name = "blog_description"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">Add Your Blog</button>
        </form>
      </div>
    </div>
  )
};

export default AddBlogs;
