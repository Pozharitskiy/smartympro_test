import React from "react";

import users from "../mock/users";
import User from "./User";

import "./index.scss";

const UsersList = () => {
  return (
    <div className="users_list__container">
      <table className="users_table">
        <tr className="users_table__header-row">
          <td className="users_table__header-cell">E-mail</td>
          <td className="users_table__header-cell">Name</td>
          <td className="users_table__header-cell">Type</td>
          <td className="users_table__header-cell">Company</td>
          <td className="users_table__header-cell">Country</td>
          <td className="users_table__header-cell">Subscription</td>
        </tr>
        {users.map(el => {
          return <User user={el} />;
        })}
      </table>
    </div>
  );
};

export default UsersList;
