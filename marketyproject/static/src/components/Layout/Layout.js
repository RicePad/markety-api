import React, { Fragment } from 'react';
import classes from './Layout.css';

const layout = (props) => {
   return (
   
        <Fragment>
            <div>Toolbar, Sidedrawer, Backdrop </div>
            <main className={classes.MainColor}>
                {props.children}
            </main>
        </Fragment>)
}


export default layout;