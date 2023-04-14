import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import JobCategoryList2 from '../../JobCategoryList2/JobCategoryList2';


const JobCategoryList1 = () => {
const [jobcategorys, setJobcategorys]=useState([]);
useEffect(()=> {
  fetch('jobCategoryList.json')
  .then(res => res.json())
  .then(data =>setJobcategorys(data))
},[]);
    return (
        <div>
          <h1 className='text-center text-[#1A1919] text-4xl font-bold'>Job Category List</h1>
          <h4 className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</h4>
      <div className='flex justify-between ml-10 mr-10 mb-10'>
        {
           jobcategorys.map(jobcategory => <JobCategoryList2
           key={jobcategory.id}
           jobcategory={jobcategory}
           ></JobCategoryList2>

           ) 
        }
      {/* {
          features.map(feature => <FeaturedJob
          key={feature.id}
          feature={feature}
          ></FeaturedJob>
          )
        } */}
      </div>
        </div>
    );
};

export default JobCategoryList1;