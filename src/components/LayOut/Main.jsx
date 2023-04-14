import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Main = () => {
    return (
        <div>
          <Banner/>
           <JobCategoryList/>
           <FeaturedJobs/>
        </div>
    );
};

export default Main;