/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { connect } from "react-redux";

import { setUser } from "../../actions/user";
import "./index.scss";

const OpenUserPopup = ({ user, setUser }) => {
  const [firstName, setFirstName] = useState(user.name[0]);
  const [lastName, setLastName] = useState(user.name[1]);
  const [email, setEmail] = useState(user.email);
  const [country, setCountry] = useState(user.country);
  const [company, setCompany] = useState(user.company);

  return (
    <div className="user_popup__container">
      <div className="popup_controls">
        <div className="popup_header">
          <p className="popup_header__username">
            edit {firstName + " " + lastName}
          </p>
          <p className="popup_header__id">unique ID - {user.id}</p>
        </div>
        <div className="popup_close">&#10005;</div>
      </div>
      <div className="e-mail_line">
        <form className="popup_form">
          <label className="popup_label">E-mail</label>
          <input
            type="text"
            defaultValue="default"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></input>
        </form>
        <form className="popup_form">
          <label className="popup_label">First name</label>
          <input
            type="text"
            defaultValue="default"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          ></input>
        </form>
        <form className="popup_form">
          <label className="popup_label">Last name</label>
          <input
            type="text"
            defaultValue="default"
            value={lastName}
            onChangeCapture={e => setLastName(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="country_line">
        <form className="popup_form">
          <label className="popup_label">Country</label>
          <input
            type="text"
            defaultValue="default"
            value={country}
            onChange={e => setCountry(e.target.value)}
          ></input>
        </form>

        <form className="popup_form">
          <label className="popup_label">Company</label>
          <input
            type="text"
            defaultValue="default"
            value={company}
            onChange={e => setCompany(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="type_line">
        <form className="popup_form">
          <label className="popup_label">Type</label>
          <select>
            <option defaultValue="type">{user.type[0]}</option>
            <option defaultValue="type">{user.type[1]}</option>
          </select>
        </form>

        <form className="popup_form">
          <label className="popup_label">Level</label>
          <select>
            <option>12</option>
            <option>13</option>
          </select>
        </form>

        <form className="popup_form">
          <label className="popup_label">Validated</label>

          <select>
            <option>Yes</option>
            <option>No</option>
          </select>
        </form>
        <form className="popup_form">
          <label className="popup_label">Coins</label>
          <input type="text" placeholder="Coins"></input>
        </form>
      </div>
      <div className="buttons_line">
        <button>Reset password</button>
        <button>Revoke Access</button>
        <button
          onClick={() => {
            setUser({ firstName, lastName, email, country, company });
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user))
});

export default connect(null, mapDispatchToProps)(OpenUserPopup);
