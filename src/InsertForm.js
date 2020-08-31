import React from 'react';

class InsertForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: ''
        };
    }

    /*handleChange = (event) => {
        this.setState({
            newName: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        // Pass the state
        this.props.addListItem(this.state.newName);
    }*/

    
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
                            onChange={e => this.handleChange(e)}
                        />
                    </label>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        )
    }
}

export default InsertForm;