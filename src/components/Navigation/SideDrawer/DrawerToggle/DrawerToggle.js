import React from 'react'
import './DrawerToggle.scss'
import Logo from '../../../Logo/Logo'
const drawertoggle = (props)=>{
return (
<div className="Logo" onClick={props.toggleClick}>
<Logo></Logo>
</div>
)
}

export default drawertoggle
