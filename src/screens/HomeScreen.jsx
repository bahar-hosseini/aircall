//External Modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Internal Modules
import CallList from '../components/CallList.jsx';
import Navbar from '../components/Navbar.jsx';

const HomeScreen = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<CallList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default HomeScreen;
