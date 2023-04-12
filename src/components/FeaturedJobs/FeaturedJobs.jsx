import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
const [features, setFeatures]=useState([]);
useEffect(()=> {
  fetch('featuredJobs.json')
  .then(res => res.json())
  .then(data =>setFeatures(data))
},[]);
    return (
        <div>
          <h1 className='text-5xl font-bold text-center'>Featured Jobs</h1>
          <h3 className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</h3>
      <div className='grid grid-cols-2 gap-10 items-center ml-36 mt-10 mb-10 justify-center'>
      {
          features.map(feature => <FeaturedJob
          key={feature.id}
          feature={feature}
          ></FeaturedJob>
          )
        }
      </div>
        </div>
    );
};

export default FeaturedJobs;