import React from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = (props) => {
  return (
    <div className='Toolbar'>
      <DrawerToggle toggleClick={props.showSideDrawer}>Menu</DrawerToggle>

      <div className='Logo'>
      </div>
      <nav className='nav DesktopOnly'>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default toolbar;
