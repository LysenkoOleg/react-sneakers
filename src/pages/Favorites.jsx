import React, { useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';

const Favorites = ({ favorites, onAddToFavorite }) => {

	return (
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>Мои закладки</h1>
			</div>

			<div className="card-wrapper">
				{
					favorites
						.map((card, index) => (
							<Card
								key={index}
								favorited={true}
								onFavorite={onAddToFavorite}
								{...card}
							/>
						))
				}
			</div>
		</div>
	)
}

export default Favorites;

