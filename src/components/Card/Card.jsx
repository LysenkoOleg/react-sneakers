import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, price, imageUrl, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img
        className={styles.sneaker}
        width={133}
        height={112}
        src={imageUrl}
        alt=""
      />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price}</b>
        </div>
        <button onClick={onClick} className="button">
          <img src="/img/btn-plus.svg" alt="btn-plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
