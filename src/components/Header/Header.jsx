import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/images/logo.svg";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
