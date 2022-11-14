import React from 'react';

const Drawer = ({ onClickClose, onRemove, cartItems }) => {

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 onClick={onClickClose} className="mb-30 d-flex justify-between">
          Корзина
          <img className="cu-p" src="/img/btn-remove.svg" alt="remove"/>
        </h2>

        {
          cartItems.length > 0
            ?
            <div>
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
                    <strong>0 руб.</strong>
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
            : <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
          <img className="mb-20" src='/img/empty-cart.jpg' alt='empty-cart' />
          <h2>Корзина пустая</h2>
          <p className="opacity-6 text-center">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button onClick={onClickClose} className="greenButton">
          <img src='/img/arrow.svg' alt='arrow' />
          Вернуться назад
          </button>
          </div>
        }
      </div>
    </div>
  )
};

export default Drawer;