import React from 'react';

const Drawer = () => {
	return (
		<div style={{display: "none"}} className="overlay">
			<div className='drawer d-flex flex-column'>
				<h2 className="mb-20 d-flex justify-between">Корзина
					<img className="cu-p" src='/img/btn-remove.svg' alt='remove' />
				</h2>
				<div className='items'>
					<div className='cartItem d-flex align-center mb-20'>
						<img className="mr-20" width={70} height={70} src='/img/sneakers/1.jpg' alt='sneakers' />
						<div className="mr-20">
							<p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<b>12 999 руб.</b>
						</div>
						<img className="removeBtn" src='/img/btn-remove.svg' alt='remove' />
					</div>
					<div className='cartItem d-flex align-center'>
						<img className="mr-20" width={70} height={70} src='/img/sneakers/1.jpg' alt='sneakers' />
						<div className="mr-20">
							<p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
							<b>12 999 руб.</b>
						</div>
						<img className="removeBtn" src='/img/btn-remove.svg' alt='remove' />
					</div>
				</div>
				<div className='cartTotalBlock'>
					<ul className="cartTotalBlock">
						<li className="d-flex">
							<span>Итого: </span>
							<div></div>
							<b>21 498 руб. </b>
						</li>
						<li className="d-flex">
							<span>Налог 5%: </span>
							<div></div>
							<b>1074 руб. </b>
						</li>
					</ul>
					<button className="greenButton">Оформить заказ
						<img src='/img/arrow.svg' alt='arrow' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
