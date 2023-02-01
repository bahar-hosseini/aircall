//External Modules
import React from 'react';
import { Link } from 'react-router-dom';

/* All Calls (not archived) calls are in All Calls by Click on 'i' icon in details page and then click on archive button calls move to Archived tab */

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className='navbar-link'>
        <h3>All Calls</h3>
      </Link>
      <Link to='/archive'>
        <h3>Archived</h3>
      </Link>
      ;<div className='animation'></div>
    </nav>
  );
};

export default Navbar;
