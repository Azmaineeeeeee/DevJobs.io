import { FaBriefcase, FaUserTie, FaSearch } from 'react-icons/fa';
import CountUp from 'react-countup';

const CountUpCard = ({ title, count, icon }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-purple-800 rounded-lg shadow-md p-6 text-center text-white mt-6">
      <div className="flex items-center justify-center mb-2">
        {icon}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <CountUp end={count} duration={2.5} separator="," className="text-5xl font-bold" />
    </div>
  );
};

const CountUpCards = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:mx-36">
      <CountUpCard title="Total Jobs" count={1000} icon={<FaBriefcase className="text-5xl" />} />
      <CountUpCard title="Total Hiring Managers" count={50} icon={<FaUserTie className="text-5xl" />} />
      <CountUpCard title="Found Jobs" count={500} icon={<FaSearch className="text-5xl" />} />
    </div>
  );
};

export default CountUpCards;

