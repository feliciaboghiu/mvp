import React from 'react';
import './App.css';
import UserView from './UserView';

class UserView extends React.Component {
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

export default UserView;