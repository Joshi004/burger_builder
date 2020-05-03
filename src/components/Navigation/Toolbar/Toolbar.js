import React from 'react'
import './Toolbar.scss'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props)=>{
return (
<div className="Toolbar">
<div>Menu</div>
<Logo></Logo>
<nav className="nav">
    <NavigationItems></NavigationItems>
</nav>
</div>

)
}

export default toolbar
