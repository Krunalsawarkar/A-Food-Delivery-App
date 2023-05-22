import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/cart-context'

export default function HeaderCartButton(props) {

  const cartCtx = useContext(CartContext); 
  const numOfCartItems = cartCtx.items.reduce((currentNum,item)=>{
    return currentNum + item.amount; 
  },0);

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numOfCartItems}
        </span>
    </button>
  )
}
