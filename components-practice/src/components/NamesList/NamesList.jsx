import React from 'react';

const NamesList = (props) => {
    let namesList = props.names.map((name) => {
        return <li>{name}</li>
    })

    return namesList
}

export default NamesList;

