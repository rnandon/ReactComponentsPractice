import React from 'react';
import './ExerciseMenu.css';

const ExerciseMenu = (props) => {
    return (
        <div class="navbar navbar-light bg-light p-3">
            <div class="nav nav-tabs">
                <button class="nav-item nav-link" onClick={() => props.update(1)}>Exercise 1</button>
                <button class="nav-item nav-link" onClick={() => props.update(2)}>Exercise 2</button>
                <button class="nav-item nav-link" onClick={() => props.update(3)}>Exercise 3</button>
                <button class="nav-item nav-link" onClick={() => props.update(4)}>Exercise 4</button>
                <button class="nav-item nav-link" onClick={() => props.update(5)}>Exercise 5</button>
                <button class="nav-item nav-link" onClick={() => props.update(6)}>Exercise 6</button>
            </div>
        </div>
    )
}

export default ExerciseMenu;