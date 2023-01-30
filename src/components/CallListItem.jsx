//External Modules
import React from 'react';

//Internal Modules

const CallListItem = ({ direction, from, via, to, duration }) => {
  return (
    <div>
      <h3>duration: {duration}</h3>
      <h3>from :{from}</h3>
      <h3>via: {via}</h3>
      <h3>to: {to}</h3>
      <h3>Direction: {direction}</h3>
    </div>
  );
};

export default CallListItem;
