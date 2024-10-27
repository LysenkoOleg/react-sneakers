import React from 'react';

const Card = () => {
	return (
		<div className='card'>
			<div className='favourite'>
				<img src='/img/heart-unliked.svg' alt='unliked' />
			</div>
			<img className='sneaker' width={133} height={112} src='/img/sneakers/1.jpg' alt='' />
			<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена: </span>
					<b>12 999 руб.</b>
				</div>
				<button className="button">
					<img src='/img/btn-plus.svg' alt='btn-plus' />
				</button>
			</div>
		</div>
	);
};

export default Card;
