import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

   class App extends Component {
     state = {
     persons: [
      {id: 'nam1', name:'michelle', age:30},
      {id: 'vera1', name:'jessica', age:23},
      {id: 'doo1', name:'yima', age:32}
    ],
    otherstate:'some states',
    showPersons:false
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]}
      person.name = event.target.value;
      const persons = 
        [...this.state.persons];
        persons[personIndex] = person;
      this.setState({persons:persons});
             }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});

  }
  togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
  }
  render () {
const style = {
backgroundColor:'black',
font:'inherit',
color:'green',
padding:'8px',
border:'1px solid blue',
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name = {person.name} age = {person.age}
           key = {person.id} 
           changed = {(event) => this.nameChangedHandler(event, person.id)}/>
          })
          }
        </div> 
      )
      style.backgroundColor='red';
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
    classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
      }
   
  return (
    <div className="App">
     <h1>Hi, I am a React App to check them</h1>
     <p className = {classes.join(' ')}>this is realy working</p>
     <button
     style={style}
    onClick = {this.togglePersonsHandler}>Toggle Persons</button>
    {persons}
    </div>
  );

}
   }

export default App;
