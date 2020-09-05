import React from 'react';
import { render } from '@testing-library/react';
import { Switch, Route, Link, NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';

class EditList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: true,
            newName: ''
        };
    }
    
    handleChange = (event) => {

        this.setState({
            newName: event.target.value
        });
        console.log(this.state.newName)
    };

    showInput = (event) => {
        let boolean = (this.state.showInput = !this.state.showInput);
        this.setState({showInput: boolean}) 
    }
    
    
    render() {
        let title = this.props.list.title;
        let listJsx = (
            this.props.list.name.map((l) => (
                <li key={l}>
                    <div className={this.state.showInput ? 'dontshow' : 'show'}>
                        {l}
                    </div>
                    <div className={this.state.showInput ? 'show' : 'dontshow'}>
                        <input
                            placeholder={l}
                            name={l}
                            type='text'
                            value={this.state.newName}
                            onChange={(e) => this.handleChange(e)}
                        >
                        </input>
                    </div>
                </li>
            ))
        );
            
        return (

                <div className="itemList">
                    <h2>Edit List</h2> 
                    <Button variant="info" onClick={(e)=>this.showInput(e)}>Show Input Fields</Button>
                    {/*<form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Choose one item to edit:*/}
                    <div className={this.state.showInput ? 'dontshow' : 'show'}>
                        <h3>
                            {title}
                        </h3>
                    </div>
                    <div className={this.state.showInput ? 'show' : 'dontshow'}>
                        <h3>
                            <input
                                placeholder={title}
                                name={title}
                                type='text'
                                value={this.state.newName}
                                onChange={(e) => this.handleChange(e)}
                            >
                            </input>
                        </h3>
                    </div>
                    <ul>
                        {listJsx}
                    </ul>
                       
                    {/*</label>
                    <br />*/}
                    <Button variant="info" type="submit">Edit Field</Button>
                    
                {/*</form>*/}

                    
                </div>
        )
    }
}

export default EditList;