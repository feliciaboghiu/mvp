import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import NavLink from 'react-bootstrap/NavLink';


class InsertForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            newName: event.target.value
        });
    };


handleSubmit(event) {
        // Pass the state
        event.preventDefault();
        
        //console.log(this.props.match.path);
      
        this.props.addNewItem(this.state.newName, this.props.editedListId);
        // redirect to My lists page
        this.props.history.push('/mylists');
    }

    
    render() {
            
        return (
            <div>
                <h2>Add items</h2>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormGroup>
                        <FormLabel>
                            <FormControl>
                                <input
                                name="newName"
                                type='text'
                                value={this.state.newName}
                                onChange={(e) => this.handleChange(e)}
                            />
                            <br/>
                            </FormControl>
                        </FormLabel>
                        <br/>
                    <Button variant="info" type="submit">Add</Button>
                    {/* <button onClick={(e) => this.props.history.push('/mylists')} type="button">Cancel</button> */}
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default withRouter(InsertForm);