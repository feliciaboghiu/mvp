import React from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
// import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';



class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTitle: ""
        };
    }

    handleChange2(event) {
        this.setState({
            newTitle: event.target.value
        });
    };

    handleSubmit2(event) {
        event.preventDefault();
        // Pass the state
        this.props.addNewList(this.state.newTitle);
        this.setState({ newTitle: '' });
    }

    render() {
        return (
            <div>
                <h2>Add New List</h2>
                <Form onSubmit={ (e) => this.handleSubmit2(e) }>
                    <FormGroup>
                    <FormLabel>
                        <input
                            name="newTitle"
                            type='text'
                            placeholder="list title"
                            value={this.state.newTitle}
                            onChange={e => this.handleChange2(e)}
                        />
                    </FormLabel>
                    <br/>
                    <Button variant="info" type="submit">Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default NewList;