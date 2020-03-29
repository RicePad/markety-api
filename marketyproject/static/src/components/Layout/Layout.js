import React, { Fragment } from 'react';
import classes from './Layout.module.css';

const layout = (props) => {
   return (
   
        <Fragment>
            <div>Toolbar, Sidedrawer, Backdropsss </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>)
}


export default layout;