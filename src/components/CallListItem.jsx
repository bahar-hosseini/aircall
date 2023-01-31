//External Modules
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { format } from 'date-fns';

//Internal Modules
import '../css/CallListItem.css';

const CallListItem = ({ id, from, to, isArchived, createdAt }) => {
  const navigate = useNavigate();
  const date = new Date(createdAt).toISOString().split('T')[0];
  const fotmatedDate = format(new Date(date), 'MMM, d, yyyy');

  //Function to handle the button that sends patch request to unarchive calls
  const handleUnarchive = () => {
    const data = { is_archived: false };
    axios
      .patch(
        `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${id}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((error) => {
        console.log(`The Error is: ${error}`);
      });
  };
  return (
    <div className='call-container'>
      <p>Date: {fotmatedDate} </p>
      <Link to={`/${id}`}>
        <h3>from :{from}</h3>
        <h3>to: {to}</h3>
        <h3>is archived: {String(isArchived)}</h3>
      </Link>
      {isArchived && <button onClick={handleUnarchive}>unarchive</button>}
    </div>
  );
};

export default CallListItem;
