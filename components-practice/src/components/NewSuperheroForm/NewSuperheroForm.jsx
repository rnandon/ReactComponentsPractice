import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'


class NewSuperheroForm extends Component{
    constructor(props){
      super(props);
      this.props = props;
      this.state = {
          superheroId: props.superheroes.length,
          name: "",
          primaryAbility: "",
          secondaryAbility: ""
      };
    }

    getNextId = () => {
        this.setState({superheroId: this.props.superheroes.length});
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //this.getNextId()
        this.props.addHero(this.state);
        this.props.update(4)
    }

    render() {
        return (
            <div className="col-md-6 p-5">
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="primaryAbility">
                        <Form.Label>Primary Superpower:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="secondaryAbility">
                        <Form.Label>Secondary Superpower:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form>
            </div>
            // <form onSubmit={this.handleSubmit}>
            //     <h1>Create a New Superhero!</h1>
            //     <label>
            //         Name:
            //         <input name="name" value={this.state.name} onChange={this.handleChange} />
            //     </label>
            //     <br />
            //     <label>
            //         Primary Superpower:
            //         <input name="primaryAbility" value={this.state.primaryAbility} onChange={this.handleChange} />
            //     </label>
            //     <br />
            //     <label>
            //         Secondary Superpower:
            //         <input name="secondaryAbility" value={this.state.secondaryAbility} onChange={this.handleChange} />
            //     </label>
            //     <input type="submit" value="Submit" />
            // </form>
        )
    }
}

export default NewSuperheroForm;


// superheroes: [
//     {
//       superheroId: 1,
//       name: 'Batman',
//       primaryAbility: 'Wealthy',
//       secondaryAbility: 'Rich'
//     },