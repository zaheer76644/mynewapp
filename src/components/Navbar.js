import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const logout = () => {
    sessionStorage.setItem('isLogin', false);
    // return <Redirect to='/login' />;
  }


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
              Zaheer
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/task'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Task
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/user'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  User
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to="/"
                  className='nav-links'
                  onClick={logout}
                >
                  Logout
                </Link>
              </li>
            </ul>
           
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;