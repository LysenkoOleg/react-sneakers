import React, {useContext, useState} from 'react';
import axios from "axios";

import Info from "../Info";
import {useCart} from "../../hooks/useCart";

import styles from "./Drawer.module.scss"

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClickClose, onRemove, opened }) => {
  const { cartItems, setCartItems, totalPrice } = useCart();

  const [isOrderCompleted, setIsOrderCompleted] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://636a08f8c07d8f936d913add.mockapi.io/orders', {items: cartItems})
      setOrderId(data.id)
      setIsOrderCompleted(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://636a08f8c07d8f936d913add.mockapi.io/cart/' + item.id)
        await delay(1000)
      }
    } catch (error) {
      alert('Ошибка при создании заказа!')
    }
    setIsLoading(false)
  }

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 onClick={onClickClose} className="mb-30 d-flex justify-between">
          Корзина
          <img className="cu-p" src="/img/btn-remove.svg" alt="remove"/>
        </h2>

        {
          cartItems.length > 0
            ?
            <div className="d-flex flex-column flex">
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
                  <img onClick={() => onRemove(item.id)} className="remove-btn" src="/img/btn-remove.svg" alt="remove"/>
                </div>
              )) }
            </div>
              <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <strong>{totalPrice} руб.</strong>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <strong>{Math.round(totalPrice * 0.05)} руб.</strong>
                  </li>
                </ul>
                <button disabled={isLoading} className="greenButton" onClick={onClickOrder}>
                  Оформить заказ <img src="/img/arrow.svg" alt=""/>
                </button>
              </div>
          </div>
            : <Info
              img={isOrderCompleted ? '/img/complete-order.svg' : '/img/empty-cart.jpg'}
              title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
              description={isOrderCompleted ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            />
        }
      </div>
    </div>
  )
};

export default Drawer;