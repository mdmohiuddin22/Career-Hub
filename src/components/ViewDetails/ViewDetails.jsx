import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ViewDetailsShow from '../ViewDetailsShow/ViewDetailsShow';

const ViewDetails = () => {
    const viewdetails = useLoaderData();
    console.log(viewdetails.id);
    return (
        <div>
            <h3 className='text-4xl font-bold text-center mt-10'>Job Details</h3> <h3 className='text-end mr-10'>Job Details</h3>
            <div className='m-10'>
            {
                viewdetails.map(viewdetail=> <ViewDetailsShow
                key={viewdetail.id}
                viewdetail={viewdetail
                }
                ></ViewDetailsShow>
                    )
             }
            </div>
        </div>
    );
};

export default ViewDetails;