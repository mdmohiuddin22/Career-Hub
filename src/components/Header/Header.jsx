// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <nav className='m-7 gap-10 flex flex-row justify-between '>
//             <h2 className='text-7xl font-bold'>JOB HUNTER</h2>
//             <div className='flex gap-6 mt-5'>
//                 <Link className='text-xl font-bold' to="/">Home</Link> <br />
//                 <Link className='text-xl font-bold' to="/appliedJobs">Applied Jobs</Link> <br />
//                 <Link className='text-xl font-bold' to="/blog">Blog</Link>
//                 <Link className='text-xl font-bold'
//                     to="/statatistic"
//                 >Statatistic</Link>
//                 <Link to="/startApplying"><button className="btn btn-active btn-secondary ">Start Applying</button> </Link>
//             </div>
//         </nav>
//     );
// };

// export default Header;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='m-7 gap-10 flex flex-row justify-between'>
      <h2 className='text-7xl font-bold'>JOB HUNTER</h2>
      <button
        type="button"
        className="block sm:hidden text-gray-500 hover:text-white focus:text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 6a1 1 0 011 1v12a1 1 0 01-2 0V7a1 1 0 011-1zM4 12a1 1 0 011-1h14a1 1 0 010 2H5a1 1 0 01-1-1z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
            />
          )}
        </svg>
      </button>
      <div className={`sm:flex sm:items-center sm:justify-end ${isOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col sm:flex-row sm:gap-6 mt-5'>
          <li><Link className='text-xl font-bold' to="/">Home</Link></li>
          <li><Link className='text-xl font-bold' to="/appliedJobs">Applied Jobs</Link></li>
          <li><Link className='text-xl font-bold' to="/blog">Blog</Link></li>
          <li><Link className='text-xl font-bold' to="/statatistic">Statatistic</Link></li>
        </ul>
        <Link to="/startApplying">
          <button className="btn btn-active btn-secondary mt-5 sm:mt-0 ml-0 sm:ml-6">Start Applying</button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

