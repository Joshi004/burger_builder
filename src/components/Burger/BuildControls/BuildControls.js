import React from 'react'
import './BuildControls.scss'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props)=>{
let controls = [
    {label:"Bacon",type:"bacon", count:props.ingredients.bacon},
    {label:"Cheese",type:"cheese", count:props.ingredients.cheese},
    {label:"Meat",type:"meat", count:props.ingredients.meat},
    {label:"Salad",type:"salad", count:props.ingredients.salad}
]
return(
    <div className="BuildControls">
    <div>Burger Cost : {props.price}</div>
    {controls.map((ctrl)=>{
        return(<BuildControl updateCount={props.updateCount} count={ctrl.count} type={ctrl.type} key={ctrl.label} label={ctrl.label}></BuildControl>)
    })}
    <button disabled={props.price <= 20} onClick={props.order} className="OrderButton">Order Now</button>
    </div>
)
}


export default BuildControls
