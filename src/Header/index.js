import React, { useState } from "react";
import "./index.scss";

const Header = users => {
  const [isBurgerToggled, toggleBurgerClass] = useState("menu-button");
  const consumers = users.users;
  const toggleBurger = () => {
    if (isBurgerToggled === "menu-button") {
      toggleBurgerClass("is_active");
    }
    toggleBurgerClass("menu_button");
  };
  return (
    <div className="header_container">
      <div className="left_block">
        <div className="burger_menu">
          <a className={isBurgerToggled} onClick={toggleBurger} id="menuButton">
            <span className="burger_icon"></span>
          </a>
        </div>
        <div className="users_list">
          <h2 className="users_list__header">Users list</h2>
          <p className="users_list__count">{consumers.length} users</p>
        </div>
      </div>
      <div className="central_block">
        <input type="text" placeholder="Search" className="header_search" />
      </div>
      <div className="left_block">
        <button className="header_btn">table filter</button>
        <p className="header_username">Dale McCormick &#709;</p>
      </div>
    </div>
  );
};

export default Header;
