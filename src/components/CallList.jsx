//External Modules
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

//Internal Modules
import CallListItem from './CallListItem.jsx';
import '../css/CallList.css';
import { searchContext } from '../providers/SearchProvider.jsx';

const CallList = () => {
  const { calls } = useContext(searchContext);

  const callItem = calls.map((call, index) => {
    if (call.is_archived === false) {
      return (
        <CallListItem
          key={index}
          id={call.id}
          direction={call.direction}
          from={call.from}
          to={call.to}
          via={call.via}
          duration={call.duration}
        />
      );
    }
  });
  return (
    <div className='container'>
      <div>{callItem}</div>
    </div>
  );
};

export default CallList;
