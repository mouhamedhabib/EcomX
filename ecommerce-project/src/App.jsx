// Import routing components from react-router
import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage'
import { ChekoutPage } from './Pages/ChekoutPage';
import { OrdersPage } from './Pages/OrdersPage';
import { TrackingPage } from './Pages/TrackingPage';

import './App.css'

function App() {


  return (
    <div>
      {/* Routes container: defines all app routes */}
      <Routes>
            {/* Route for the home page */}
            {/* When the path is '/', HomePage component is rendered */}
        <Route index element={<HomePage />} /> 
        <Route path='/checkout' element={<ChekoutPage />} />
        <Route path='orders' element={<OrdersPage />} />
        <Route path='/tracking' element={<TrackingPage />} />
      </Routes>
      
     </div>
  )
}

export default App
