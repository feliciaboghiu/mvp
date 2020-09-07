import React from 'react';
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

class ItemList extends React.Component {
    
    setEditedListId=(id)=>{
        this.props.setEditedListId(id)
        console.log("My new ID: ",id)
    }

    handleSubmit(id, name) {
        this.props.deleteItem(id, name);
    }

    handleListDelete(id) {
        this.props.deleteList(id)
    }

     render() {
        
        let listJsx = (
            this.props.lists.map((l) => (
                
                <Col sm='4' key={l.title}>
                    <div className="background">
                        <h3>{l.title}</h3>
                        <div
                            className={this.props.isShown ? 'display' : 'hide'}
                        >
                            <div className="white">
                                <Button variant="info" onClick={() => this.setEditedListId(l.id)}><Link to={'/additem/' + l.id}>Add Item</Link></Button>
                                <Button variant="info"><Link to={'/editlist/' + l.id}>Edit List</Link></Button>
                                <Button variant="info" onClick={() => this.handleListDelete(l.id)}>Delete List</Button>
                            </div>
                        </div>

                        <ul>
                            {l.name.map((n) => (
                                <div
                                    className={this.props.isShown ? 'underlined' : 'none'}>
                                    <li key={n}>
                                        {n}
                                        <Button variant="outline-info" onClick={(e) => this.props.deleteItem(l.id, n)}
                                                className={this.props.isShown ? 'display' : 'hide'}
                                        >Delete Item
                                        </Button>
                                    </li>
                                </div>))}
                        </ul>
                        </div>
                    </Col>
                    ))
                    
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