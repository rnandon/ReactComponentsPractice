import React from 'react';

const ExerciseMenu = (props) => {
    return (
        <div>
            <button onClick={() => props.update(1)}>Exercise 1</button>
            <button onClick={() => props.update(2)}>Exercise 2</button>
            <button onClick={() => props.update(3)}>Exercise 3</button>
            <button onClick={() => props.update(4)}>Exercise 4</button>
            <button onClick={() => props.update(5)}>Exercise 5</button>
            <button onClick={() => props.update(6)}>Exercise 6</button>
        </div>
    )
}

export default ExerciseMenu;