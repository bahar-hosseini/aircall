//External Modules
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { format } from 'date-fns';

//Internal Modules
import '../css/callListItem.css';

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
      <p>
        <i className='fa fa-thin fa-ellipsis'></i>
        {fotmatedDate} <i className='fa fa-thin fa-ellipsis'></i>
      </p>
      <Link to={`/${id}`} className='information'>
        More details: <i className='fa fa-sharp fa-solid fa-circle-info'></i>
      </Link>

      <h3>
        <i className='fa fa-thin fa-phone'> </i>from :{from}
      </h3>
      <h3>Tried to call {to}</h3>
      {isArchived && <button onClick={handleUnarchive}>unarchive</button>}
    </div>
  );
};

export default CallListItem;
