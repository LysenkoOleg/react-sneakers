import React, {useContext} from "react";
import AppContext from "../context";

const Info = ({ img, title, description }) => {
  const { setCartOpened } = useContext(AppContext)

  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
      <img className="mb-20" src={img} alt='empty-cart' />
      <h2>{title}</h2>
      <p className="opacity-6 text-center">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src='/img/arrow.svg' alt='arrow' />
        Вернуться назад
      </button>
    </div>
  )
}

export default Info;