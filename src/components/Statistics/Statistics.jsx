import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Statistics = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>
            <FeaturedJobs></FeaturedJobs>
            
        </div>
    );
};

export default Statistics;