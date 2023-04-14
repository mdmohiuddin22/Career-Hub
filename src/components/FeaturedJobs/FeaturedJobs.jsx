import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
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
          <div className="dropdown ml-20">
  <label tabIndex={0} className="btn m-1 "><h1 >Filter By</h1></label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Onsite</a></li>
    <li><a>Remote</a></li>
  </ul>
</div>
      <div className='grid grid-cols-2 gap-10 items-center ml-36 mt-10 mb-10 justify-center'>
      {
          features.map(feature => <FeaturedJob
          key={feature.id}
          feature={feature}
          ></FeaturedJob>
          )
        }

<Link to="/seealljobs"><button className="btn btn-active btn-secondary ml-72">See All Jobs</button> </Link>
      </div>
        </div>
    );
};

export default FeaturedJobs;