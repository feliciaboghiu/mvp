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
                isShown: true,
            } 
    }

    handleClick(event, item) {
        
        // Find index of clicked-on item
        //let ix = this.props.lists.title.findIndex((i) => i.title === item.title);

        // Create new array
        //let newList = [...this.state.lists];
        
        // Toggle 'isDone'
        //newList[ix].isClicked = !newList[ix].isClicked;

        // Update state
        //this.setState({
            //lists: newList
        //})
    }
    
    render() {
        
        let listJsx = (
            this.props.lists.map((l) => (
                <li key={l.title}>
                    <div contenteditable="true">
                        <h3>{l.title}</h3>
                    </div>
                    <div 
                        className={ this.state.isShown ? 'display' : 'hide'}
                        onmouseOver={(e, i) => this.handleClick(e, i)}>
                        <button><Link to={'/additem/'+l.id}>ADD ITEM</Link></button>
                        {/*<button>Edit List Title</button>*/}
                        <button>Delete List</button>
                    </div>
                    
                    <ul>
                        {l.name.map((n) => 
                            <div className={ this.state.isShown ? 'underlined' : 'none'}>
                                <li key={n}>
                                    <div contenteditable="true">
                                        {n}
                                    </div>
                                    {/*<button>Edit Item</button>*/}
                                    <button className={ this.state.isShown ? 'display' : 'hide'}>
                                        Delete Item
                                    </button>
                                </li>
                            </div>)}
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