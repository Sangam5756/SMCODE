import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' p-2  bg-slate-900'>

      <ul className='flex mx-4 text-white gap-3'>
        <li className='duration-200 rounded-full px-2 py-1 hover:bg-white hover:text-black'>
          <Link to="/">Home</Link>
        </li>
        <li className='duration-200 rounded-full px-2 py-1 hover:bg-white hover:text-black'>
          <Link to="/array">Array</Link>
        </li>
        <li className='duration-200 rounded-full px-2 py-1 hover:bg-white hover:text-black'>
          <Link to="/string">String</Link>
        </li>
        {/* Add more links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
