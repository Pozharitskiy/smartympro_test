import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setUsersList } from "./actions/users";

import Menu from "./Menu";
import Header from "./Header";
import UsersList from "./UsersList";
import users from "./mock/users";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ setUsersList }) => {
  useEffect(() => {
    setUsersList(users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  setUsersList: users => dispatch(setUsersList(users))
});

export default connect(null, mapDispatchToProps)(App);
