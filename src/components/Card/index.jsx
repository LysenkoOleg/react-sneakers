import React, { useState } from 'react';
import Skeleton from '../Skeleton/Skeleton';
import styles from './Card.module.scss'
import AppContext from '../../context';

const Card = ({
                onFavorite,
                imageUrl, price,
                title, id,
                onPlus,
                favorited = false,
                loading = false
}) => {
  const { isItemAdded } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(favorited)

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl, id });
  }

  const onClickFavorite = () => {
    setIsFavorite(prevState => !prevState)
    onFavorite({ title, price, imageUrl, id });
  }

  return (
    <div className={styles.card}>
      {
        loading
          ?
          <Skeleton/>
          : (
          <>
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
              <img className={styles.plus} src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus" onClick={onClickPlus} />
            </div>
          </>
          )
      }
    </div>
  );
};


export default Card;