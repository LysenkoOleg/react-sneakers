import React, { useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Home = ({ setCartItems, cartItems, cards, onAddToFavorite, isLoading, onAddToCart }) => {
	const [searchValue, setSearchValue] = useState('');

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value)
	}

	const renderItems = () => {
		return (isLoading
			? [...Array(12)]
			: cards.filter((card) => card.title.toLowerCase().includes(searchValue.toLowerCase()))
		)
			.map((card, index) => (
				<Card
					key={index}
					loading={isLoading}
					onFavorite={(obj) => onAddToFavorite(obj)}
					onPlus={(obj, isAdded) => onAddToCart(obj, isAdded)}
					{...card}
				/>
			))
	}

	return (
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>{ searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
				<div className="search-block d-flex">
					<img src="img/search.svg" alt="search"/>
					<input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
					{ searchValue && <img onClick={() => setSearchValue('')} className="cu-p" src="/img/btn-remove.svg" alt="remove"/> }
				</div>
			</div>

			<div className="card-wrapper">
				{renderItems()}
			</div>
		</div>
	)
}

export default Home;

