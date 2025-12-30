import axios from "axios";
import { FormatMoney } from "../../utlis/money";
import { useNavigate } from "react-router";

export function PaymentSummary({ paymentSummary, loadCart }) {
  const navigate = useNavigate(); // useNavigate give us a function name navigate to navigate to another page 
  const createOrder = async () => {
    await axios.post('/api/orders');
    await loadCart();
    navigate('/orders'); // after creating order navigate to orders page 
    // navigate is not assync . and we dont need to await  
  }
  return (
    <div className="payment-summary">
                <div className="payment-summary-title">
                  Payment Summary
                </div>
                {paymentSummary && ( // check if paymentSummary is not null or undefined before rendering if not null run the code below
                    
                  <>
                    <div className="payment-summary-row">
    
                      <div>Items ({paymentSummary.totalItems}):</div> 
                      <div className="payment-summary-money">{FormatMoney(paymentSummary.productCostCents)}</div>
                    </div>
    
                    <div className="payment-summary-row">
                      <div>Shipping &amp; handling:</div>
                      <div className="payment-summary-money">
                        {FormatMoney(paymentSummary.shippingCostCents)}
                      </div>
                    </div>
    
                    <div className="payment-summary-row subtotal-row">
                      <div>Total before tax:</div>
                      <div className="payment-summary-money">
                        {FormatMoney(paymentSummary.totalCostBeforeTaxCents)}
                      </div>
                    </div>
    
                    <div className="payment-summary-row">
                      <div>Estimated tax (10%):</div>
                      <div className="payment-summary-money">
                        {FormatMoney(paymentSummary.taxCents)}
                      </div>
                    </div>
    
                    <div className="payment-summary-row total-row">
                      <div>Order total:</div>
                      <div className="payment-summary-money"> {FormatMoney(paymentSummary.totalCostCents)} </div>
                    </div>
          <button className="place-order-button button-primary"
          onClick={createOrder}
          >
                  Place your order
                    </button>
                    </>
                   )}
    
                
            </div>
  )
}