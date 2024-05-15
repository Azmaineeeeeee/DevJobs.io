import BannerHome from "../../Components/BannerHome";
import JobTabs from "../../Components/JobTabs/JobTabs";
import CountUpCards from "../../Components/CountUpCard"
import BlogsPage from "../BlogsPage";
import TimeLine from "../../Components/TimeLine";
import image from "../../../public/b157fb9f9246b335ff09562abd2d478e.png"
import MotionPage from "../../Components/MotionPage";

// import { motion } from 'framer-motion';
// import { FaUserCheck, FaStar } from 'react-icons/fa';

// const FeedbackSection = () => {
    
//   };
  

const Home = () => {
    return (
        <div>
            <BannerHome></BannerHome>
            <div className="lg:mx-40 mx-10">
            <CountUpCards></CountUpCards>
            </div>
            <h1 className="mt-4 p-4 text-center font-bold text-3xl">Variety of Jobs</h1>
            <p className="text-center text-md font-normal mt-1">This platform aims to streamline the job hunting process by providing users <br /> with personalized job recommendations, advanced search filters, and seamless communication channels with potential employers.</p>
            <div className="text-center p-4 mt-2">
            <JobTabs></JobTabs>
            </div>
            
            <h1 className="text-center text-3xl font-bold mt-4 p-6">How Does DevJobs.io Work?</h1> 
          <p className="text-center text-sm">Post a job to tell us about your project. We'll quickly match you with the right job seekers.</p> 
            <div className="p-4 mt-2 flex lg:flex-row flex-col justify-between items-center">
            <div>
            <TimeLine></TimeLine>
            </div>
            <div>
                <img src={image}></img>
            </div>
            </div>

            <div className="text-center p-4 mt-2">
            <BlogsPage></BlogsPage>
            </div>
           
            <MotionPage></MotionPage>
            
            
           
            
           
        </div>
    );
};

export default Home;