import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

const Card = ({
  id,
  title,
  price,
  imageUrl,
  onClickFavourite,
  onPlus,
  favourited = false,
  added = false,
  loading = false,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavourite, setIsFavourite] = useState(favourited);
  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onFavourite = () => {
    onClickFavourite({ id, title, price, imageUrl });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={180}
          height={200}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="91" y="125" rx="0" ry="0" width="0" height="1" />
          <rect x="0" y="102" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="123" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="157" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="154" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
        </ContentLoader>
      ) : (
        <>
          <div onClick={onFavourite} className={styles.favourite}>
            <img
              src={
                isFavourite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"
              }
              alt="unliked"
            />
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
        </>
      )}
    </div>
  );
};

export default Card;
