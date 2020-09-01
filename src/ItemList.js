import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class ItemList extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                isClicked: false,
            } 
    }

    handleClick(event, item) {
        console.log(item)
        // Find index of clicked-on item
        //let ix = this.props.items.title.findIndex((i) => i.title === item.title);

        // Create new array
        //let newItems = [...this.state.items];
        
        // Toggle 'isDone'
        //newItems[ix].isClicked = !newItems[ix].isClicked;

        // Update state
        //this.setState({
            //items: newItems
        //})
    }
    
    render() {
        
        let listJsx = (
            this.props.items.map((l) => (
                <li onClick={(e, i) => this.handleClick(e, i)} key={l.title}>
                    <div contenteditable="true">
                        <h2>{l.title}</h2>
                    </div>
                    <button><Link to='/additem'>ADD ITEM</Link></button>
                    {/*<button>Edit List Title</button>*/}
                    <button>Delete List</button>
                    <ul>
                        {l.name.map((n) => 
                            <li key={n}>
                                <div contenteditable="true">
                                    {n}
                                </div>
                            {/*<button>Edit Item</button>*/}
                            <button>Delete Item</button>
                        </li>)}
                    </ul>
                </li>))
        )   

        return (
            <div className="itemList">
                <h2>Item List</h2>
                <ul>
                    
                        {listJsx}
                    
                </ul>
            </div>
        )
    }
}

export default ItemList;