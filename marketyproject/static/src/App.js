import React from 'react';
import Person from './Person/Person';


class App extends React.Component{
    state = {
        persons: [
            {name: 'Jonathan'},
            {name: 'Dave'},
            {name: 'Luis'},


        ]
    }
    render(){
        return(
        <div>
           <h1>This is a Reacts Componesnt</h1>
            <Person name={this.state.persons[0].name}> and I like skateboarding </Person>
            <Person name={this.state.persons[1].name}></Person>
            <Person name={this.state.persons[2].name}></Person>


        </div>)
    }
}

export default App;
