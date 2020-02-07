import React from "react";

import users from "../mock/users";
import User from "./User";

import "./index.scss";

const UsersList = () => {
  return (
    <div className="users_list__container">
      <table className="users_table">
        <tr className="users_table__header-row">
          <td className="users_table__header-cell">
            <p className="customer_email">E-mail</p>
          </td>
          <td className="users_table__header-cell">
            <p className="customer_name">Name</p>
          </td>
          <td className="users_table__header-cell">
            <p className="customer_type">Type</p>
          </td>
          <td className="users_table__header-cell">
            <p className="customer_company">Company</p>
          </td>
          <td className="users_table__header-cell">
            <p className="customer_country">Country</p>
          </td>
          <td className="users_table__header-cell">
            <p className="customer_subscription">Subscription</p>
          </td>
        </tr>
        {users.map(el => {
          return <User user={el} />;
        })}
      </table>
    </div>
  );
};

export default UsersList;
