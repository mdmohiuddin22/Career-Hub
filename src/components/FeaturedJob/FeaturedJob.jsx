import React from 'react';

const FeaturedJob = ({feature}) => {
 const {id,company_logo,job_title,company_name,remote_or_onsite,location,fulltime_or_parttime,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information,}=feature;
    return (
        <div className=''>
           <div className=' '>
           <img src={company_logo} alt="" />
            <h2>{job_title}</h2>
            <h1>{company_name}</h1>
            <div className='flex gap-5'><h3>{remote_or_onsite[0]}</h3>
            <h3>{remote_or_onsite[1]}</h3></div>
          <div className='flex gap-7'> <h3>{location}</h3>
          <h3>{salary}</h3>
          </div>
          <button>View details</button>
           </div>
        </div>
    );
};

export default FeaturedJob;