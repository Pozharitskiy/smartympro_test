import React from 'react';

import Menu from './Menu';
import Header from './Header';
import UsersList from './UsersList';

import './App.scss';

function App() {
  return (
    <div className="App">
     <Menu />
     <div className="main_container">
       <Header />
       <UsersList />
     </div>
    </div>
  );
}

export default App;
