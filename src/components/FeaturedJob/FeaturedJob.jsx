import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJob = ({feature}) => {
 const {id,company_logo,job_title,company_name,remote_or_onsite,location,fulltime_or_parttime,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information,}=feature;
    return (
        <div className=''>
           <div className=' '>
           <img src={company_logo} alt="" />
            <h2 className='text-lg font-bold'>{job_title}</h2>
            <h1 className='text-lg'>{company_name}</h1>
            <div className='flex gap-5'><h3 className='w-8 h-10'>{remote_or_onsite[0]}</h3>
            <h3>{remote_or_onsite[1]}</h3></div>
          <div className='flex gap-7'>  <img src="/src/assets/Icons/Location Icon.png" alt="" /><h3>{location}</h3>
          <img src="/src/assets/Icons/Frame.png " alt="" /> <h3> Salary: {salary}</h3>
          </div>
          <Link to="/viewdetails"><button className="btn btn-success btn-secondary mt-6">View details</button> </Link>
           </div>
        </div>
    );
};

export default FeaturedJob;