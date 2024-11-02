import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { items as itemsData } from "./items";
import AppContext from "./context";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://6389ee854eccb986e89e9d4f.mockapi.io/cart")
        .then((res) => {
          setCartItems(res.data);
        });
      axios
        .get("https://6389ee854eccb986e89e9d4f.mockapi.io/favourites")
        .then((res) => {
          setFavourites(res.data);
          setItems(itemsData);
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
        await axios.delete(
          `https://6389ee854eccb986e89e9d4f.mockapi.io/cart/${obj.id}`,
        );
      } else {
        await axios.post(
          "https://6389ee854eccb986e89e9d4f.mockapi.io/cart",
          obj,
        );
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => favObj.id === obj.id)) {
        await axios.delete(
          `https://6389ee854eccb986e89e9d4f.mockapi.io/favourites/${obj.id}`,
        );
      } else {
        const { data } = await axios.post(
          "https://6389ee854eccb986e89e9d4f.mockapi.io/favourites",
          obj,
        );
        setFavourites((prev) => [...prev, data]);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6389ee854eccb986e89e9d4f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{ items, cartItems, favourites, setCartOpened }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onRemove={onRemoveItem}
            onCloseCart={() => setCartOpened(false)}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                onAddToCart={onAddToCart}
                onAddToFavourite={onAddToFavourite}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favourites"
            element={<Favourites onAddToFavourite={onAddToFavourite} />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
