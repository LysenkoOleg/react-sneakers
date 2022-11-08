import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cards, setCards] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect( () => {
    fetch('https://636a08f8c07d8f936d913add.mockapi.io/items')
      .then(res => res.json())
      .then(json => setCards(json))
  }, []);

  return (
    <div className="wrapper clear">
      { cartOpened && <Drawer onClickClose={() => setCartOpened(false)} /> }
      <Header onClickCart={() => setCartOpened(true)}/>
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
              />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
