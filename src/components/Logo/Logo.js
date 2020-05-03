import React from 'react'
import './Logo.scss';
import logoPath from '../../assets/images/logo.png'

const logo = (props)=>{
return (
<div className="imgContainer">
    <img className="imgElement" src={logoPath}></img>
</div>
)
}

export default logo
