import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const JokeRetriever = (props) => {
    debugger;
    let counter = 0;

    if (props.jokes != null) {
        return (
            <Accordion>
                {props.jokes.map((joke) => {
                    counter++;
                    return (
                        <Accordion.Item eventKey={`${counter}`} >
                            <Accordion.Header>
                                {joke.setup}
                            </Accordion.Header>
                            <Accordion.Body>
                                {joke.punchline}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        )
    } else {
        return (
            <div>
                <h1>Jokes are currently unavailable, sorry!</h1>
                <h2>Please try again in a few moments.</h2>
            </div>
        )
    } 
}

export default JokeRetriever;

