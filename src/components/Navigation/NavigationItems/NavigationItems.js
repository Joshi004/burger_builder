import React from 'react'
import './NavigationItems.scss'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props)=>{
return (
    <ul className="NavigationItems">
        <NavigationItem active link="/">Burger Bulder</NavigationItem>
        <NavigationItem  link="/">Checkout</NavigationItem>
    </ul>
)
}

export default navigationItems
