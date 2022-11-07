import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const cards = [
  {title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imageUrl: 'img/sneakers/1.jpg'},
  {title: "Мужские Кроссовки Nike Air Max 270", price: 15600, imageUrl: 'img/sneakers/2.jpg'},
  {title: "Мужские Кроссовки Nike Air Max 270", price: 15600, imageUrl: 'img/sneakers/3.jpg'},
  {title: "Мужские Кроссовки Nike Air Max 270", price: 15600, imageUrl: 'img/sneakers/4.jpg'}
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>

        <div className="card-wrapper">
          {
            cards.map((card, index) =>
              <Card
                title={card.title}
                price={card.price}
                imageUrl={card.imageUrl}
                key={index}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={() => console.log('Нажали плюс')}
              />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
