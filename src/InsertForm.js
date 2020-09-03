import React from 'react';
import { withRouter } from 'react-router-dom';

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
    }

    
    render() {
            
        return (
            <div>
                <h2>Insert Form</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Insert new item
                        <input
                            name="newName"
                            type='text'
                            value={this.state.newName}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </label>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        )
    }
}

export default withRouter(InsertForm);