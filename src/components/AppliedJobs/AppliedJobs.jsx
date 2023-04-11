import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';



const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs)
    return (
        <div>
          {/* <h3>All Jobs Data:{jobs.length}</h3> */}
          <h1 className='text-center text-[#1A1919] text-4xl font-bold'>Job Category List</h1>
           <h4 className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</h4>
        <div className='flex justify-between ml-10 mr-10'>
            {
jobs.map(job=> <Job
key={job.id}
job={job}
></Job>)
            }
        </div>
          
        </div>
    );
};

export default AppliedJobs;