import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/shared/logo.svg";

function Header() {
  const nav = [
    { id: 0, title: "home", url: "" },
    { id: 0, title: "destination", url: "destination" },
    { id: 0, title: "crew", url: "crew" },
    { id: 0, title: "technology", url: "technology" },
  ];

  const [burger, setBurger] = React.useState(false);

  const onClickCloseBurger = () => {
    setBurger(!burger);
  };

  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__wrapper">
          <Link to={"/"} className="header__logo">
            <img src={logo} alt="Space tourism logo" />
          </Link>
          <div className="header__line"></div>
          <ul
            className={
              burger
                ? "header__list nav header__list--active"
                : "header__list nav"
            }
          >
            {nav.map((obj) => (
              <li
                key={obj.id}
                className="header__item"
                onClick={() => onClickCloseBurger()}
              >
                <NavLink
                  to={`/${obj.url}`}
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                >
                  <span>{`0${obj.id}`}</span>
                  {obj.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className={burger ? "burger burger--active" : "burger"}
            aria-label="Open menu"
            aria-expanded="false"
            onClick={() => onClickCloseBurger()}
          >
            <span className="burger-line"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
