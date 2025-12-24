// Import routing components from react-router
import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/home/HomePage';
import { ChekoutPage } from './Pages/checkout/ChekoutPage';
import { OrdersPage } from './Pages/order/OrdersPage';
import { TrackingPage } from './Pages/TrackingPage';
import axsios from 'axios'
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [cart, setCart] = useState([]) 
   
  // useEffect(() => {
    
  //   axsios.get('/api/cart-items?expand=product')
  //      .then((response) => {
  //        setCart(response.data)
  //    })
  //  }, []) go to the pages/checkout/CheckoutPage.jsx to see why we change the code up

  useEffect(() => {
    const getAppData = async () => {
      const response = await axsios.get('/api/cart-items?expand=product')
      setCart(response.data)
    };
    getAppData();
  }, [])

  return (
    <div>
      {/* Routes container: defines all app routes */}
      <Routes>
            {/* Route for the home page */}
            {/* When the path is '/', HomePage component is rendered */}
        <Route index element={<HomePage cart={cart} />} /> 
        <Route path='/checkout' element={<ChekoutPage cart={cart} />} />
        <Route path='orders' element={<OrdersPage cart = {cart} />} />
        <Route path='/tracking/:orderId/:productId' element={<TrackingPage />} />
      </Routes>
      
     </div>
  )
}

export default App
