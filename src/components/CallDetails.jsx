//External Modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

//Internal Modules
import '../css/callDetails.css';
const CallDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [call, setCall] = useState({});
  const {
    duration,
    call_type,
    created_at,
    from,
    is_archived,
    to,
    via,
    direction,
  } = call;

  const handleClick = () => {
    const data = { is_archived: true };
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
        navigate('/');
      })
      .catch((error) => {
        console.log(`The Error is: ${error}`);
      });
  };
  // Fetch selected call
  useEffect(() => {
    axios
      .get(
        `https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities/${id}`
      )
      .then((res) => {
        setCall(res.data);
      })

      .catch((error) => {
        console.log(`The Error is: ${error}`);
      });
  }, []);

  return (
    <div className='container-detail'>
      <main>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>Detail Call</h2>
        <p>call type: {call_type}</p>
        <p>duration: {duration}</p>
        <p>from: {from}</p>
        <p>to: {to}</p>
        <p>via: {via}</p>
        <p>Direction:{direction}</p>
        <button onClick={handleClick}>
          Archive <i className='fa fa-thin fa-box-archive'></i>
        </button>
      </main>
    </div>
  );
};

export default CallDetails;
