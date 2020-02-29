import React from 'react';
import Person from './Person/Person';



class Name extends React.Component{
    render(){
        return(
        <div>
           <h1>This is a React Component</h1>
            <Person />
            <Person />

        </div>)
    }
}

export default Name;
