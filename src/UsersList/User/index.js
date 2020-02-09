import React from "react";
import OpenUserPopup from "../UserPopup/index.js";
import Popup from "reactjs-popup";

import "./index.scss";

const User = ({ user, index }) => {
  const name = user.name.split(" ");
  const type = [user.type];
  if (type[0] === "Business") {
    type.push("Private");
  } else {
    type.push("Business");
  }

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
              <p className="customer_type">{type[0]}</p>
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
        <OpenUserPopup user={user} index={index} />
      </Popup>
    </>
  );
};

export default User;
