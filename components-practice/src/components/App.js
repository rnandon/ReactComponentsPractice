import React, {Component} from 'react';
import './App.css';
import DisplayName from './DisplayName/DisplayName';
import ExerciseMenu from './ExerciseMenu/ExerciseMenu';
import AlertUser from './AlertUser/AlertUser';
import NamesList from './NamesList/NamesList';
import SuperheroTable from './SuperheroTable/SuperheroTable';

class App extends Component{
  constructor(props){
    super(props)

    // Exercise 1
    this.state1 = {
      currentExercise: 1,
      firstName: 'Reggie',
      lastName: 'White'
    }
    
    // Exercise 2
    this.state2 = {
      currentExercise: 2,
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    }
    
    // Exercise 4
    this.state4 = {
      currentExercise: 4,
      superheroes: [
        {
          superheroId: 1,
          name: 'Batman',
          primaryAbility: 'Wealthy',
          secondaryAbility: 'Rich'
        },
        {
          superheroId: 2,
          name: 'Superman',
          primaryAbility: 'Super strength',
          secondaryAbility: 'Fly'
        },
        {
          superheroId: 3,
          name: 'Spiderman',
          primaryAbility: 'Spider senses',
          secondaryAbility: 'Shoots web'
        }
      ]
    }

    this.state = {
      currentExercise: 1
    }
  }

  updateState = (exercise) => {
    let newState = null;
    if (exercise === 1){
      newState = this.state1;
    } else if (exercise === 2){
      newState = this.state2;
    } else if (exercise === 4) {
      newState = this.state4;
    } else {
      newState = {
        currentExercise: 3
      }
    }

    this.setState(newState);
  }

  sayDevCodeCamp = () => {
    alert("devCodeCamp")
  }

  refreshPage = () => {
    window.location.reload(false);
  }

  render() {
    if (this.state.currentExercise===1){
      return (
        <div className="App">
          <ExerciseMenu update={this.updateState} />
          <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
        </div>
      )
    } else if (this.state.currentExercise === 2) {
      return (
        <div className="App">
          <ExerciseMenu update={this.updateState} />
          <NamesList names={this.state.names} />
        </div>
      )
    } else if (this.state.currentExercise === 3) {
      return (
        <div className="App">
          <ExerciseMenu update={this.updateState} />
          <AlertUser popup={this.sayDevCodeCamp} />
        </div>
      )
    } else {
      return (
        <div className="App">
          <ExerciseMenu update={this.updateState} />
          <SuperheroTable heroes={this.state.superheroes} />
        </div>
      )
    } 
  }
}

export default App;
