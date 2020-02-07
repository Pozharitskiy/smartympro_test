import React from "react";

const User = user => {
  const customer = user.user;
  console.log(user);
  return (
    <tr>
      <td>{customer.email}</td>
      <td>{customer.name}</td>
      <td>{customer.type}</td>
      <td>{customer.company}</td>
      <td>{customer.country}</td>
      <td>{customer.subscription}</td>
    </tr>
  );
};

export default User;
