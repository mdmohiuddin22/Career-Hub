import React from 'react';

const ViewDetailsShow = ({viewdetail}) => {
    console.log(viewdetail);
    const {id,job_description
    }=viewdetail;

    return (
        <div>
           <h1>{id}</h1>
           <p> Job Description:  {job_description}</p>
        </div>
    );
};

export default ViewDetailsShow;