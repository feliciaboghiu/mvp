import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';
import NewList from './NewList';
import { withRouter } from 'react-router';
import { Switch, Route, Link, NavLink} from "react-router-dom";
import Error404View from './Error404View'
import { findAllByAltText } from '@testing-library/react';



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
        nextListId: 3
      };
    }

  addNewItem = (name, listId) => {
    console.log('App.addListItem:', name);
    let newName = { name: name };
      // find the list
      let id = this.state.lists.find((l) => l.id === listId)
      alert(listId)
      // copy it
      
      //this.state.lists
      // add the new name

      // set state
      //name: [...this.state.lists.name, newName]

      // Create new array
        //let newList = [...this.state.lists];
        
        // Toggle 'isDone'
        //newList[ix].isClicked = !newList[ix].isClicked;

        // Update state
        //this.setState({
            //lists: newList
    //})
  }

  addNewList = (newTitle) => {
    let newList = {id: this.state.nextListId, title: this.state.title.newTitle, name: ''}
    this.setState({
      lists: [...this.state.lists, newList],
      nextListId: this.state.newListId + 1
    });
    // Redirect to '/'
    this.props.history.push('/');
  }


  render() {
    
      return (
        <div className="container">
          <h1>NewVentory</h1>

            <button><Link to='/' exact activeClassName='selected'>ITEM LIST</Link></button>
            <button><Link to='/addlist' activeClassName='selected'>CREATE NEW LIST</Link></button>

              {/*{(this.state.view === itemList)
                ? <ItemList />
                : (this.state.view === 2)
                  ? <InsertForm addListItem={newName => this.addListItem(newName)} />
                  : (this.state.view === 3)
                    ? <NewList addNewList={newList => this.addNewList(newList)} changeView={isView => this.changeView(isView)} />
                    : ''}*/}

            <Switch>  

              <Route path='/' exact>
                <ItemList lists={this.state.lists} />
              </Route>

              <Route path='/additem'> 
                <InsertForm addNewItem={newName => this.addNewItem(newName)} id={this.state.lists.id}/>
              </Route>

              <Route path='/addlist'>
                <NewList addNewList={title => this.addNewList(title)}/>
              </Route>

              <Error404View />

            </Switch>
          
        </div>
      )
  }
}

export default App;