import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const cards = [
  {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999},
  {name: "Мужские Кроссовки Nike Air Max 270", price: 15600},
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
            cards.map((card, index) => <Card title={card.name} price={card.price}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
