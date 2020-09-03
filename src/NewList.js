import React from 'react';

class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newList: ''
        };
    }

    handleChange2 = (event) => {
        this.setState({
            newList: event.target.value
        });
    };


    handleSubmit2 = (event) => {
        event.preventDefault();
        // Pass the state
        this.props.addNewList(this.state.newList);
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit2(e)}>
                    <label>Insert New List
                        <input
                            name="newList"
                            type='text'
                            value={this.state.newList}
                            onChange={e => this.handleChange2(e)}
                        />
                    </label>
                    <button type="submit">Create List</button>
                </form>
            </div>
        )
    }
}

export default NewList;