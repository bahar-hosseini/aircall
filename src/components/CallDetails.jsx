//External Modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Detail Call:</h2>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>call type: {call_type}</p>
      <p>duration: {duration}</p>
      <p>created_at: {created_at}</p>
      <p>from: {from}</p>
      <p>to: {to}</p>
      <p>via: {via}</p>
      <p>Direction:{direction}</p>
      <button onClick={handleClick}>Archive</button>
    </div>
  );
};

export default CallDetails;
