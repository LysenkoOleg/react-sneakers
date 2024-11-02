import React, { useState } from "react";
import Card from "../components/Card/Card";

const Home = ({
  onAddToCart,
  onAddToFavourite,
  cartItems,
  items,
  isLoading,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const renderItems = () => {
    return (
      isLoading
        ? [...Array(10)]
        : items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
          )
    ).map((data, index) => (
      <Card
        key={index}
        onClickFavourite={(obj) => onAddToFavourite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        added={cartItems.some((obj) => Number(obj?.id) === Number(data?.id))}
        loading={isLoading}
        {...data}
      />
    ));
  };

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
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
