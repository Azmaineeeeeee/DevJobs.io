import BannerHome from "../../Components/BannerHome";
import JobTabs from "../../Components/JobTabs/JobTabs";
import CountUpCards from "../../Components/CountUpCard"


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
        </div>
    );
};

export default Home;