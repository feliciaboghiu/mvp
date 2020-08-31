import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div className="App">
          <h1>NewVentory</h1>
          <ItemList />
          <InsertForm />
        </div>
      )
  }
}

export default App;