import React from 'react';
import { Outlet } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex items-center m-10'>
           <div ><h1 className='text-6xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h1>
           <p className='mt-10 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
           <br />
           <button className="btn btn-active btn-secondary ">Get Started</button>
           </div>
 <div><img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" /></div>
        </div>
    );
};

export default Banner;