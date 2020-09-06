import React from 'react';
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
        let {name, value} = event.target;
        this.setState({ [name]: value });
        //console.log(this.state.title)
    };

    handleTitleSubmit(title, id) {
        this.props.editTitle(title, id);
    }

    handleNameSubmit(name, id) {
        this.props.editName(name, id);
    }


    showInput = (event) => {
        let boolean = (this.state.showInput = !this.state.showInput);
        this.setState({showInput: boolean}) 
    }
    
    
    render() {
        let list = this.props.list;
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
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.handleChange(e)}
                        >
                        </input>
                        <Button onClick={(n, i) => this.handleNameSubmit(n, list.id)} variant="info" type="submit">Edit Field</Button>
                    </div>
                </li>
            ))
        );
            
        return (

                <div className="itemList">
                    <h2>Edit List</h2> 
                    <Button variant="info" onClick={(e)=>this.showInput(e)}>Show Input Fields</Button>
                    <br />
                    <div className={this.state.showInput ? 'show' : 'dontshow'}>
                        <label>Choose one item to edit: </label> 
                    </div>
                    <div className={this.state.showInput ? 'dontshow' : 'show'}>
                        <h3>
                            {title}
                        </h3>
                    </div>
                        
                        <div className={this.state.showInput ? 'show' : 'dontshow'}>
                            <h3>
                                <input
                                    placeholder={title}
                                    name="title"
                                    type='text'
                                    value={this.state.title}
                                    onChange={(e) => this.handleChange(e)}
                                >
                                </input>
                                <Button onClick={(t, i) => this.handleTitleSubmit(t, list.id)} variant="info" type="submit">Edit Field</Button>
                            </h3>
                        </div>
                        <ul>
                            {listJsx}
                        </ul>
                       
                                           
                </div>
        )
    }
}

export default EditList;