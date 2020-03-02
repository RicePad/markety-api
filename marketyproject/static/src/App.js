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

    switchNameHandler = (newName) => {
        this.setState({
                persons: [
                    {name: newName},
                    {name: 'Dave'},
                    {name: 'Luis'},
                ],
                otherState: 'some other value'
                
            })
            console.log(this.state)
        }
    
    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Jonathan'},
                {name: event.target.value},
                {name: 'Luis'},
            ],
            otherState: 'some other value'
        })
    }

    render(){
        return(
        <div>
           <h1>This is a Reacts Componesnt</h1>
           <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}> Switch Name</button>
            <Person 
                name={this.state.persons[0].name}> and I like skateboarding 
            </Person>
            <Person 
                click={this.switchNameHandler.bind(this, 'Max')} 
                name={this.state.persons[1].name}
                change={this.nameChangeHandler}>
            </Person>
            <Person 
                name={this.state.persons[2].name}>

            </Person>
        </div>)
    }
}

export default App;
