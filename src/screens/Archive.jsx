//External Modules
import React, { useContext } from 'react';

//Internal Modules
import { searchContext } from '../providers/SearchProvider.jsx';
import CallListItem from '../components/CallListItem.jsx';

/* Component that shows are archived call /you are able to unarchived them by click the button and then redirect to home page */
const Archive = () => {
  const { calls } = useContext(searchContext);
  const callItem = calls.map((call, index) => {
    if (call.is_archived !== false) {
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

export default Archive;
