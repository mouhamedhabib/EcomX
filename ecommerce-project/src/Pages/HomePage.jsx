import axsios from 'axios'
import {  useEffect , useState } from 'react'
import { Headers } from '../components/Headers'

import './HomePage.css'

export function HomePage() {

  const [products, setProducts] = useState([]) // we use useState([])  to create a state variable (products) to hold the products data from the backend
  // frist value in [] name of the data and the seconde name update a function (setProducts) to update the data (products) and regenerate html 
  const [cart , setCart] = useState([]) 
  
  // useEffetc run code bellow when making any changes in backend 
  useEffect (() => {
    axsios.get('/api/products') // we can http://localhost:3000 and make short cut in vite config.js
    .then((response)=>{
      setProducts(response.data) // setProducts useStade (products) to update the data (products) and regenerate html
    }) // Fetching products from the API with Axios
    // .then((data) => {
    //     console.log(data)
    //   }) FETCH API EXAMPLE without Axios (fetch API)
    axsios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data)
    })
  } , [] ) // Dependancy array is empty to run only once when the component mounts
  

  return (
    <div>
      <Headers cart={cart} />
      {/* we pass cart as prop to Headers component to show the number of items in the cart */}
      <title>Home</title>
  

    <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
               // we use product.id as key because it's unique for each product
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
            {(product.priceCents /100).toFixed(2)} Dt
          </div>

          <div className="product-quantity-container">
            <select>
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

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
            )
          })}
       

      
      </div>
    </div>
    </div>
  )
}

