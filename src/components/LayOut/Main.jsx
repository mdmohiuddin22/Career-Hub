import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
// import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobCategoryList1 from '../AppliedJobs/JobCategoryList1/JobCategoryList1';

const Main = () => {
    return (
        <div>
          <Banner/>
          <JobCategoryList1/>
           {/* <JobCategoryList/> */}
           <FeaturedJobs/>
        </div>
    );
};

export default Main;