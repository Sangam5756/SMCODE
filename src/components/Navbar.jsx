import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-slate-200 p-2  '>
      <ul className='flex mx-4 gap-3'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/string">String</Link>
        </li>
        {/* Add more links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
