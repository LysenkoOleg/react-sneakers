import React, { useEffect, useState} from 'react';
import Card from '../components/Card';
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://636a08f8c07d8f936d913add.mockapi.io/orders')
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
        setIsLoading(false)
      } catch (e) {
        alert('Ошибка при получении заказов')
      }
    })();
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="card-wrapper">
        {
          (isLoading ? [...Array(12)] : orders).map((card, index) => (
            <Card key={index} loading={isLoading} {...card}/>
          ))
        }
      </div>
    </div>
  )
}

export default Orders;

