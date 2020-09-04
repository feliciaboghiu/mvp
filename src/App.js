import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';
import NewList from './NewList';
import { Switch, Route, NavLink} from "react-router-dom";
import { withRouter, Router } from "react-router";
import Error404View from './Error404View';
import EditList from './EditList';



const TEST_ITEMS = [
  { id: 1, title: 'Albuns', name: ['The Cure - Blood Flowers', 'Spice Girls - Spice', "Backstreet Boys - Backstreet's back"]},
  { id: 2, title: 'Films', name: ['Good Will Hunting', 'The Royal Tenenbaums', "Matrix"]},

];

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        lists: TEST_ITEMS, // [],
        newList: '',
        nextListId: 3,
        editedListId: null,
        list: null,
        isShown: false
      };
    }

  addNewItem = (newName, listId) => {
    // copy lists
    let newLists = [...this.state.lists]
    // find the index of the list using listId
    let newIx = newLists.findIndex((l) => l.id === listId);
    // get that specific list using the index
    let newList = newLists[newIx]
    // add newName to that list  
    newList.name.push(newName)
    // update state replacing lists with the specific list
    this.setState({lists: newLists})
    // change view to itemList
    this.props.history.push('/');
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
    //console.log(listId, name)
    let newLists = [...this.state.lists]
    let newList = newLists.find((l) => l.id === listId);
    newList.name = newList.name.filter((n) => n !== name);
    this.setState({lists: newLists})
    
  }

  deleteList = (listId) => {  
    let newLists = [...this.state.lists];
    let newIx = newLists.findIndex((l) => l.id === listId);
    newLists.splice(newIx, 1)
    this.setState({lists: newLists})
    console.log(newLists)
  }

  handleEditList(listId) {
    let newLists = [...this.state.lists]
    let newIx = newLists.findIndex((l) => l.id === listId);
    let newList = newLists[newIx]
    this.setState({list: newList})
    console.log(newList);
  }

  showButtons(event) {
    event.preventDefault();
    let boolean= (this.state.isShown = !this.state.isShown);
    this.setState({isShown: boolean}) 
    }
  
  
  render() {
    
      return (
        <div className="container">
          <h1>NewVentory</h1>
    
            <button><NavLink to='/' exact activeClassName='selected'>ITEM LIST</NavLink></button>
            <button onClick={(e)=>this.showButtons(e)}>SHOW BUTTONS</button>
            <button><NavLink to='/addlist' activeClassName='selected'>CREATE NEW LIST</NavLink></button>

              {/*{(this.state.view === itemList)
                ? <ItemList />
                : (this.state.view === 2)
                  ? <InsertForm addListItem={newName => this.addListItem(newName)} />
                  : (this.state.view === 3)
                    ? <NewList addNewList={newList => this.addNewList(newList)} changeView={isView => this.changeView(isView)} />
                    : ''}*/}

            <Switch>  

              <Route path='/' exact>
                <ItemList  setEditedListId={this.setEditedListId} lists={this.state.lists} deleteItem={this.deleteItem} deleteList={this.deleteList} handleEditList={(i) => this.handleEditList(i)} isShown={this.state.isShown} />
              </Route>

              <Route path='/additem'> 
                <InsertForm editedListId={this.state.editedListId} newName={this.state.newName} addNewItem={this.addNewItem} id={this.state.lists.id}/>
              </Route>

              <Route path='/addlist'>
                <NewList addNewList={title => this.addNewList(title)} />
              </Route>

              <Route path='/editlist'>
                <EditList  lists={this.state.lists} list={this.state.list} />
              </Route>

              <Error404View />

            </Switch>
          
        </div>
      )
  }
}

export default withRouter(App);