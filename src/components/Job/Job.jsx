import React from 'react';

const Job = ({job}) => {
    console.log(job);
    const {id,category_logo,category_name,jobs_available}=job;
    return (
        <div className='m-10'>
            <img src={category_logo} alt="" />
            <p>{category_name}</p>
            <p>{jobs_available}</p>

        </div>
    );
};

export default Job;