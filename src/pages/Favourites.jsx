import React, { useContext } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

const Favourites = ({ onAddToFavourite }) => {
  const { favourites } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favourites.map((item, index) => (
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
