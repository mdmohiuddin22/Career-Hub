import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';

const Statistics = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <Outlet></Outlet>
        </div>
    );
};

export default Statistics;