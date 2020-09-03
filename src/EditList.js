import React from 'react';
import ItemList from './ItemList';
import { render } from '@testing-library/react';
import InsertForm from './InsertForm';
import NewList from './NewList';
import { Switch, Route, Link, NavLink} from "react-router-dom";

const TEST_ITEMS = [
    { id: 1, title: 'Albuns', name: ['The Cure - Blood Flowers', 'Spice Girls - Spice', "Backstreet Boys - Backstreet's back"]},
    { id: 2, title: 'Films', name: ['Good Will Hunting', 'The Royal Tenenbaums', "Matrix"]},
  ];

class EditList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: TEST_ITEMS, //[]
            newList: '',
            nextListId: 3,
            id: ''
    
        }
    }

render() {
    
    return(
        <div>

            <button><Link to='/' exact activeClassName='selected'>ITEM LIST</Link></button>
            <button><Link to='/addlist' activeClassName='selected'>CREATE NEW LIST</Link></button>

            <Switch>  

                <Route path='/' exact>
                    <ItemList lists={this.state.lists} sendId={(id) => this.sendId(id)} />
                </Route>

                <Route path='/additem'> 
                    <InsertForm addNewItem={newName => this.addNewItem(newName)} id={this.state.id} />
                </Route>

                <Route path='/addlist'>
                    <NewList addNewList={title => this.addNewList(title)}/>
                </Route>

            </Switch>
        </div>
    )
}

}

export default EditList;