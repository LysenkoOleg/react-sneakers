import React from "react";
import axios from "axios"
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cards, setCards] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect( () => {
    axios.get('https://636a08f8c07d8f936d913add.mockapi.io/items').then(res => {
      setCards(res.data)
    })
    axios.get('https://636a08f8c07d8f936d913add.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://636a08f8c07d8f936d913add.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://636a08f8c07d8f936d913add.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      { cartOpened && <Drawer cartItems={cartItems} onClickClose={() => setCartOpened(false)}  onRemove={onRemoveItem}/> }
      <Header onClickCart={() => setCartOpened(true)}/>
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
                title={card.title}
                price={card.price}
                imageUrl={card.imageUrl}
                key={index}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={(obj, isAdded) => onAddToCart(obj, isAdded)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
