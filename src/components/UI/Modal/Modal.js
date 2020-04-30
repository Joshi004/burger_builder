import React from 'react'
import './Modal.scss'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const modal = (props)=>{
return (
<Aux>
{props.show?<Backdrop hideModal={props.hideModal}></Backdrop>:null}
<div className="Modal">
    {props.children}
</div>
</Aux>
)
}

export default modal
