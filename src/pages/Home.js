import React from 'react'
import "../styles/Home.css"
import { products} from '../data.js'
import { ProductItem } from '../components/ProductItem'
export const Home = () => {
  return (
    <div className='products'>
     <div className='products-item'>
      {
        products.map((product)=>
        {
            return <ProductItem  key={product.id} product={product}></ProductItem>
        })
      }
     </div>
    </div>
  )
}
