import React from 'react'
import Aux from '../../hoc/Aux'
import './Layout.scss'
import Toolbar from '../Navigation/Toolbar/Toolbar'
const layout = (props)=>{
    return (<Aux className="auxilery">
        {/* <div className="sideBar">ToolBar, SideDrawer, BackDrop</div> */}
        <Toolbar></Toolbar>
        <main className="mainArea"> 
            {props.children}
        </main>
       </Aux>
    )
}
export default layout