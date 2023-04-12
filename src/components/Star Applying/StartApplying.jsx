import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StartApplying = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
            <h3>This is the real Contant page</h3>
        </div>
    );
};

export default StartApplying;