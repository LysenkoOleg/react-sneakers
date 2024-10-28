import React from "react";
import Card from "../components/Card/Card";
// import Card from "../components/Card/Card";

const Favourites = ({ items, onAddToFavourite }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <Card
            favourited={true}
            key={index}
            {...item}
            onClickFavourite={onAddToFavourite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
