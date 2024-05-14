
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const AllBlogsPage = () => {
    const {data,isPending} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5001/allblogs')
            return res.json()
        }
    })
    if(isPending){
        return <progress className="progress w-56"></progress>
    }
    return (
        <div className="lg:p-8 lg:mx-28">
          <h1 className="text-center text-3xl font-bold">See all Blogs Here</h1> 
          <p className="text-center mt-2 text-sm">Get your daily quota of tech knowledge from our site. <br /> Read all the relevant tech blogs. Write if you like as well. Get in touch with the hiring managers and make a value for yourself.</p> 
        
          <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 p-4 mt-4 text-black mx-auto" id="blogs">
  {data?.map(singleData => (
    <div className="bg-white shadow-lg rounded-lg p-4" key={singleData._id}>
      <img src={singleData.image} className="h-60 w-full object-cover rounded-t-lg border-2 p-2 border-purple-200" alt={singleData.title} />
      <div className="p-4">
        <h1 className="text-lg text-left font-bold mb-2">{singleData.title}</h1>
        <p className="text-left mb-4">{singleData.blog_description.slice(0, 200)}</p>
        <div className="flex items-center gap-2">
          <Link to={`/singleblog/${singleData._id}`} className="text-purple-600 font-semibold hover:underline">
            Read More.....
          </Link>
          
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
    );
};

export default AllBlogsPage;