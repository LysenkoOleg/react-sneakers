import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";
import { logDOM } from "@testing-library/react";
import card from "./components/Card/Card";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6389ee854eccb986e89e9d4f.mockapi.io/items",
        );
        const data = await response.json();

        setItems(data);
      } catch (e) {
        alert(e.message);
      }
    };

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.some((d) => d.title === obj.title)) return;
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((data, index) => (
            <Card
              key={index}
              {...data}
              onClickFavourite={() => console.log(data)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
