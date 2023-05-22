import React, { Fragment } from 'react'
import classes from './Header.module.css'
import meal from '../../Assets/meal.jpg'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>SubMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={meal} alt="Food" />
        </div>
    </Fragment>
  )
}
