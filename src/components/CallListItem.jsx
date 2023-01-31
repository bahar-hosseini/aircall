//External Modules
import React from 'react';
import { Link } from 'react-router-dom';

//Internal Modules
import '../css/CallListItem.css';
const CallListItem = ({ id, from, to }) => {
  return (
    <div className='call-container'>
      <Link to={`/${id}`}>
        <h3>from :{from}</h3>
        <h3>to: {to}</h3>
      </Link>
    </div>
  );
};

export default CallListItem;
