import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const searchContext = createContext();

//hook for other files to use
export const useSearch = () => useContext(searchContext);

export default function SearchProvider(props) {
  const [calls, setCalls] = useState([]);
  const navigate = useNavigate();
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
  }, [navigate]);
  const providerData = { calls };
  return (
    <searchContext.Provider value={providerData}>
      {props.children}
    </searchContext.Provider>
  );
}
