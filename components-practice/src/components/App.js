import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import DisplayName from './DisplayName/DisplayName';
import ExerciseMenu from './ExerciseMenu/ExerciseMenu';
import AlertUser from './AlertUser/AlertUser';
import NamesList from './NamesList/NamesList';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import NewSuperheroForm from './NewSuperheroForm/NewSuperheroForm';
import JokeRetriever from './JokeRetriever/JokeRetriever';

class App extends Component{
  constructor(props){
    super(props)

    // Exercise 1
    this.state1 = {
      firstName: 'Reggie',
      lastName: 'White'
    }
    
    // Exercise 2
    this.state2 = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    }
    
    // Exercise 4
    this.state4 = {
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

  componentDidMount() {
    axios.get("https://official-joke-api.appspot.com/jokes/ten").then((response) => {
      this.jokes = response.data;
    })
  }

  updateState = (exercise) => {
    let newState = null;
    if (exercise === 1){
      newState = this.state1;
      newState.currentExercise = 1;
    } else if (exercise === 2){
      newState = this.state2;
      newState.currentExercise = 2;
    } else if (exercise === 3) {
      newState = {
        currentExercise: 3
      };
    } else if (exercise === 4) {
      newState = this.state4;
      newState.currentExercise = 4;
    } else if (exercise === 5) {
      newState = this.state4;
      newState.currentExercise = 5;
    } else if (exercise === 6) {
      newState = {
        currentExercise: 6
      };
    }

    this.setState(newState);
  }

  sayDevCodeCamp = () => {
    alert("devCodeCamp")
  }

  addHero = (hero) => {
    this.state.superheroes.push(hero);
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
    } else if (this.state.currentExercise === 4) {
      return (
        <div className="App">
          <ExerciseMenu update={this.updateState} />
          <SuperheroTable heroes={this.state.superheroes} />
        </div>
      )
    } else if (this.state.currentExercise === 5) {
      return (
        <div className="App">
          <ExerciseMenu update={this.updateState} />
          <NewSuperheroForm superheroes={this.state.superheroes} update={this.updateState} addHero={this.addHero} />
        </div>
      )
    } else if (this.state.currentExercise === 6) {
      return (
        <div className="App">
          <ExerciseMenu update={this.updateState} />
          <JokeRetriever jokes={this.jokes}/>
        </div>
      )
    } 
  }
}

export default App;
