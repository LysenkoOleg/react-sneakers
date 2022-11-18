import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import axios from "axios"
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import AppContext from './context';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  React.useEffect(() => {
    (async () => {
     try {
       const [cartResponse, favoriteResponse, itemsResponse] = await Promise.all([
         axios.get('https://636a08f8c07d8f936d913add.mockapi.io/cart'),
         axios.get('https://636a08f8c07d8f936d913add.mockapi.io/favorites'),
         axios.get('https://636a08f8c07d8f936d913add.mockapi.io/items')
       ])

       setIsLoading(false)
       setCartItems(cartResponse.data)
       setFavorites(favoriteResponse.data)
       setCards(itemsResponse.data)
     } catch (e) {
       alert('Ошибка при запросе данных')
       console.error(e)
     }
    })();
  }, []);

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://636a08f8c07d8f936d913add.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const {data} = await axios.post('https://636a08f8c07d8f936d913add.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (e) {
      alert('Не удалось добавить в избранное')
      console.error(e)
    }
  }

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://636a08f8c07d8f936d913add.mockapi.io/cart/${findItem.id}`)
      } else {
        setCartItems(prev => [...prev, obj])
        await axios.post('https://636a08f8c07d8f936d913add.mockapi.io/cart', obj)
      }
    } catch (e) {
      alert('Ошибка при добавлении в корзину')
      console.error(e)
    }
  }


  const onRemoveItem = async (id) => {
    try {
      axios.delete(`https://636a08f8c07d8f936d913add.mockapi.io/cart/${id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (e) {
      alert('Ошибка при удалении из корзины')
      console.error(e)
    }
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{cards, cartItems, favorites, isItemAdded, setCartOpened, setCartItems, onAddToFavorite, onAddToCart}}>
      <div className="wrapper clear">
        <Drawer
          cartItems={cartItems}
          onClickClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

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
                     onAddToCart={onAddToCart}
                     isLoading={isLoading}
                   />
                 }
          />
          <Route path="/favorite"
                 element={
                   <Favorites
                     setFavorites={setFavorites}
                     onAddToFavorite={onAddToFavorite}
                   />
                 }
          />
          <Route path="/orders"
                 element={
                   <Orders/>
                 }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
