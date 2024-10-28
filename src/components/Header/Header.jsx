import React from "react";
import { Link } from "react-router-dom";

const Header = ({ onClickCart }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img alt="logo" width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30">
          <img alt="cart" width={18} height={18} src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <Link to="/favourites">
          <li className="mr-30">
            <img alt="user" width={18} height={18} src="/img/favourites.png" />
            <span>Избранное</span>
          </li>
        </Link>
        <li>
          <img alt="user" width={18} height={18} src="/img/user.svg" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
