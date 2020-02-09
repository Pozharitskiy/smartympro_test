import React from "react";
import OpenUserPopup from "../UserPopup/index.js";
import Popup from "reactjs-popup";

import "./index.scss";

const User = user => {
  const customer = Object.assign(user.user, {});
  customer.name = customer.name.split(" ");
  customer.type = [customer.type];
  if (customer.type[0] === "Business") {
    customer.type.push("Private");
  } else {
    customer.type.push("Business");
  }

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
                <b>{customer.name[0]}</b> {customer.name[1]}
              </p>
            </td>
            <td className="users_table__cell">
              <p className="customer_type">{customer.type[0]}</p>
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
