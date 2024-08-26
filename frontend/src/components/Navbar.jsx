import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Dropdown items array
  const dropdownItems = [
    { name: 'Array', path: '/array' },
    { name: 'String', path: '/string' }
  ];

  const handleDropdownToggle = () => {
    setDropdownVisible(prev => !prev);
  };

  return (
    <nav className='p-2 bg-slate-900'>
      <ul className='flex mx-4 text-white gap-3'>
        <li className='duration-200 rounded-full px-2 py-1 hover:bg-white hover:text-black'>
          <Link to="/">Home</Link>
        </li>

        <li
          className='relative duration-200 cursor-pointer rounded-full px-2 py-1 hover:bg-white hover:text-black'
          onClick={handleDropdownToggle}
          onMouseEnter={() => setDropdownVisible(true)}
        >
          <span>Topics</span>

          {dropdownVisible && (
            <ul
              onMouseLeave={() => setDropdownVisible(false)}
              className='absolute bg-slate-900 z-30 text-white rounded-md mt-2 w-44 text-center'
            >
              {dropdownItems.map(item => (
                <li
                  key={item.path}
                  className='hover:bg-slate-300 hover:text-black rounded-md px-2 py-1'
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
