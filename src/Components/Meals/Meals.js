import React, { Fragment } from 'react'
import MealsDescription from './MealsDescription'
import MealsAvailable from './MealsAvailable'

export default function Meals() {
  return (
    <Fragment>
        <MealsDescription />
        <MealsAvailable />
    </Fragment>
  )
}
