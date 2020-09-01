import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';
import NewList from './NewList';
import { withRouter } from 'react-router';
import { Switch, Route, Link, NavLink} from "react-router-dom";
import Error404View from './Error404View'


const TEST_ITEMS = [
  { id: 1, title: 'Albuns', name: ['Blood Flowers', 'Spice', "Backstreet's back"]},
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
        items: TEST_ITEMS, // [],
        nextitemId: 3
      };
    }

  addNewItem = (newName) => {
    console.log('App.addListItem:', newName);
    newName = this.state.items.name
    // let indexof = this.state.items.title.indexOf
    this.setState({
      title: this.state.items.albuns,
      name: [...this.state.items.name, newName],
    })
  }

  addNewList = (newList) => {
    console.log('App.addNewList:', newList);
    this.setState({
      lists: [...this.state.lists, newList],
      itemList: 1
    })
  }


  render() {
    
      return (
        <div>
          <h1>NewVentory</h1>

            <button><Link to='/' activeClassName='selected'>ITEM LIST</Link></button>
            <button><Link to='/additem' activeClassName='selected'>ADD ITEM</Link></button>
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
                <ItemList isView={this.state.view} items={this.state.items} changeView={isView => this.changeView(isView)} />
              </Route>

              <Route path='/additem'> 
                <InsertForm addListItem={newName => this.addNewItem(newName)} />
              </Route>

              <Route path='/addlist'>
                <NewList />
              </Route>

              <Error404View />
            </Switch>
          
        </div>
      )
  }
}

export default App;