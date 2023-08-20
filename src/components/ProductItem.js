import React from 'react'
import '../styles/ProductItem.css'
import { useDispatch } from 'react-redux';
import { add, remove } from '../redux/slice/CartSlice';
import { useSelector } from 'react-redux';
export const ProductItem = ({product}) => {
    
    const cart = useSelector((state) => state.cart);
    const dispatch=useDispatch()
    const removeHandler=()=>
    {
        dispatch(remove(product.id));
    }
    const addHandler=()=>
    {
        dispatch(add(product));

    }
  return (
    <div className='item'>
        <h4>{product.title}</h4>
        <img src={product.image}></img>
        <div className='price-box'>
            <p> ${product.price}</p>
            {
           cart.some((p) => p.id == product.id) ?
           <button onClick={removeHandler}>REMOVE ITEM</button>:
           <button onClick={addHandler}>ADD TO CART</button>
            }
            
        </div>
    </div>
  )
}
