import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='m-7 gap-10 flex flex-row justify-between'>
            <h2 className='text-7xl font-bold'>JOB HUNTER</h2>
          <div className='flex gap-6 mt-5'>  <Link className='text-xl font-bold' to="/">Statistics</Link> <br />
            <Link className='text-xl font-bold' to="/about">Applied Jobs</Link> <br />
            <Link className='text-xl font-bold' to="/contact">Blog</Link></div>
            <button className="btn btn-active btn-secondary ">Start Applying</button>
        </nav>
    );
};

export default Header;