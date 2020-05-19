import React from "react";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink to="/posts" activeClassName={style.activeLink}>
            Posts
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/users" activeClassName={style.activeLink}>
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
