import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';



const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs)
    return (
        <div>
          {/* <h3>All Jobs Data:{jobs.length}</h3> */}
        <div>
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