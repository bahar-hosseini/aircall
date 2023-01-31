//External Modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Internal Modules
import CallListItem from './CallListItem.jsx';
import '../css/CallList.css';

const CallList = () => {
  const [calls, setCalls] = useState([]);

  // Fetch all calls
  useEffect(() => {
    axios
      .get(
        'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities'
      )
      .then((res) => {
        console.log(res.data);
        setCalls(res.data);
      })
      .catch((error) => {
        console.log(`The Error is: ${error}`);
      });
  }, []);

  const callItem = calls.map((call, index) => {
    return (
      <CallListItem
        key={index}
        direction={call.direction}
        from={call.from}
        to={call.to}
        via={call.via}
        duration={call.duration}
      />
    );
  });
  return (
    <div className='container'>
      <div>{callItem}</div>
    </div>
  );
};

export default CallList;
