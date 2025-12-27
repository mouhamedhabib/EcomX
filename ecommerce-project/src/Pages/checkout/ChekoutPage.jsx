import './checkout-header.css'
import './CheckoutPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Headers } from '../../components/Headers'
import { FormatMoney } from '../../utlis/money'
import { OrderSummary } from '../order/OrderSummary'
import { PaymentSummary } from '../order/PaymentSummary'


export function ChekoutPage({ cart , loadCard  }) {
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary , setPaymentSummary] = useState([NaN])
    useEffect(() =>{
          const fetchCheckoutData = async () => {
          let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
          setDeliveryOptions(response.data);

          response = await axios.get('/api/payment-summary');
          setPaymentSummary(response.data);
          };
          fetchCheckoutData();
  }, [cart]) // we add cart in dependancy array to reload delivery options when cart change (item added or removed)
  return (
    <div>

      <title>Checkout</title>
      <Headers cart = {cart} />
    
      <div className="checkout-page">
        <div>
          <h1 style={{ textAlign: 'center' }}>Checkout 
            <span style={{ color: 'green' }}>({`${paymentSummary.totalItems} Items`})</span>
          </h1>
          
        </div>
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCard={loadCard} />

        <PaymentSummary paymentSummary={paymentSummary} />
      </div>
    </div>
    </div>
  )
}