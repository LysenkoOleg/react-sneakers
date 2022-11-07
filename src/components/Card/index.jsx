import React from 'react';
import styles from './Card.module.scss'

const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    setIsAdded(prevState => !prevState)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt=""/>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <img className={styles.plus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" onClick={onClickPlus} />
      </div>
    </div>
  );
};


export default Card;