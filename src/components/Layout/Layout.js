import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedeHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerOpenHandler = () => {
      console.log("Sidedrawer opendd")
    this.setState({
      showSideDrawer: true,
    });
  };

  render() {
    return (
      <Aux className='auxilery'>
        {/* <div className="sideBar">ToolBar, SideDrawer, BackDrop</div> */}
        <Toolbar showSideDrawer={this.sideDrawerOpenHandler}></Toolbar>
        <SideDrawer
          show={this.state.showSideDrawer}
          closeSideDrawer={this.sideDrawerClosedeHandler}
        ></SideDrawer>
        <main className='mainArea'> {this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
