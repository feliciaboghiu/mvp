import React from 'react';
import { render } from '@testing-library/react';
import { Switch, Route, Link, NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';

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
        console.log(this.state.showInput)
       event.preventDefault();
        let boolean = (this.state.showInput = !this.state.showInput);
        this.setState({showInput: boolean}) 
    }
    
    
    render() {
        let title = this.props.list.title;
        let listJsx = (
            this.props.list.name.map((l) => (
                <li onClick={(e) => this.showInput(e)} key={l}>
                    <div className={this.props.isShown ? 'dontshow' : 'show'}>
                        {l}
                    </div>
                    <div className={this.props.isShown ? 'show' : 'dontshow'}>
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
                    <Button variant="info" onClick={(e)=>this.showInput(e)}>Show Input</Button>
            
                    {/*<form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Choose one item to edit:*/}
                    <h3>{title}</h3> 
                    <ul>
                        {listJsx}
                    </ul>
                       
                    {/*</label>
                    <br />*/}
                    <button type="submit">Edit Field</button>
                    
                {/*</form>*/}

                    
                </div>
        )
    }
}

export default EditList;