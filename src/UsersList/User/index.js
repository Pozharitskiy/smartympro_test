import React from "react";
import "./index.scss";

const User = user => {
  const customer = user.user;
  const customerName = customer.name.split(" ");

  console.log(customerName);
  return (
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
  );
};

export default User;
