// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

// const Header = () => {
//   return (
//     <header className='sticky shadow z-50 top-0 bg-black text-white'>
//         <nav className='px-15 lg:px-30 py-2.5 flex items-center justify-between'>
//             <div>
//                 <Link to='/' className='text-3xl font-bold'>DevToolsHub</Link>
//             </div>
//             <div>
//                 <ul className='flex gap-8'>
//                     <li className='text-xl font-medium'>
//                          <NavLink
//                                 to="/"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-white"} hover:text-blue-500`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                     </li>
//                     <li className='text-xl font-medium'>
//                          <NavLink
//                                 to="/tools"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-white"} hover:text-blue-500`
//                                     }
//                                 >
//                                     Tools
//                                 </NavLink>
//                     </li>
//                 </ul>
//             </div>



//         </nav>

//     </header>

//   )
// }

// export default Header


import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, SunMoon } from 'lucide-react'; // You can install lucide-react or use any icon library
import { useTheme } from '../../context/Theme';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme()

  return (
    <header className='sticky shadow-lg z-50 top-0 bg-white text-black dark:bg-gray-900 dark:text-white dark:border-b-[1px] dark:border-gray-700'>
      <nav className='px-4 lg:px-20 py-3 flex items-center justify-between'>
        <Link to='/' className='text-4xl font-bold'>
          DevTools<span className='text-blue-500'>Hub</span>
        </Link>

        {/* Hamburger icon for mobile */}
        <div className='lg:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className='hidden lg:flex gap-8 text-xl font-medium'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 duration-200 ${isActive ? "text-blue-500" : "text-black dark:text-white"} hover:text-blue-500`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tools"
              className={({ isActive }) =>
                `block py-2 duration-200 ${isActive ? "text-blue-500" : "text-black dark:text-white"} hover:text-blue-500`
              }
            >
              Tools
            </NavLink>
          </li>

          <li>
            <button onClick={theme} className='cursor-pointer py-2 border-2 border-gray-300 dark:border-gray-600 px-2.5 rounded-2xl hover:border-blue-500'><SunMoon /></button>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className='lg:hidden px-4 pb-4'>
          <ul className='flex flex-col gap-4 text-xl font-medium'>
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 duration-200 ${isActive ? "text-blue-500" : "text-white"} hover:text-blue-500`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tools"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 duration-200 ${isActive ? "text-blue-500" : "text-white"} hover:text-blue-500`
                }
              >
                Tools
              </NavLink>
            </li>
            <li>
              <button onClick={theme} className='cursor-pointer py-2 border-2 pr-2.5 pl-4 rounded-2xl hover:border-blue-500 flex items-center gap-4 justify-center'>Appearance<SunMoon /></button>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
