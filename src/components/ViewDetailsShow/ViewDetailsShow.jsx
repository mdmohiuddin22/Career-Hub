import React from 'react';

const ViewDetailsShow = ({viewdetail}) => {
    console.log(viewdetail);
    const {id,job_description
    }=viewdetail;

    return (
        <div className='flex space-between'>
          
           <div className='w-72'> <p> Job Description:  {job_description}</p></div>
           <div><h1 className='ml-96'> Job Details</h1></div>
        </div>
       
    );
};

export default ViewDetailsShow;