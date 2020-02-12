/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { connect } from "react-redux";

import { setUser } from "../../actions/users";

import "./index.scss";

const OpenUserPopup = ({ user, setUser, index, close }) => {
  const [firstName, setFirstName] = useState(user.name[0]);
  const [lastName, setLastName] = useState(user.name[1]);
  const [userType, setUserType] = useState(user.type[0]);
  const [email, setEmail] = useState(user.email);
  const [country, setCountry] = useState(user.country);
  const [company, setCompany] = useState(user.company);

  return (
    <div className="user_popup__container">
      <div className="popup_controls">
        <div className="popup_header">
          <p className="popup_header__username">
            edit {user.name[0] + " " + user.name[1]}
          </p>
          <p className="popup_header__id">unique ID - {user.id}</p>
        </div>
        <div className="popup_close" onClick={() => close()}>
          &#10005;
        </div>
      </div>
      <div className="e-mail_line">
        <form className="popup_form e-mail">
          <label className="popup_label">E-mail</label>
          <input
            type="text"
            className="popup_input "
            defaultValue="default"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></input>
        </form>
        <form className="popup_form">
          <label className="popup_label">First name</label>
          <input
            type="text"
            className="popup_input"
            defaultValue="default"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          ></input>
        </form>
        <form className="popup_form">
          <label className="popup_label">Last name</label>
          <input
            type="text"
            className="popup_input"
            defaultValue="default"
            value={lastName}
            onChangeCapture={e => setLastName(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="country_line">
        <form className="popup_form country">
          <label className="popup_label">Country</label>
          <input
            type="text"
            className="popup_input"
            defaultValue="default"
            value={country}
            onChange={e => setCountry(e.target.value)}
          ></input>
        </form>

        <form className="popup_form company">
          <label className="popup_label">Company</label>
          <input
            type="text"
            className="popup_input"
            defaultValue="default"
            value={company}
            onChange={e => setCompany(e.target.value)}
          ></input>
        </form>
      </div>
      <div className="type_line">
        <form className="popup_form">
          <label className="popup_label">Type</label>

          <select
            className="popup_dropdown"
            onChange={e => setUserType(e.target.value)}
          >
            <option defaultValue="Business">{user.type[0]}</option>
            <option defaultValue="Business">{user.type[1]}</option>
          </select>
        </form>

        <form className="popup_form">
          <label className="popup_label">Level</label>
          <select className="popup_dropdown">
            <option>12</option>
            <option>13</option>
          </select>
        </form>

        <form className="popup_form">
          <label className="popup_label">Validated</label>

          <select className="popup_dropdown">
            <option>Yes</option>
            <option>No</option>
          </select>
        </form>
        <form className="popup_form">
          <label className="popup_label">Coins</label>
          <input
            type="text"
            placeholder="Coins"
            className="popup_dropdown"
          ></input>
        </form>
      </div>
      <div className="buttons_line">
        <div className="subscription_data">
          <p>
            Subscription type -{" "}
            <span className="subscription_data__userdata">99.99</span>
          </p>
          <p>
            Subscription date -{" "}
            <span className="subscription_data__userdata">11/02/2016</span>
          </p>
        </div>
        <div className="buttons_line__controls">
          <button className="popup_button">Reset password</button>
          <button className="popup_button">Revoke Access</button>
          <button
            className="popup_button active"
            onClick={() => {
              setUser(
                { firstName, lastName, email, country, company, userType },
                index
              );
              close();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  setUser: (user, index) => dispatch(setUser(user, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenUserPopup);
