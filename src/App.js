import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer";

const sneakersData = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999 руб.",
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999 руб.",
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8 499 руб.",
    imageUrl: "/img/sneakers/3.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {sneakersData.map((data, index) => (
            <Card key={index} {...data} onClick={() => console.log(data)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
