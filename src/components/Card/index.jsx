import React, { useState } from 'react';
import styles from './Card.module.scss'

const Card = ({ onFavorite, imageUrl, price, title, onPlus }) => {
  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const onClickPlus = () => {
    setIsAdded(prevState => !prevState)
    onPlus({ title, price, imageUrl });
  }

  const onClickFavorite = () => {
    setIsFavorite(prevState => !prevState)
    onFavorite({ title, price, imageUrl });
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={ isFavorite ? "/img/heart-liked.png" : "/img/heart-unliked.svg" } alt="unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt=""/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" onClick={onClickPlus} />
      </div>
    </div>
  );
};


export default Card;