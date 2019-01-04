import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'kedari', age: 29},
      {id: 2,name: 'ram', age: 27},
      {id: 3,name: 'bharat', age: 25}
    ],

    other: 'some other thing',
    showPerson: true
  }

  changeNameHandler = () => {
   this.setState(
   {
    persons: [
      {name: 'Kedari mane', age: 29},
      {name: 'Ram mane', age: 27},
      {name: 'Bharat mane', age: 25}
    ]
   }) 
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


  toggleButton = () => {
    const doShow = this.state.showPerson;
    this.setState({showPerson: !doShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pinter',
      marginBottom: '10px',

    };

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }

    let persons = null;

    if(this.state.showPerson){

      persons = (
            <div> 
              {this.state.persons.map((person, index) => {
                return <Person
                  click={() => this.deletePersonHandler(index) }
                 name = {person.name} 
                 age= {person.age}
                 key = {person.id} 
                 changed={(event) => this.nameChangedHandler} />
              })}
            </div>
        );
      style.backgroundColor= 'red'
    }
    return (
        <div className={classes.App}>
          <p className={assignedClasses.join(' ')}> It's working perfect </p>
          <button onClick = {this.toggleButton}
          style={style}
          > Toggle Persons </button>
            {persons} 
             
        </div>
    );
  }
}

export default App;
