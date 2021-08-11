import React from 'react';

const SuperheroTable = (props) => {
    let heroList = props.heroes.map((hero) => {
        return (
            <tr key={hero.superheroId}>
                <td>{hero.name}</td>
                <td>{hero.primaryAbility}</td>
                <td>{hero.secondaryAbility}</td>
            </tr>
        )
    })

    return (
        <table>
            <tr>
                <td>Superhero</td>
                <td>Primary Superpower</td>
                <td>Secondary Superpower</td>
            </tr>
            {heroList}
        </table>
    )
}

export default SuperheroTable;


// superheroes: [
//     {
//       superheroId: 1,
//       name: 'Batman',
//       primaryAbility: 'Wealthy',
//       secondaryAbility: 'Rich'
//     },