import React from 'react';


const person = (props) => {
return (
   <div> 
        <p onClick={props.click}> I'ms a persson and my name is {props.name}  {props.children} </p>
        <input
            onChange={props.change}
            value={props.name}
        />
    </div>
    )
}


export default person;