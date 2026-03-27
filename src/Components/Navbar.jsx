import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const navLinkClass = ({ isActive }) =>
    `hover:text-green-500 duration-200 ease-in-out transition-colors ${
      isActive ? 'text-green-500' : ''
    }`;

  return (
    
    <nav className='w-full h-[12vh] bg-white text-black flex items-center justify-between px-6 fixed top-0 left-0 z-50 shadow-sm'>
      
     
      <div className='flex items-center justify-center'>
        <h1 className='text-3xl font-bold text-green-500'>Mumtaz Tours</h1>
      </div>

      
      <ul className='hidden md:flex items-center justify-center gap-10 font-bold'>
        {/* NavLink ko li ke andar rakhna better HTML semantics hai */}
        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
        <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
        <li><NavLink to="/services" className={navLinkClass}>Services</NavLink></li>
        <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        
        <button className='bg-green-500 px-8 py-2 rounded-2xl text-white hover:bg-black hover:text-green-500 duration-200 ease-in-out transition-all'>
          Login
        </button>
      </ul>

      
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-2xl focus:outline-none'>
          
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      
      {isOpen && (
        <div className='absolute top-[12vh] left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center gap-6 py-8 font-bold border-t'>
          <NavLink to="/" onClick={toggleMenu} className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={navLinkClass}>About</NavLink>
          <NavLink to="/services" onClick={toggleMenu} className={navLinkClass}>Services</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={navLinkClass}>Contact</NavLink>
          
          <button className='bg-green-500 px-8 py-2 w-[80%] rounded-2xl text-white hover:bg-black hover:text-green-500 duration-200 ease-in-out'>
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;