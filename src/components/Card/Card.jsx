import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, price, imageUrl, onClickFavourite, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false);
  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div onClick={onClickFavourite} className={styles.favourite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img
        className={styles.sneaker}
        width={133}
        height={112}
        src={imageUrl}
        alt="sneaker"
      />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price}</b>
        </div>
        <button onClick={onClickPlus} className="button">
          <img
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="btn-plus"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
