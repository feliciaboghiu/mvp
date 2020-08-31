import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';
import NewList from './NewList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Error404View from './Error404View'


const TEST_ITEMS = [
  { title: 'Albuns', name: ['Blood Flowers', 'Spice', "Backstreet's back"]},
  { title: 'Films', name: ['Good Will Hunting', 'The Royal Tenenbaums', "Matrix"]},

];

//const VIEW_ITEMS = [ itemlist, additem, addlist ]


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        view: 1,
        items: TEST_ITEMS, // []
      };
    }


  changeView(isView) {
    this.setState({ view: isView });
  }

  /*addListItem = (newName) => {
    console.log('App.addListItem:', newName);
    newName = this.state.items.name
    this.setState({
      items: [...this.state.items.name, newName],
      itemList: 1
    })
  }

  addNewList = (newList) => {
    console.log('App.addNewList:', newList);
    this.setState({
      lists: [...this.state.lists, newList],
      itemList: 1
    })
  }*/


  render() {
    
      return (
        <div>
          <h1>NewVentory</h1>
          <Router>

            <button onClick={() => this.changeView(1)}><NavLink to='/' activeClassName='selected'>ITEM LIST</NavLink></button>
            <button onClick={() => this.changeView(2)}><NavLink to='/additem' activeClassName='selected'>ADD ITEM</NavLink></button>
            <button onClick={() => this.changeView(3)}><NavLink to='/addlist' activeClassName='selected'>CREATE NEW LIST</NavLink></button>

              {/*{(this.state.view === itemList)
                ? <ItemList />
                : (this.state.view === 2)
                  ? <InsertForm addListItem={newName => this.addListItem(newName)} />
                  : (this.state.view === 3)
                    ? <NewList addNewList={newList => this.addNewList(newList)} changeView={isView => this.changeView(isView)} />
                    : ''}*/}

            <Switch>
              {(this.state.view === 1)  
                ? (<Route path='/'>
                    <ItemList isView={this.state.view} items={this.state.items} changeView={isView => this.changeView(isView)} />
                  </Route>)

              : (this.state.view === 2) 
                ? (<Route path='/additem'>
                    <InsertForm addListItem={newName => this.addListItem(newName)} />
                  </Route>)

              : (this.state.view === 3) 
                ? (<Route path='/addlist'>
                    <NewList />
                  </Route>)

              : <Error404View />}
            </Switch>
          </Router>
          
        </div>
      )
  }
}

export default App;