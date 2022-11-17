import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import axios from "axios"
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);

  React.useEffect( () => {
    async function fetchData() {
      const cartResponse = await axios.get('https://636a08f8c07d8f936d913add.mockapi.io/cart')
      const favoriteResponse = await axios.get('https://636a08f8c07d8f936d913add.mockapi.io/favorites')
      const itemsResponse = await axios.get('https://636a08f8c07d8f936d913add.mockapi.io/items')

      setCartItems(cartResponse.data)
      setFavorites(favoriteResponse.data)
      setCards(itemsResponse.data)
    }

    fetchData();
  }, []);

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://636a08f8c07d8f936d913add.mockapi.io/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post('https://636a08f8c07d8f936d913add.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://636a08f8c07d8f936d913add.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="wrapper clear">
      { cartOpened
        &&
        <Drawer cartItems={cartItems} onClickClose={() => setCartOpened(false)}  onRemove={onRemoveItem}/>
      }

      <Header onClickCart={() => setCartOpened(true)}/>

      <Routes>
        <Route path="/"
          element={
          <Home
            cards={cards}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setFavorites={setFavorites}
            onAddToFavorite={onAddToFavorite}
          />
        }
        />
        <Route path="/favorite"
          element={
          <Favorites
            favorites={favorites}
            setFavorites={setFavorites}
            onAddToFavorite={onAddToFavorite}
          />
        }
        />
      </Routes>
    </div>
  );
}

export default App;
