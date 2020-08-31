import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';
import NewList from './NewList';


const TEST_ITEMS = [
  { title: 'Albuns', name: ['Blood Flowers', 'Spice', "Backstreet's back"]},
  { title: 'Films', name: ['Good Will Hunting', 'The Royal Tenenbaums', "Matrix"]},

];

//const TEST_LISTS = [
  //"Albuns"
//]


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        itemList: 1,
        items: TEST_ITEMS, // []
        // lists: TEST_LISTS
      };
    }


  changeView(isItemList) {
    this.setState({ itemList: isItemList });
  }

  addListItem = (newName) => {
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
  }


  render() {
    
      return (
        <div>
          <h1>NewVentory</h1>
          <button 
            onClick={() => this.changeView(1)}
          >ITEM LIST</button>
          <button 
          onClick={() => this.changeView(2)}
          >ADD ITEM</button>
          <button 
          onClick={() => this.changeView(3)}
          >CREATE NEW LIST</button>
          {
            (this.state.itemList === 1)
              ? <ItemList items={this.state.items} changeView={isItemList => this.changeView(isItemList)} /> 
              : (this.state.itemList === 2)
              ? <InsertForm addListItem={newName => this.addListItem(newName)} changeView={isItemList => this.changeView(isItemList)} />
              : (this.state.itemList === 3)
              ? <NewList addNewList={newList => this.addNewList(newList)} changeView={isItemList => this.changeView(isItemList)} />
              : ''
            
          }
          
        </div>
      )
  }
}

export default App;