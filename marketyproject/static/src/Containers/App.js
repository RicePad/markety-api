import React from './node_modules/react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends React.Component{
    state = {
        persons: [
            {id:'1' ,name: 'Jonathan'},
            {id:'2' ,name: 'Dave'},
            {id:'3' ,name: 'Luis'},
        ],
        showPersons: false

    }

    componentDidMount(){}

    shouldComponentUpdate(){}

    componentWillUnmount(){}

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
    
    nameChangeHandler = (event, id) => {
        // get person index and if id matches return index
        const personIndex = this.state.persons.findIndex(p => {
            return p.id == id;
        })
        
        //get the person with personIndex and recreate the object to avoid mutation
        const person = {
            ...this.state.persons[personIndex]
        }
        
        //after fecthing the index, update the person's name 
        person.name = event.target.value

        // since the state is changes create a new array 
        const persons = [...this.state.persons]
        persons[personIndex] = person
        
        this.setState({
            persons: persons
        })



    }

    togglePersonHandler = () => {
       const doesShow = this.state.showPersons //current state is false
       this.setState({
           showPersons: !doesShow
       })

    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice()
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({
            persons: persons
        })
        
    }

    render(){
        let persons = null

        if(this.state.showPersons){
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler}
                    />
                 </div>
            )
        }
        return(
        <div>
           <Cockpit
                title = {this.props.appTitle}
                clicked={this.togglePersonHandler}
           />
           {persons}
        </div>)
    }
}

export default App;
