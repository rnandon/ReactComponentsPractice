import React from 'react';
import Table from 'react-bootstrap/Table'

const SuperheroTable = (props) => {
    let heroList = props.heroes.map((hero) => {
        return (
            <tr>
                <td>{hero.name}</td>
                <td>{hero.primaryAbility}</td>
                <td>{hero.secondaryAbility}</td>
            </tr>
        )
    })

    return (
        <div className="col-md-8 p-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Superhero</th>
                        <th>Primary Superpower</th>
                        <th>Secondary Superpower</th>
                    </tr>
                </thead>
                <tbody>
                    {heroList}
                </tbody>
            </Table>
        </div>
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