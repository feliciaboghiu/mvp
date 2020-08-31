import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';
import NewList from './NewList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error404View from './Error404View'


const TEST_ITEMS = [
  { title: 'Albuns', name: ['Blood Flowers', 'Spice', "Backstreet's back"]},
  { title: 'Films', name: ['Good Will Hunting', 'The Royal Tenenbaums', "Matrix"]},

];


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
          <BrowserRouter>

            <a href='/'>ITEM LIST</a>
            <button
              onClick={() => this.changeView(1)}
            >ITEM LIST</button>
            <a href='/additem'>ITEM LIST</a>
            <button
              onClick={() => this.changeView(2)}
            >ADD ITEM</button>
            <a href='/addlist'>CREATE NEW LIST</a>
            <button
              onClick={() => this.changeView(3)}
            >CREATE NEW LIST</button>
            {
              (this.state.view === 1)
                ? <ItemList items={this.state.items} changeView={isView => this.changeView(isView)} />
                : (this.state.view === 2)
                  ? <InsertForm addListItem={newName => this.addListItem(newName)} />
                  : (this.state.view === 3)
                    ? <NewList addNewList={newList => this.addNewList(newList)} changeView={isView => this.changeView(isView)} />
                    : ''

            }

            <Switch>
              <Route path='/' exact>
                <ItemList />
              </Route>

              <Route path='/additem'>
                <InsertForm />
              </Route>

              <Route path='/addlist'>
                <NewList />
              </Route>

              <Route path='/additem'>
                <InsertForm />
              </Route>

              <Error404View />
            </Switch>
          </BrowserRouter>
          
        </div>
      )
  }
}

export default App;