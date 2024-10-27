import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const sneakersData = [
	{ name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.', image: '/img/sneakers/1.jpg' },
	{ name: 'Мужские Кроссовки Nike Air Max 270', price: '12 999 руб.', image: '/img/sneakers/2.jpg' },
	{ name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499 руб.', image: '/img/sneakers/3.jpg' },
];

function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />
			<Header />
			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='search' />
						<input type='text' placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex'>
					{
						sneakersData.map((data) => (<Card {...data} />))
					}
				</div>
			</div>
		</div>
	);
}

export default App;
