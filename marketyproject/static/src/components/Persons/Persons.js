import React from 'react';
import Person from './Person/Person';


const persons = (props) => props.persons.map( (person, index)  => {
    return <Person
            click={props.clicked.bind(this, index)}
            change={props.changed.bind(this, event, person.id)}
            key={person.id}
            name={person.name}
    />
});



export default persons;