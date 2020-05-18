import React from 'react'
import './Modal.scss'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const modal = (props)=>{
return (
<Aux>
{<Backdrop hideBackdrop={props.hideModal} show={props.show}></Backdrop>}
<div className="Modal">
    {props.children}
</div>
</Aux>
)
}

export default modal
