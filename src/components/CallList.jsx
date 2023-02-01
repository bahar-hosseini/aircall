//External Modules
import React, { useEffect, useState, useContext } from 'react';

//Internal Modules
import CallListItem from './CallListItem.jsx';
import { searchContext } from '../providers/SearchProvider.jsx';

/* Parent of CallListItem file */
const CallList = ({ history }) => {
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
          isArchived={call.is_archived}
          createdAt={call.created_at}
        />
      );
    }
  });
  return (
    <div className='container-calls-list'>
      <div>{callItem}</div>
    </div>
  );
};

export default CallList;
