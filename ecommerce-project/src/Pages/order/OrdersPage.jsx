import './OrdersPage.css'
import { Headers } from '../../components/Headers'
import { Link } from 'react-router'
import axios from 'axios'
import { useEffect, useState , Fragment } from 'react'
import { FormatMoney } from '../../utlis/money'
import { OrdersGrid } from './OrdersGrid'



export function OrdersPage({ cart , loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrderData = async () => {
      const response = await axios.get('/api/orders?expand=products')
          setOrders(response.data);
     
    }
    getOrderData();
    
  }, []);

  return (
    <>
      <title>Orders</title>

      <Headers cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}