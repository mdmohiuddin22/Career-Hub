import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import AppliedJobs from '../AppliedJobs/AppliedJobs';

const Statistics = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FeaturedJobs></FeaturedJobs>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Statistics;