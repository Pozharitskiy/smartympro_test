import React from "react";

import Menu from "./Menu";
import Header from "./Header";
import UsersList from "./UsersList";
import users from "./mock/users";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="main_container">
        <Header users={users} />
        <UsersList />
      </div>
    </div>
  );
}

export default App;
