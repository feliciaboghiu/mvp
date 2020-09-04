import React from 'react';
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap";


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
    
    setEditedListId=(id)=>{
        this.props.setEditedListId(id)
        console.log("My new ID: ",id)
    }

    handleSubmit(id, name) {
        //event.preventDefault();
        //console.log(this.props.match.path);
        //console.log("My new ID: ",id, name)
        this.props.deleteItem(id, name);
    }

    handleListDelete(id) {
        //console.log(id1, id2)
        this.props.deleteList(id)
    }

     render() {
        
        let listJsx = (
            this.props.lists.map((l) => (
                <Col sm='4' key={l.title}>
                    <div contentEditable="true">
                        <h3>{l.title}</h3>
                    </div>
                    <div 
                        className={ this.state.isShown ? 'display' : 'hide'}
                        onMouseOver={(e, i) => this.handleClick(e, i)}>
                        <button onClick={()=>this.setEditedListId(l.id)}><Link to={'/additem/'+l.id}>ADD ITEM</Link></button>
                        {/*<button>Edit List Title</button>*/}
                        <button><Link to={'/editlist/'+l.id}>EDIT LIST</Link></button>
                        <button onClick={()=>this.handleListDelete(l.id)}>DELETE LIST</button>
                    </div>
                    
                    <ul>
                        {l.name.map((n) => (
                            <div 
                                className={ this.state.isShown ? 'underlined' : 'none'}>
                                    <li key={n}>
                                        <div contentEditable="true">
                                            {n}
                                        </div>
                                        {/*<button>Edit Item</button>*/}
                                        <button onClick={(e)=>this.props.deleteItem(l.id, n)}
                                            className={ this.state.isShown ? 'display' : 'hide'}
                                        >DELETE ITEM                                        
                                        </button>
                                    </li>
                            </div>))}
                        </ul>
                    </Col>))
                    
        ) 

        return (
            <div className="itemList">
                <h2>Item List</h2>
                <Row>
                    {listJsx}
                </Row>
            </div>
        )
    }
}

export default ItemList;