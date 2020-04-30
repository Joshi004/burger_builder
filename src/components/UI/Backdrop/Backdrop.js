import React from 'react'
import './Backdrop.scss'
import { checkPropTypes } from 'prop-types'

const backdrop = (props)=>{
return (
<div onClick={props.hideModal} className="Backdrop">
</div>
)
}

export default backdrop
