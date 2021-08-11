import React from 'react';

const ExerciseMenu = (props) => {
    return (
        <div>
            <button onClick={() => props.selectExercise(1)}>Exercise 1</button>
            <button onClick={() => props.selectExercise(2)}>Exercise 2</button>
            <button onClick={() => props.selectExercise(3)}>Exercise 3</button>
        </div>
    )
}

export default ExerciseMenu;