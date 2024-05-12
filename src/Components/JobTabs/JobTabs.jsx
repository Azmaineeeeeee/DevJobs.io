
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import HomePageJobCard from '../HomePageJobCard';

const JobTabs = () => {
  const [jobs,setJobs] = useState([])
  useEffect(() => {
     fetch('http://localhost:5001/allJobs')
     .then(res => res.json())
     .then(data => {
        setJobs(data)
        
     })
  },[])
  return (
    <div className="">
     <Tabs>
       <div className='rounded-xl p-4 flex justify-center'>
       <TabList className="grid lg:grid-cols-4 grid-cols-2  bg-white shadow-2xl rounded-full lg:p-6 p-2">
       <Tab className={`px-4 py-2 text-gray-800 font-medium cursor-pointer focus:outline-none border-transparent focus:rounded-xl  focus:bg-purple-800 focus:text-white`} selected>
    On-Site Jobs
</Tab>
          <Tab className="px-4 py-2 text-gray-800 font-medium cursor-pointer focus:outline-none focus:rounded-xl  focus:bg-purple-800 focus:text-white border-transparent">
            Remote Jobs
          </Tab>
          <Tab className="px-4 py-2 text-gray-800 font-medium cursor-pointer focus:outline-none focus:rounded-xl  focus:bg-purple-800 focus:text-white border-transparent">
            Hybrid Jobs
          </Tab>
          <Tab className="px-4 py-2 text-gray-800 font-medium cursor-pointer focus:outline-none focus:rounded-xl  focus:bg-purple-800 focus:text-white border-transparent">
            Part-Time Jobs
          </Tab>
        </TabList>
       </div>

        <TabPanel>
          <h2 className=' grid lg:grid-cols-3 gap-8 lg:mx-28'>
          {
  jobs
    .filter(job => job.job_type === 'Onsite')
    .map(job => (
         <HomePageJobCard key={job._id} job={job}></HomePageJobCard>
      
    ))
}
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className=' grid lg:grid-cols-3 gap-8 lg:mx-28'>
          {
  jobs
    .filter(job => job.job_type === 'Remote')
    .map(job => (
         <HomePageJobCard key={job._id} job={job}></HomePageJobCard>
      
    ))
}
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className=' grid lg:grid-cols-3 gap-8 lg:mx-28'>
          {
  jobs
    .filter(job => job.job_type === 'Hybrid')
    .map(job => (
         <HomePageJobCard key={job._id} job={job}></HomePageJobCard>
      
    ))
}
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className=' grid lg:grid-cols-3 gap-8 lg:mx-28'>
          {
  jobs
    .filter(job => job.job_type === 'Part-time')
    .map(job => (
         <HomePageJobCard key={job._id} job={job}></HomePageJobCard>
      
    ))
}
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobTabs;



