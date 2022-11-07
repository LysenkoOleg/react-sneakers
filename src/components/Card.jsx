import React from 'react';

const Card = (props) => {
  const onClickButton = () => {
    alert(props.title)
  }

  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt=""/>
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={onClickButton}>
          <img src="/img/plus.svg" alt="plus"/>
        </button>
      </div>
    </div>
  );
};


export default Card;