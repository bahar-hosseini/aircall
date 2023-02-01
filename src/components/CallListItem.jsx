//External Modules
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

//Internal Modules

const CallListItem = ({ id, from, to, isArchived, createdAt }) => {
  const navigate = useNavigate();

  const date = new Date(createdAt).toISOString().split('T')[0];
  const fotmatedDate = format(new Date(date), 'MMM, d, yyyy');

  const date1 = new Date(createdAt).toISOString();

  const formatedTime = format(new Date(date1), 'HH:mm bbb');

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
      <i className='fa fa-thin fa-phone phone-icon'></i>
      <ul>
        <li>
          <i className='fa fa-thin fa-ellipsis'></i>
          {} {fotmatedDate}
          {} <i className='fa fa-thin fa-ellipsis'></i>
        </li>

        <li>
          <h3>From :{from}</h3>
        </li>
        <li>
          <p>Tried to call {to}</p>
          {isArchived && <button onClick={handleUnarchive}>unarchive</button>}
        </li>
      </ul>
      <div>
        <div className='tooltip'>
          <Link to={`/${id}`} className='information'>
            <span>Details</span>{' '}
            <i className='fa fa-sharp fa-solid fa-circle-info'></i>
            <div>
              <span className='tooltiptext'>Click to Archive</span>
            </div>
          </Link>
        </div>
        <div className='time'>
          <p>{formatedTime}</p>
        </div>
      </div>
    </div>
  );
};

export default CallListItem;
