import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToogle/DrawerToogle';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle
                clicked={props.drawerToggleClicked}
            />
            <Logo height="80%" />
            <nav className={classes.DekstopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar