import React from 'react'
import './Burger.scss'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props)=>{
return (
<div className="Burger">
<BurgerIngredient type="bread-top"></BurgerIngredient>
{Object.keys(props.ingredients).map((key,index)=>{
    let  thisItem=[]
    for(let i=0;i<props.ingredients[key];i++){
    thisItem.push(<BurgerIngredient key={(index+1)*(i+1)}type={key}></BurgerIngredient>)
    }
    return thisItem
})}
<BurgerIngredient type="bread-bottom"></BurgerIngredient> 
</div>

)
}

export default Burger
