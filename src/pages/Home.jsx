import React, { useState } from "react";
import Card from "../components/Card/Card";
import { items as itemsData } from "../items";

const Home = ({ onAddToCart, onAddToFavourite }) => {
  const [items] = useState(itemsData);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="cu-p clear"
              src="/img/btn-remove.svg"
              alt="clear"
            />
          )}
          <input
            type="text"
            placeholder="Поиск..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map((data, index) => (
            <Card
              key={index}
              {...data}
              onClickFavourite={(obj) => onAddToFavourite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
