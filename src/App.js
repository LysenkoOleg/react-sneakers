import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get("https://6389ee854eccb986e89e9d4f.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://6389ee854eccb986e89e9d4f.mockapi.io/favourites")
      .then((res) => {
        setFavourites(res.data);
      });
  }, []);

  const onAddToCart = async (obj) => {
    if (cartItems.some((d) => d.id === obj.id)) return;
    const { data } = await axios.post(
      "https://6389ee854eccb986e89e9d4f.mockapi.io/cart",
      obj,
    );
    setCartItems((prev) => [...prev, data]);
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
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
              onAddToCart={onAddToCart}
              onAddToFavourite={onAddToFavourite}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <Favourites
              items={favourites}
              onAddToFavourite={onAddToFavourite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
