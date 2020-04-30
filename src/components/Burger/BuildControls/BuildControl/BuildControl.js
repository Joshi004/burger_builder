import React from 'react'
import './BuildControl.scss'

const BuildControl = (props)=>{
return (
<div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button disabled={props.count == 0} onClick={()=>{props.updateCount(-1,props.type)}} className="Less">Less</button>
    <button onClick={()=>{props.updateCount(1,props.type)}} className="More">More</button>
</div>
)
}

export default BuildControl
