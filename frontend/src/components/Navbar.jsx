import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(true);


  const handledropdown = () => {
    setDropdownVisible(prev => !prev)

  }

 


  return (
    <nav className='p-2 bg-slate-900'>
      <ul className='flex mx-4 text-white gap-3 '>
        <li className='duration-200 rounded-full px-2 py-1 hover:bg-white hover:text-black'>
          <Link to="/">Home</Link>
        </li>

        <li
          className='relative duration-200 cursor-pointer rounded-full px-2 py-1 hover:bg-white hover:text-black'
          onClick={handledropdown}
          onMouseEnter={()=>setDropdownVisible(true)}>
          <span>Topics</span>

          {dropdownVisible && (
            <ul onMouseLeave={()=> setDropdownVisible(false)} className='absolute bg-slate-900 z-30 text-white rounded-md mt-2 w-44 text-center '>

              <li className='hover:bg-slate-300 hover:text-black rounded-md px-2 py-1'>
                <Link to="/array">Array</Link>
              </li>

              <li className='hover:bg-slate-300 hover:text-black rounded-md px-2 py-1'>
                <Link to="/string">String</Link>
              </li>

            </ul>
          )}

        </li>

        {/* Add more links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
