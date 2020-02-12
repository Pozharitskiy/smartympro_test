import React from "react";

import Logo from "../../img/logo.png";
import UsersLogo from "../../img/users.png";
import StreamsLogo from "../../img/streams.png";
import BrainstormLogo from "../../img/brain.png";
import DailyLogo from "../../img/daily.png";
import LevelingLogo from "../../img/leveling.png";
import CourseLogo from "../../img/course.png";
import CashLogo from "../../img/cash.png";
import AnalyticsLogo from "../../img/analytics.png";

import "./index.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu_header">
        <img className="menu_header__logo" alt="logo" src={Logo} />
        <h1 className="menu_header__name">Open Circles</h1>
      </div>
      <ul className="menu_header__list">
        <li className="menu_header__list__item menu_header__list__item__active">
          <img src={UsersLogo} alt="users list" className="list_item__logo" />
          <p>users list</p>
        </li>
        <li className="menu_header__list__item">
          <img src={DailyLogo} alt="daily" className="list_item__logo" />
          <p>daily</p>
        </li>
        <li className="menu_header__list__item">
          <img
            src={BrainstormLogo}
            alt="brainstorm"
            className="list_item__logo"
          />
          <p>brainstorm</p>
        </li>
        <li className="menu_header__list__item">
          <img src={CourseLogo} alt="courses" className="list_item__logo" />
          <p>course</p>
        </li>
        <li className="menu_header__list__item">
          <img src={LevelingLogo} alt="leveling" className="list_item__logo" />
          <p>leveling system</p>
        </li>
        <li className="menu_header__list__item">
          <img src={StreamsLogo} alt="streams" className="list_item__logo" />
          <p>live streams</p>
        </li>
        <li className="menu_header__list__item">
          <img src={CashLogo} alt="advanced" className="list_item__logo" />
          <p>advanced</p>
        </li>
        <li className="menu_header__list__item">
          <img
            src={AnalyticsLogo}
            alt="analytics"
            className="list_item__logo"
          />
          <p>video analytics</p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
