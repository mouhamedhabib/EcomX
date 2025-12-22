import axios from 'axios'
import {  useEffect , useState } from 'react'
import { Headers } from '../../components/Headers'
import { FormatMoney } from '../../utlis/money'

import './HomePage.css'
import { ProductGrid } from './ProductGrid'

export function HomePage({ cart }) {

  const [products, setProducts] = useState([]) // we use useState([])  to create a state variable (products) to hold the products data from the backend
  // frist value in [] name of the data and the seconde name update a function (setProducts) to update the data (products) and regenerate html 

  
  // useEffetc run code bellow when making any changes in backend 
{/* 
  useEffect (() => {
    axsios.get('/api/products') // we can http://localhost:3000 and make short cut in vite config.js
    .then((response)=>{
      setProducts(response.data) // setProducts useStade (products) to update the data (products) and regenerate html
    }) // Fetching products from the API with Axios
    // .then((data) => {
    //     console.log(data)
    //   }) FETCH API EXAMPLE without Axios (fetch API)
   
  } , [] ) // Dependancy array is empty to run only once when the component mounts */}
  // to make best practice with respnse we can make our with async await like bellow 
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    };
    getHomeData();
  }, []) // use effect run a componet after render the html page with out [] it will run infinite loop
  //2 use effect can`t be assync function directly becouse it expect a clean up function or nothing not a promise for that we creat a function inside use effect and make it assync
  // 3 react creat const [products, setProducts] = useState([]); and return products and setProducts to use it in the function
  //4 the effect is run now with a complete comopnmet like pizzle and talk with getHomeData()
  //5 now const response = await axios.get('/api/products') request talk and wait response from backend we use await 
  //6 await stop a function not UI only function 
  //7 backend response json data we use setProducts(response.data) to update the products data and regenerate html
  // 8 save data in setProducts(response.data) 
  // now to generate html we use map and key  map like cable transform data to html elements and key help react to identify each element when update the html
  // the flow methode 
  {/* 
    Component mount
   ↓
useEffect
   ↓
axios.get (await)
   ↓
response.data
   ↓
setProducts
   ↓
re-render
   ↓
Update UI 
  
  */}


  

  return (
    <div>
      <Headers cart={cart} />
      {/* we pass cart as prop to Headers component to show the number of items in the cart */}
      <title>Home</title>
  

    <div className="home-page">
        <ProductGrid products={products} />
    </div>
    </div>
  )
}

