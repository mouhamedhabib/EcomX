import dayjs from "dayjs"
import { FormatMoney } from "../../utlis/money"
import axios from "axios"

export function DeliveryOptions({ deliveryOptions, cartItem , loadCard }) {
  const updateDeliveryOption = async () => { 
    await axios.put(`/api/cart-items/${cartItem.id}`, {
      deliveryOptionId: cartItem.id
    });
    await loadCard();
  }
  return (
    <div className="delivery-options"
    onClick={updateDeliveryOption}
    >
                         <div className="delivery-options-title">
                           Choose a delivery option:
                               </div>
                               {deliveryOptions.map((deliveryOption) => {
         
                                 let priceString = 'FREE Shipping'
                                 if (deliveryOption.priceCents > 0) {
                                    priceString = `${FormatMoney(deliveryOption.priceCents)}- Shipping`
                                 }
                                 return (
                                 <div  key={deliveryOption.id} className="delivery-option">
                                     <input type="radio"
                                       checked={deliveryOption.id === cartItem.selectedDeliveryOptionId}
                                       onChange={() => {}}
                                       className="delivery-option-input"
                                       name= {`delivery-option-1-${cartItem.productID}`} />
                                     <div>
                                       <div className="delivery-option-date">
                                         {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                       </div>
                                       <div className="delivery-option-price">
                                        {priceString}
                                       </div>
                                     </div>
                                   </div>
                                 )
                               })}
                      
                       </div>
  )
}