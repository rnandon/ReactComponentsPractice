import logo from './logo.svg';
import './App.css';
import ExerciseMenu from './ExerciseMenu/ExerciseMenu';

class App {
  constructor(props){
    super(props)

    // Exercise 1
    state1 = {
      firstName: 'Reggie',
      lastName: 'White'
    }
    
    // Exercise 2
    state2 = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    }
    
    // Exercise 3
    state3 = {
      superheroes = [
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

  updateState = () => {
    let exercise = this.state.currentExercise;
    let newState = null;
    if (exercise === 1){
      newState = this.state1;
    } else if (exercise === 2){
      newState = this.state2;
    } else {
      newState = this.state3;
    }

    this.setState(newState);
  }

  selectExercise = (number) => {
    this.setState({
      currentExercise: number
    })
    this.updateState()
  }

  render() {
    return (
      <div className="App">
        <ExerciseMenu selectExercise={this.selectExercise} />
      </div>
    );
  }
}

export default App;
