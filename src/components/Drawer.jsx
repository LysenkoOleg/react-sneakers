import React from "react";

const Drawer = ({ onClickClose, cartItems }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 onClick={onClickClose} className="mb-30 d-flex justify-between">
          Корзина
          <img className="cu-p" src="/img/btn-remove.svg" alt="remove"/>
        </h2>
        <div className="items">
          { cartItems.map((item, index) => (
            <div className="cartItem d-flex align-center mb-20" key={index}>
              <div
                style={{ backgroundImage: `url(${item.imageUrl})`}}
                className="cartItemImg">
              </div>
              <div className="mr-15">
                <p className="mb-5">{item.title}</p>
                <strong>{item.price} руб.</strong>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="remove"/>
            </div>
          )) }
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