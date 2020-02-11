import React from "react";

import OpenUserPopup from "../UserPopup/index.js";
import Popup from "reactjs-popup";

import "./index.scss";

const User = ({ user, index }) => {
  const name = user.name;
  return (
    <>
      <Popup
        trigger={
          <tr>
            <td className="users_table__cell">
              <p className="customer_email">{user.email}</p>
            </td>
            <td className="users_table__cell">
              <p className="customer_name">
                <b>{name[0]}</b> {name[1]}
              </p>
            </td>
            <td className="users_table__cell">
              <p className="customer_type">{user.type[0]}</p>
            </td>

            <td className="users_table__cell">
              <p className="customer_company">{user.company}</p>
            </td>
            <td className="users_table__cell">
              <p className="customer_country">{user.country}</p>
            </td>
            <td className="users_table__cell">
              <p className="customer_subscription">{user.subscription}</p>
            </td>
          </tr>
        }
      >
        {close => <OpenUserPopup user={user} index={index} close={close} />}
      </Popup>
    </>
  );
};

export default User;
