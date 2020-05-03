import React from 'react'
import './SideDrawer.scss'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
const sideDrawer = (props)=>{
return (
<div className="Sidedrawr">
<Logo></Logo>
<nav>
    <NavigationItems></NavigationItems>
</nav>
</div>
)
}

export default sideDrawer
