import React from 'react';
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

class ItemList extends React.Component {
    
    setEditedListId(id) {
        this.props.setEditedListId(id)
        // console.log("My new ID: ",id)
    }

    handleSubmit(list_id, item_id) {
        this.props.deleteItem(list_id, item_id);
    }

    handleListDelete(list_id) {
        this.props.deleteList(list_id);
    }

     render() {
        let listJsx = (
            this.props.lists.map((l) => (

                <Col sm='4' key={l.title}>
                    <div className="background">
                        <h3>{l.title}</h3>

                            <div>
                            <div className="white">
                                <Button variant="info" onClick={() => this.setEditedListId(l.id)}><Link to={'/additem/' + l.id}>Add Item</Link></Button>
                                <Button variant="info"><Link to={'/editlist/' + l.id}>Edit</Link></Button>
                                <Button variant="info" onClick={() => this.handleListDelete(l.id)}>Delete</Button>
                            </div>
                            </div>
                    </div>
                        { 
                            l.items && (

                            <ul>
                                {l.items.map((i) => (

                                <div className="left">
                                    <li key={i.id}>
                                        {i.text}
                                        <Button className="btn-sm"
                                        variant="outline-info"
                                        onClick={ () => this.props.deleteItem(l.id, i.id) }>
                                        Delete
                                        </Button>
                                    </li>
                                </div>))}
                            </ul>
                            )
                        }
                </Col>
                ))
            ) 

        return (
            <div>
                <h2>Item List</h2>
                <Row>
                    {listJsx}
                </Row>
            </div>
        )
    }
}

export default ItemList;