import React from 'react';
import Logo from '../img/logo.png';
import './index.scss';

const Menu = () => {
  return (
    <div className="menu">
    <div className="menu_header">
      <img className="menu_header__logo" src={Logo} />
      <h1 className="menu_header__name">Open Circles</h1>
    </div>
    <ul className="menu_header__list">
      <li className="menu_header__list__item">
        <p>users list</p>
        </li>
      <li className="menu_header__list__item">
        <p>daily</p>
        </li>
      <li className="menu_header__list__item">
        <p>brainstorm</p>
        </li>
      <li className="menu_header__list__item">
        <p>course</p>
        </li>
      <li className="menu_header__list__item">
        <p>leveling system</p>
        </li>
      <li className="menu_header__list__item">
        <p>live streams</p>
        </li>
      <li className="menu_header__list__item">
        <p>advanced</p>
        </li>
      <li className="menu_header__list__item">
        <p>video analytics</p>
        </li>
    </ul>
    </div>
  )
}

export default Menu;