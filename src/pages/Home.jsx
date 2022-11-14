import React, { useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Home = ({ setCartItems, cards, onAddToFavorite }) => {
	const [searchValue, setSearchValue] = useState('');

	const onAddToCart = (obj) => {
		axios.post('https://636a08f8c07d8f936d913add.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj])
	}

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value)
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
				{
					cards
						.filter((card) => card.title.toLowerCase().includes(searchValue.toLowerCase()))
						.map((card, index) => (
							<Card
								key={index}
								onFavorite={(obj) => onAddToFavorite(obj)}
								onPlus={(obj, isAdded) => onAddToCart(obj, isAdded)}
								{...card}
							/>
						))
				}
			</div>
		</div>
	)
}

export default Home;

