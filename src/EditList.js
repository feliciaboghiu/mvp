import React from 'react';
import { render } from '@testing-library/react';
import { Switch, Route, Link, NavLink} from "react-router-dom";

class EditList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
            
        };
    }

    handleChange = (event) => {
        this.setState({
            newName: event.target.value
        });
    };

    showInput = (event) => {
       event.preventDefault();
        let boolean= (this.state.showInput = !this.state.showInput);
        this.setState({showInput: boolean}) 
    }
    
    
    render() {
        let name = this.props.list;
        let listJsx = (
            

            this.props.lists.map((l) => (
                    <div onClick={(e) => this.showInput(e)} className={ this.props.isShown ? 'show' : 'dontshow'} key={l.title}>
                        {l.title}
                    <input
                        placeholder={l.title}
                        name={l.title}
                        type='text'
                        value={this.state.newName}
                        onChange={(e) => this.handleChange(e)}
                    >
                    </input>
                    <ul>
                        {l.name.map((n) => (
                            <li key={n}>
                                <input
                                    placeholder={n}
                                    name={n}
                                    type='text'
                                    value={this.state.newName}
                                    onChange={e => this.handleChange(e)}
                                >
                                </input>
                            </li>
                        ))}
                    </ul>
                </div>))
                
                        )
            
        return (
                <div className="itemList">
                    <h2>Edit List</h2>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Choose one item to edit:
                    <ul>
                        {listJsx}
                    </ul>
                    <p>{name}</p>    
                    </label>
                    <br />
                    <button type="submit">Edit Field</button>
                </form>

                    
                </div>
        )
    }
}

export default EditList;