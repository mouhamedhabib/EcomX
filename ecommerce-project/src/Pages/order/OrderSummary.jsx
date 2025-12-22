import dayjs from "dayjs"
import { FormatMoney } from "../../utlis/money"
import { DeliveryOptions } from "./DeliveryOptions"

export function OrderSummary({cart, deliveryOptions}) {
  return (
     <div className="order-summary">
                 {deliveryOptions.length > 0 && cart.map((cartItem) => {
                   const selectedDeliveryOption = deliveryOptions
                     .find((deliveryOption) => {
                       return deliveryOption.id === cartItem.selectedDeliveryOptionId
                       // deliveryOption.id matched with cartItem.selectedDeliveryOptionId when deliveryOption.id return true (selected) and save it in selectedDeliveryOption
                     })
                   return (
                     <div key={cartItem.productId} className="cart-item-container">
                       <div className="delivery-date">
                     Delivery date:{' '}
                     {selectedDeliveryOption
                       ? dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')
                       : 'Not available'}
                   </div>
     
     
                 <div className="cart-item-details-grid">
                   <img className="product-image"
                     src={cartItem.product.image} />
     
                   <div className="cart-item-details">
                     <div className="product-name">
                       {cartItem.product.name}
                     </div>
                     <div className="product-price">
                        {FormatMoney(cartItem.product.priceCents)} 
                     </div>
                     <div className="product-quantity">
                       <span>
                         Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                       </span>
                       <span className="update-quantity-link link-primary">
                         Update
                       </span>
                       <span className="delete-quantity-link link-primary">
                         Delete
                       </span>
                     </div>
                   </div>
     
                   <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} />
                 </div>
               </div>
                   )
                 })}
               
             </div>
  )
}