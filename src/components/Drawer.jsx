import React from "react";

const Drawer = ({ onCloseCart, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-20 d-flex justify-between">
          Корзина
          <img
            onClick={onCloseCart}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
        <div className="items">
          {items.map((item) => (
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src={item.imageUrl}
                alt="sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">{item.title}</p>
                <b>{item.price}</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
