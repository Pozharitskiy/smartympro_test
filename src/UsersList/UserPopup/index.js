/* eslint-disable no-unused-expressions */
import React from "react";

import "./index.scss";

const OpenUserPopup = user => {
  console.log(user);
  return (
    <div className="user_popup__container">
      <div className="e-mail_line">
        <label>E-mail</label>
        <input type="text" placeholder="e-mail"></input>
        <label>First name</label>
        <input type="text" placeholder="e-mail"></input>
        <label>Last name</label>
        <input type="text" placeholder="e-mail"></input>
      </div>
      <div className="country_line">
        <label>Country</label>
        <input type="text" placeholder="e-mail"></input>
        <label>Company</label>
        <input type="text" placeholder="e-mail"></input>
      </div>
      <div className="type_line">
        <label>Type</label>
        <input type="text" placeholder="e-mail"></input>
        <label>Level</label>
        <input type="text" placeholder="e-mail"></input>
        <label>Validated</label>
        <input type="text" placeholder="e-mail"></input>
        <label>Coins</label>
        <input type="text" placeholder="e-mail"></input>
      </div>
      <div className="buttons_line">
        <button>Reset password</button>
        <button>Revoke Access</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default OpenUserPopup;
