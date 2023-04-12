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
      <div>
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