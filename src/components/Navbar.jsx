//External Modules
import React from 'react';
import { Link } from 'react-router-dom';

//Internal Modules
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className='navbar-link'>
        <h3>All Calls</h3>
      </Link>
      <Link to='/archive'>
        <h3>Archive</h3>
      </Link>
      ;<div className='animation start-allcalls'></div>
    </nav>
  );
};

export default Navbar;
