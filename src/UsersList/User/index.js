import React from "react";

const User = user => {
  const customer = user.user;
  console.log(user);
  return (
    <tr>
      <td className="users_table__cell email">{customer.email}</td>
      <td className="users_table__cell name">{customer.name}</td>
      <td className="users_table__cell type">{customer.type}</td>
      <td className="users_table__cell company">{customer.company}</td>
      <td className="users_table__cell country">{customer.country}</td>
      <td className="users_table__cell subscription">
        {customer.subscription}
      </td>
    </tr>
  );
};

export default User;
