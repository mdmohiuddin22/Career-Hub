import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='m-7 gap-10 flex flex-row justify-between '>
            <h2 className='text-7xl font-bold'>JOB HUNTER</h2>
            <div className='flex gap-6 mt-5'>
                <Link className='text-xl font-bold' to="/">Home</Link> <br />
                <Link className='text-xl font-bold' to="/appliedJobs">Applied Jobs</Link> <br />
                <Link className='text-xl font-bold' to="/blog">Blog</Link>
                <Link className='text-xl font-bold'
                    to="/statatistic"
                >Statatistic</Link>
                <Link to="/startApplying"><button className="btn btn-active btn-secondary ">Start Applying</button> </Link>
            </div>
        </nav>
    );
};

export default Header;

