import { FormatMoney } from "../../utlis/money"
import { Product } from "./Product"

export function ProductGrid({ products, loadCart }) {
  // const [quantity , setQuantity] = useState(1) this is ouside loop to make state worke we tom make inside the map 
  return ( 
       <div className="products-grid">
      {products.map((product) => {
                 {/*
                  const [quantity , setQuantity] = useState(1)
                  this broke the rule of react hooks becouse we can`t use hooks inside loops or conditionals
                  to make it work we need to create a new component for the product item and use the hook inside that component
                  or we can use a workaround by creating an object to hold the quantity state for each product
                  but the best practice is to create a new component for the product item
                  */} 
                 return (
                       // remeber when we loop inside map we need to pass a unique key to each item to help react identify each item when updating the DOM
                      <Product key={product.id} product={product} loadCart={loadCart} />
                 )
               })}
            
     
           
           </div>
  )
}