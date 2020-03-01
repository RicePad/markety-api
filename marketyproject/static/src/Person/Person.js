import React from 'react';


const person = (props) => {
return <p>I'm a person and my name is {props.name}  {props.children}</p>
}


export default person;