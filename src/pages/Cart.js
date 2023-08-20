import React from 'react'
import { useSelector } from 'react-redux';
import { CartItem } from '../components/CartItem';
import { NavLink } from 'react-router-dom';
import '../styles/Cart.css'
export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className='cart-items'>
      {
        cart.length>0?
        cart.map((item)=>
        {
          return <CartItem cartitem={item}></CartItem>
        }):
        <div className='cart-button'>
          <p>CART IS EMPTY</p>
          <NavLink to='/'>
          <button>SHOP NOW</button>
          </NavLink>
          </div>
      }
     { cart.length>0 && <button className='checkout-button'>checkout</button>}
    </div>
  )
}
