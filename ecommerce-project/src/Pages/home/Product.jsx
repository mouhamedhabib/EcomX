
import axios from "axios";
import { FormatMoney } from "../../utlis/money";
import { useState } from "react";

export function Product({ product, loadCart }) {

  const [quantity, setQuantity] = useState(1)
  const addTocard = async () => {
                          {/*
                            Rember get to get data from backend
                            Post to send data to backend
                            Put to update data in backend
                            Delete to delete data from backend
                            axsios methode for each type 
                            axios.get('Url')
                            axios.post('Url' , {data object})
                            axios.put('Url' , {data object})
                            axios.delete('Url')
                            */}
                         // we use post to creat new item in cart in backend
                         // to tell backend which product we want to add , we need to give axsios another value object  
                        await axios.post('api/cart-items', {
                           productId: product.id,
                          //quantity: quantity // the quantity is save in state 
                            // we can make shortCUT like bellow quantity: quantity
                           quantity
                         })
                         await loadCart(); // after adding item to cart we call loadCart to update the cart in the home page
  }
  
  const SelectQuantity = (event) => { 
                         const quantitySelected = Number(event.target.value);
                         setQuantity(quantitySelected); // this call controlled input
                         // how worket : We have value and onChange to change or update the selector Is go to setQuantity const [quantity , setQuantity] = useState(1) and update the quantity state (value={quantity}) 
                         console.log(quantitySelected)
                 }

  return (
            <div key={product.id} className="product-container">
               <div className="product-image-container">
                 <img className="product-image"
                   src={product.image} />
                     </div> 
                     {/* Product Image Container */}
     
               <div className="product-name limit-text-to-2-lines">
                {product.name}
               </div>
     
               <div className="product-rating-container">
                 <img className="product-rating-stars"
                   src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
                 <div className="product-rating-count link-primary">
                   {product.rating.count}
                 </div>
               </div>
     
               <div className="product-price">
                 {FormatMoney(product.priceCents)}
               </div>
     
                     <div className="product-quantity-container">
                       {/* we use value bellow quantity because it's a controlled component
                        when the user change the select value we update the quantity state with setQuantity
                         and the select value will be updated with the new quantity state
                         and we use onChange to listen to the change event and update the quantity state  
                         remember 90% when we onChange we need to pass event object to get the value from event.target.value
                         and we use Number() Methode to convert the string value to a number                       
                         */}
                       <select value={quantity} onChange={SelectQuantity}>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="6">6</option>
                   <option value="7">7</option>
                   <option value="8">8</option>
                   <option value="9">9</option>
                   <option value="10">10</option>
                 </select>
               </div>
     
               <div className="product-spacer"></div>
     
               <div className="added-to-cart">
                 <img src="images/icons/checkmark.png" />
                 Added
               </div>
     
                     <button className="add-to-cart-button button-primary"
                       onClick={addTocard}
                     >
                 Add to Cart
               </button>
             </div>
 )

}