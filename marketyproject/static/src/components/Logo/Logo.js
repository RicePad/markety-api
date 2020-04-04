import React from 'react';
// import burgerLogo from '../../assets/images/original.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return(
        <div className={classes.Logo} >
            <img src={''} alt="myBurger" /> 
        </div>
    )
}


export default logo;