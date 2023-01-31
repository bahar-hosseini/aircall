//External Modules
import React from 'react';

//Internal Modules
import '../css/CallListItem.css';
const CallListItem = ({ direction, from, via, to, duration }) => {
  return (
    <div className='call-container'>
      <h3>from :{from}</h3>
      <h3>to: {to}</h3>
      {/* <h3>duration: {duration}</h3>
      <h3>via: {via}</h3>
      <h3>Direction: {direction}</h3> */}
    </div>
  );
};

export default CallListItem;
