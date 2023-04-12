import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JTL/JTL';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import AppliedJobs from '../JobCategoryList/JobCategoryList';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <Outlet></Outlet>
            <FeaturedJobs></FeaturedJobs>
            
    

        </div>
    );
};

export default Home;