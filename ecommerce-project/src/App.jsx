// Import routing components from react-router
import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage'
import { ChekoutPage } from './Pages/ChekoutPage';
import { OrdersPage } from './Pages/OrdersPage';
import { TrackingPage } from './Pages/TrackingPage';
import axsios from 'axios'
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [cart, setCart] = useState([]) 
   
  useEffect(() => {
    
    axsios.get('/api/cart-items?expand=product')
       .then((response) => {
         setCart(response.data)
     })
   }, [])

  return (
    <div>
      {/* Routes container: defines all app routes */}
      <Routes>
            {/* Route for the home page */}
            {/* When the path is '/', HomePage component is rendered */}
        <Route index element={<HomePage cart={cart} />} /> 
        <Route path='/checkout' element={<ChekoutPage cart={cart} />} />
        <Route path='orders' element={<OrdersPage />} />
        <Route path='/tracking' element={<TrackingPage />} />
      </Routes>
      
     </div>
  )
}

export default App
