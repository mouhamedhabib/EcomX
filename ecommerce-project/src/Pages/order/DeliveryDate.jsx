import dayjs from "dayjs"

export function DeliveryDate({cartItem , deliveryOptions}) {
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
     
     
                 <CartItemsDetails cartItem={cartItem} deliveryOptions={deliveryOptions} />
               </div>
  )
} 