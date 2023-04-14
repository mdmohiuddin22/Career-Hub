import React from 'react';

const JobCategoryList2 = ({jobcategory}) => {
    const {id,category_logo,category_name,jobs_available}=jobcategory;
    return (
        <div>
            <img src={category_logo} alt="" />
            <h3>{category_name}</h3>
            <h3>{jobs_available}</h3>

            
        </div>
    );
};

export default JobCategoryList2;