//External Modules
import React, { useContext } from 'react';

//Internal Modules
import { searchContext } from '../providers/SearchProvider.jsx';

const Footer = () => {
  const { calls } = useContext(searchContext);
  let misscallNumber = 0;
  calls.map((call) => {
    call.call_type === 'missed' && misscallNumber++;
  });
  return (
    <footer>
      <div>
        <h3>{misscallNumber}</h3>
      </div>
      <i className=' fa fa-duotone fa-square-phone'></i>
    </footer>
  );
};

export default Footer;
