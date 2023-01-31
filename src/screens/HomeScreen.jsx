//External Modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Internal Modules
import CallList from '../components/CallList.jsx';
import Navbar from '../components/Navbar.jsx';
import CallDetails from '../components/CallDetails.jsx';
import Archive from './Archive.jsx';
import SearchProvider from '../providers/SearchProvider.jsx';

const HomeScreen = () => {
  return (
    <div>
      <Router>
        <SearchProvider>
          <Navbar />
          <Routes>
            <Route path='/:id' element={<CallDetails />} />
            <Route path='/archive' element={<Archive />} />;
            <Route path='/' element={<CallList />} exact />
          </Routes>
        </SearchProvider>
      </Router>
    </div>
  );
};

export default HomeScreen;
