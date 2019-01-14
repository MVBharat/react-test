import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'kedari', age: 29},
      {id: 2,name: 'ram', age: 27},
      {id: 3,name: 'bharat', age: 25}
    ],

    other: 'some other thing',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id 
    })
    const person = {
      ...this.state.persons[personIndex] 
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons }) 
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doShow = this.state.showPersons;
    this.setState({showPersons: !doShow});
  }


  render() {
    let persons = null;

    if(this.state.showPersons){

      persons = <Persons
                  persons = {this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangedHandler}
                />;
                
    }
    return (
        <div className={classes.App}>
           <Cockpit
            addTitle = {this.props.title}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonHandler}
           />
            {persons}              
        </div>
    );
  }
}

export default App;
