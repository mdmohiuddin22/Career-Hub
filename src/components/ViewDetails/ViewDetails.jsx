import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ViewDetailsShow from '../ViewDetailsShow/ViewDetailsShow';

const ViewDetails = () => {
    const viewdetails = useLoaderData();
    console.log(viewdetails);
    return (
        <div>
            <h3>All Jobs Data:{viewdetails.length}</h3>
            <div>
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