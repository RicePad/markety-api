import React, {Fragment} from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]


const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
        <p>Total Price: $ {props.price.toFixed(2)}</p>

           { controls.map((ctrl) => {
             return (
             <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={props.ingredientAdded.bind(this, ctrl.type)}
                removed={props.ingredientRemoved.bind(this, ctrl.type)}
                disabled={props.disabled[ctrl.type]}
               />
               )
           })}
        <button 
            className={classes.OrderButton} 
            disabled={props.purchasable}
            onClick={props.ordered}

            >ORDER NOW
        </button>

        </div>

    )
}


export default buildControls;