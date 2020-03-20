import React, { Fragment } from 'react';

const person = (props) => {
return (
        <Fragment>
            <p onClick={props.click}> I'm a person and my name is {props.name}  {props.children} </p>
            <input
                onChange={props.change}
                value={props.name}
            />
        </Fragment>
    )
}


export default person;