import React from 'react'
import "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
export const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    console.log('cart',cart);
  return (
    <header>
        <div className='main-header'>
        <div className='flex'>
            <NavLink to="/">
        <div className='header-logo'>
            <img  src='../assets/logo.png'/>
        </div>
        </NavLink>
        <div className='cart'>
        <NavLink to="/">
            <h6>Home</h6>
            </NavLink>
            <NavLink to="/cart">
            <img src='../assets/cart.png'></img>
           { cart.length>0?cart.length:0}
           </NavLink>
        </div>
        </div>
        </div>
    </header>
  )
}
