import React from "react";

import users from "../mock/users";
import User from "./User";

import "./index.scss";

const UsersList = () => {
  return (
    <div className="users_list__container">
      <table>
        <tr>
          <td>E-mail</td>
          <td>Name</td>
          <td>Type</td>
          <td>Company</td>
          <td>Country</td>
          <td>Subscription</td>
        </tr>
        {users.map(el => {
          return <User user={el} />;
        })}
      </table>
    </div>
  );
};

export default UsersList;
