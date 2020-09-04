import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';
import NewList from './NewList';
import { Switch, Route, NavLink} from "react-router-dom";
import { withRouter, Router } from "react-router";
import Error404View from './Error404View';
import DeleteItem from './DeleteItem';
import EditList from './EditList';



const TEST_ITEMS = [
  { id: 1, title: 'Albuns', name: ['The Cure - Blood Flowers', 'Spice Girls - Spice', "Backstreet Boys - Backstreet's back"]},
  { id: 2, title: 'Films', name: ['Good Will Hunting', 'The Royal Tenenbaums', "Matrix"]},

];

/*if(items.length === 1) {
  className = one;
} else if(items.length % 2 === 0) {
  className = two;
} else if(items.length % 3 === 0) {
  className = three;
} else if(items.length % 5 === 0) {
  className = five;
} else if(items.length % 7 === 0) {
  className = seven;
}*/

//const VIEW_ITEMS = [ itemlist, additem, addlist ]


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        lists: TEST_ITEMS, // [],
        newList: '',
        nextListId: 3,
        editedListId: null
      };
    }

  addNewItem = (newName, listId) => {
    // console.log('App.addListItem:', name);
    //let newName = { name: name };
    // console.log(name, id)
      // find the list
      let newLists = [...this.state.lists]
      //let newIx = newLists.findIndex((l) => l.id === listId);
      //let newList = newLists[newIx]
      //newList.name.push(newName)
      console.log(newName, listId);
      // copy it
      //let list = {id: newList.id, title: newList.title, name: [...newList.name, newName]}
      
      //console.log(list)

      //this.state.lists
      // add the new name
      this.setState({lists: newLists})
      
      console.log(this.state.lists)
      
    }
  

  addNewList = (newTitle) => {
    let newList = {id: this.state.nextListId, title: newTitle, name: []}
    this.setState({
      lists: [...this.state.lists, newList],
      nextListId: this.state.nextListId + 1
    });
    // Redirect to '/'
    this.props.history.push('/');
  }

  setEditedListId = (editedListId) =>{
    this.setState({editedListId:editedListId});
  }

  deleteItem = (listId, name) => {
    console.log(listId, name)
    let newLists = [...this.state.lists]
    let newList = newLists.find((l) => l.id === listId);
    newList.name = newList.name.filter((n) => n !== name);
    this.setState({lists: newLists})
    
  }

  deleteList = (listId) => {
    let newLists = [...this.state.lists];
    let newIx = newLists.findIndex((l) => l.id === listId);
    //let newList = newLists[newIx]
    newLists.splice(newIx, 1)
    this.setState({lists: newLists})
    console.log(newLists)
  }

  render() {
    
      return (
        <div className="container">
          <h1>NewVentory</h1>

            <button><NavLink to='/' exact activeClassName='selected'>ITEM LIST</NavLink></button>
            <button><NavLink to='/addlist' activeClassName='selected'>CREATE NEW LIST</NavLink></button>
            <button>SHOW BUTTONS</button>
            

              {/*{(this.state.view === itemList)
                ? <ItemList />
                : (this.state.view === 2)
                  ? <InsertForm addListItem={newName => this.addListItem(newName)} />
                  : (this.state.view === 3)
                    ? <NewList addNewList={newList => this.addNewList(newList)} changeView={isView => this.changeView(isView)} />
                    : ''}*/}

            <Switch>  

              <Route path='/' exact>
                <ItemList  setEditedListId={this.setEditedListId} lists={this.state.lists} deleteItem={this.deleteItem} deleteList={this.deleteList} />
              </Route>

              <Route path='/additem'> 
                <InsertForm editedListId={this.state.editedListId} newName={this.state.newName} addNewItem={this.addNewItem} id={this.state.lists.id} findIx={this.findIx} />
              </Route>

              <Route path='/addlist'>
                <NewList addNewList={title => this.addNewList(title)} />
              </Route>

              <Route path='/deleteitem'>
                <DeleteItem editedListId={this.state.editedListId} />
              </Route>

              <Route path='/editlist'>
                <EditList />
              </Route>

              <Error404View />

            </Switch>
          
        </div>
      )
  }
}

export default withRouter(App);