import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='m-7 gap-10 flex flex-row justify-center'>
            <h2 className='text-7xl font-bold'>JOB HUNTER</h2>
            <Link to="/">Home</Link> <br />
            <Link to="/about">About</Link> <br />
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;