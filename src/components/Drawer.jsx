import React, { useState } from "react";
import Info from "./Info";

const Drawer = ({ onCloseCart, onRemove, items = [] }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  console.log(isOrderComplete);
  const onClickOrder = () => {
    setIsOrderComplete(true);
    console.log(isOrderComplete);
  };

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

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((item, index) => (
                <div key={index} className="cartItem d-flex align-center mb-20">
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
                    onClick={() => onRemove(item.id)}
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
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ
                <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? "Ваш заказ #18 скоро будет передан курьерской доставке"
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderComplete
                ? "/img/complete-order.png"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
