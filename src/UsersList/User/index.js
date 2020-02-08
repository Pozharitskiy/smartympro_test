import React from "react";
import OpenUserPopup from "../UserPopup/index.js";
import Popup from "reactjs-popup";

import "./index.scss";

const User = user => {
  const customer = user.user;
  const customerName = customer.name.split(" ");

  return (
    <>
      <Popup
        trigger={
          <tr>
            <td className="users_table__cell">
              <p className="customer_email">{customer.email}</p>
            </td>
            <td className="users_table__cell">
              <p className="customer_name">
                <b>{customerName[0]}</b> {customerName[1]}
              </p>
            </td>
            <td className="users_table__cell">
              <p className="customer_type">{customer.type}</p>
            </td>

            <td className="users_table__cell">
              <p className="customer_company">{customer.company}</p>
            </td>
            <td className="users_table__cell">
              <p className="customer_country">{customer.country}</p>
            </td>
            <td className="users_table__cell">
              <p className="customer_subscription">{customer.subscription}</p>
            </td>
          </tr>
        }
      >
        <OpenUserPopup user={customer} />
      </Popup>
    </>
  );
};

export default User;
