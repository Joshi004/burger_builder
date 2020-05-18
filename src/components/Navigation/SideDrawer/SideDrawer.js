import React from 'react';
import './SideDrawer.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import Logo from '../../Logo/Logo';
const sideDrawer = (props) => {
    let attachedClasses = props.show ? ["Sidedrawr","Open"] : ["Sidedrawr","Close"]
  return (
    <Aux>
      <Backdrop hideBackdrop={props.closeSideDrawer} show={props.show}></Backdrop>
      <div className={attachedClasses.join(" ")}>
        <div className='Logo'>
          <Logo></Logo>
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
