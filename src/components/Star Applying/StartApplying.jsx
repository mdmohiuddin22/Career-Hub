import React from 'react';
import { useLoaderData } from 'react-router-dom';

const StartApplying = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>How are you</h1>
        </div>
    );
};

export default StartApplying;