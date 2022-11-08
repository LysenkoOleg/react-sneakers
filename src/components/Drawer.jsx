import React from "react";

const Drawer = (props) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 onClick={props.onClickClose} className="mb-30 d-flex justify-between">Корзина <img className="cu-p" src="/img/btn-remove.svg" alt="remove"/></h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}}
              className="cartItemImg">
            </div>
            <div className="mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="remove-btn" src="/img/btn-remove.svg" alt="remove"/>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}}
              className="cartItemImg">
            </div>
            <div className="mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <strong>12 999 руб.</strong>
            </div>
            <img className="remove-btn" src="/img/btn-remove.svg" alt="remove"/>
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <strong>21 498 руб.</strong>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <strong>1074 руб.</strong>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt=""/></button>
        </div>
      </div>
    </div>
  )
};

export default Drawer;