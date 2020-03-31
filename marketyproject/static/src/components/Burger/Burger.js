import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {
    return(
        <div className={classes.Burger}> 
        <h1>Burger</h1>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;