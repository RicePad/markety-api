import React from 'react';

const person = (props) => {
return (
   <div className="Person"> 
        <p onClick={props.click}> I'm a person and my name is {props.name}  {props.children} </p>
        <input
            onChange={props.change}
            value={props.name}
        />
    </div>
    )
}


export default person;