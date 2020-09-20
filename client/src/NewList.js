import React from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
// import FormControl from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
// import NavLink from 'react-bootstrap/NavLink';


class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newList: ''
        };
    }

    handleChange2(event) {
        this.setState({
            newList: event.target.value
        });
    };


    handleSubmit2(event) {
        event.preventDefault();
        // Pass the state
        this.props.addNewList(this.state.newList);
    }

    render() {
        return (
            <div>
                <h2>Add New List</h2>
                <Form onSubmit={(e) => this.handleSubmit2(e)}>
                    <FormGroup>
                    <FormLabel>
                        <input
                            name="newList"
                            type='text'
                            placeholder="list title"
                            value={this.state.newList}
                            onChange={e => this.handleChange2(e)}
                        />
                    </FormLabel>
                    <br/>
                    <Button variant="info" type="submit">Add</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default NewList;