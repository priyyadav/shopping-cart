import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import'../styles/CartItem.css';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slice/CartSlice';

export const CartItem = ({cartitem}) => {
  const dispatch=useDispatch()
  const removeHandler=()=>
  {
      dispatch(remove(cartitem.id));
  }
  return (
    <div className='cart-item'>
      <img src={cartitem.image}/>
      <div className='cart-item-details'>
        <h3>{cartitem.title}</h3>
        <p>{cartitem.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        <p>${cartitem.price}</p>
        <div onClick={removeHandler}>
        <FiTrash2 />
        </div>
      </div>
    </div>
  )
}
