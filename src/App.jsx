import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

import Header from './Header.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import SearchProvider from './providers/SearchProvider.jsx';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='container-view'>Some activities should be here</div>

      <HomeScreen />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
