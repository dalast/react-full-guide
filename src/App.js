import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: "Dmitrii", age: 30 },
      { name: "Max", age: 28},
      { name: "Manu", age: 29}
    ],
    otherState : 'otherStatevalue',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //  console.log('Hutton Was Clicked');
    this.setState({
      persons : [
        { name: newName, age: 30 },
        { name: "Max", age: 28},
        { name: "Manu", age: 92}
      ]
    })
  }

  nameChangedHandler = (event) => {
    //  console.log('Hutton Was Clicked');
    this.setState({
      persons : [
        { name: event.target.value, age: 30 },
        { name: "Max", age: 28},
        { name: "Manu", age: 92}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age}/>
          })}  
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
