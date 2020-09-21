import React from 'react';
import Button from 'react-bootstrap/Button';

class EditList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
            title: props.list.title
        };
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({ [name]: value });   
    };

    handleSubmit(event) {
        event.preventDefault();
        let items = [];
        for (let elem of event.target.elements) {  // iterate over all form elements
            if (elem.item.startsWith('item-')) {  // if it's one of our text fields...
                items.push(elem.value);  // ... push it on the names array
            }
        }  
        this.props.saveList(this.props.list.id, this.state.title, items); // call handler passed down as a props from parent
        }


    showInput = (event) => {
        let boolean = (this.state.showInput = !this.state.showInput);
        this.setState({ showInput: boolean }) 
    }

    
    render() {
        // let list = this.props.list;
        let title = this.props.list.title;
        let listJsx = (
            this.props.list.item.map((i, ix) => (
                <li key={i}>
                    <div>
                        {i}
                    </div>

                    <div>
                        <input
                            type="text"
                            name={'item-'+ix}
                            defaultValue={i}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                </li>
            ))
        );
            
        return (

                <div className="itemList">
                    <h2>Edit List</h2> 

                    <div className={this.state.showInput ? 'show' : 'dontshow'}>
                        <label>Choose one item to edit: </label> 
                    </div>

                    <div className={this.state.showInput ? 'dontshow' : 'show'}>
                        <h3>
                            {title}
                        </h3>
                    </div>

                    <form onSubmit={(e) => this.handleSubmit(e)}>    
                        <div className={this.state.showInput ? 'show' : 'dontshow'}>
                            <h3>
                                <input
                                    name="title"
                                    type='text'
                                    value={this.state.title}
                                    onChange={(e) => this.handleTitleChange(e)}
                                >
                                </input>
                            </h3>
                        </div>
                        
                        <ul>
                            {listJsx}
                        </ul>

                        <div className={this.state.showInput ? 'show' : 'dontshow'}>
                            <Button variant="info" type="submit">Save Fields</Button>
                        </div>
                    </form>
                                           
                </div>
        )
    }
}

export default EditList;