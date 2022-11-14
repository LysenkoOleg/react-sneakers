import React from "react";
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img src="/img/logo.svg" alt="logo"/>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img src="/img/cart.svg" alt="cart"/>
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to="/favorite">
            <img className="mr-20 cu-p" src="/img/favorite.svg" alt="favorite"/>
          </Link>
        </li>
        <li>
          <img src="/img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>
  )
};

export default Header;