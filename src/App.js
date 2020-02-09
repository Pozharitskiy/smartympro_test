import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setUser } from "./actions/user";

import Menu from "./Menu";
import Header from "./Header";
import UsersList from "./UsersList";
import users from "./mock/users";

import "./App.scss";

const App = ({ setUser }) => {
  useEffect(() => {
    setUser(users);
  }, [setUser]);
  return (
    <div className="App">
      <Menu />
      <div className="main_container">
        <Header users={users} />
        <UsersList />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(App);
