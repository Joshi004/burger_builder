import React from 'react'
import './OrderSummary.scss'

const orderSummary = (props)=>{
    let getIngredients = ()=>{
        return Object.keys(props.ingredients).map((item)=>{
                return (<li className="itemLi" key={item}>
                <span className="itemName">{item} : {props.ingredients[item]}</span>
                </li>)
            })
    }
return (
<div>
    <h3>Order Summary</h3>
    <h4>With following Ingredients Price : {props.price}</h4>
    <div>
        {getIngredients()}
    </div>
    <button onClick={()=>{props.orderAction(true)}}>Purchase</button>
    <button onClick={()=>{props.orderAction(false)}}>Cancel</button>
</div>
)
}

export default orderSummary
