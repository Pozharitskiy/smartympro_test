import React from "react";
import { connect } from "react-redux";

import User from "../User";

import "./index.scss";

const UsersList = ({ users }) => {
  return (
    <div className="users_list__container">
      <table className="users_table">
        <tr className="users_table__header-row">
          <td className="users_table__header-cell">
            <p className="header_text customer_email">E-mail</p>
          </td>
          <td className="users_table__header-cell">
            <p className="header_text customer_name">Name</p>
          </td>
          <td className="users_table__header-cell">
            <p className="header_text customer_type">Type</p>
          </td>
          <td className="users_table__header-cell">
            <p className="header_text customer_company">Company</p>
          </td>
          <td className="users_table__header-cell">
            <p className="header_text customer_country">Country</p>
          </td>
          <td className="users_table__header-cell">
            <p className="header_text customer_subscription">Subscription</p>
          </td>
        </tr>
        {users &&
          users.map((user, index) => (
            <User user={user} key={user.id} index={index} />
          ))}
      </table>
      <button className="show_more__button">Show more</button>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.usersList
});

export default connect(mapStateToProps)(UsersList);
