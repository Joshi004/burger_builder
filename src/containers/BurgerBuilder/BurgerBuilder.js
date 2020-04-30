import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
class BurgerBuilder extends Component{
    priceMap={
        meat:15,
        salad:5,
        bacon:25,
        cheese:10
    }


state = {
        ingredients:{
            meat:1,
            salad:1,
            bacon:1,
            cheese:1
    },
    price:75,
    showModal:false
}


    updateCountHandler = (change,type)=>{
        console.log("Update Count invoked")
        let oldCount=this.state.ingredients[type]
        let updatedCount=oldCount+change
        updatedCount = updatedCount < 0 ? updatedCount+1 :updatedCount
        const updatedIngredients={...this.state.ingredients}
        updatedIngredients[type]=updatedCount
        console.log("Updated ingr",updatedIngredients)
        let newPrice=this.state.price+(change*this.priceMap[type])
        this.setState({ingredients:updatedIngredients,price:newPrice})
    }
    orderHandler = ()=>{
        console.log("Order Handler Invoked")
        this.setState({showModal:true})
    }

    hideModalHandler = ()=>{
        this.setState({showModal:false}) 
    }

    orderActionHandler=(action)=>{
        if(action == true){
            alert ("Order Placed Successfully")
        }
        this.hideModalHandler()
    }

    render(){   
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                updateCount={this.updateCountHandler}
                order={this.orderHandler}
                ingredients={this.state.ingredients}
                price={this.state.price}
                ></BuildControls>
                {this.state.showModal? <Modal hideModal={this.orderActionHandler} show={this.state.showModal}>
                    <OrderSummary price={this.state.price} orderAction={this.orderActionHandler} ingredients={this.state.ingredients}></OrderSummary>
                </Modal> : null}
            </Aux>
        )
    }
}
export default BurgerBuilder