import React from 'react';

const Card = ({name, price, image}) => {
	return (
		<div className='card'>
			<div className='favourite'>
				<img src='/img/heart-unliked.svg' alt='unliked' />
			</div>
			<img className='sneaker' width={133} height={112} src={image} alt='' />
			<h5>{name}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена: </span>
					<b>{price}</b>
				</div>
				<button className="button">
					<img src='/img/btn-plus.svg' alt='btn-plus' />
				</button>
			</div>
		</div>
	);
};

export default Card;
