import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';


class InsertForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: ''
        };
    }

    handleChange(event) {
        this.setState({
            newItem: event.target.value
        });
    };

    handleSubmit(event) {
        // Pass the state
        event.preventDefault();
        
        // console.log(this.props.match.path);

        this.props.addNewItem(this.state.newItem, this.props.editedListId);
        // redirect to My lists page
        this.props.history.push('/mylists');
    }

    
    render() {
            
        return (
            <div className="text-center">
            <br/>
            <br/>
                <h5>Add a new item to your list:</h5>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormGroup>
                        <FormLabel>
                            <FormControl>
                                <input
                                name="newItem"
                                type='text'
                                value={this.state.newItem}
                                onChange={(e) => this.handleChange(e)}
                            />
                            <br/>
                            </FormControl>
                        </FormLabel>
                        <br/>
                        <br/>
                    <Button variant="info" type="submit"><span role="img" aria-label="done">✅</span></Button>
                    
                    <Button variant="info" type="submit"><Link to="/mylists"><span role="img" aria-label="back">🔙</span></Link></Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default withRouter(InsertForm);