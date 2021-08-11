import React from 'react';

const JokeRetriever = (props) => {
    let output = props.jokes.map((joke) => {
        return (
            <div>
                <h1>{joke.setup}</h1>
                <h1>{joke.punchline}</h1>
                <br />
            </div>
        )
    })

    return (
        <div>
            {output}
        </div>
    )
}

export default JokeRetriever;