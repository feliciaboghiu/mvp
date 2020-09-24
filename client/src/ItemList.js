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
                    <div className="text-center">

                    <br/>
                        <h5>{l.title}</h5>

                            <div>
                            <div className="text-center">
                                <Button variant="info" onClick={() => this.setEditedListId(l.id)}><Link to={'/additem/' + l.id}><span role="img" aria-label="delete">➕</span></Link></Button>
                                <Button variant="info"><Link to={'/editlist/' + l.id}><span role="img" aria-label="edit">📝</span></Link></Button>
                                <Button variant="info" onClick={() => this.handleListDelete(l.id)}><span role="img" aria-label="delete">❎</span></Button>
                            </div>
                            </div>
                    </div>
                    <br/>
                    <div className="text-center">
                        { 
                            l.items && (

                            <ul>
                                {l.items.map((i) => (

                                <div>
                                    <li key={i.id}>
                                        {i.text}
                                        <Button variant="info"
                                        onClick={ () => this.props.deleteItem(l.id, i.id) }>
                                        <span role="img" aria-label="delete">❎</span>
                                        </Button>
                                    </li>
                                </div>))}
                            </ul>
                            )
                        }
                        </div>
                </Col>
                ))
            ) 

        return (
            <div>
                {/* <h2>Item List</h2> */}
                <Row>
                    {listJsx}
                </Row>
            </div>
        )
    }
}

export default ItemList;