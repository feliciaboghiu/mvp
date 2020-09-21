import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';
import NewList from './NewList';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Error404View from './Error404View';
import EditList from './EditList';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
import { NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./components/login.js";
import SignUp from "./components/signUp.js";
import ValidatedLoginForm from "./components/validatedLoginForm.js";


const API_URL = "/inventarium/lists";
const API_URL2 = "/inventarium/lists/items";

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        lists: [],
        newList: "",
        nextListId: 6,
        editedListId: null,
        list: null,
      };
    }

  componentDidMount() {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        // Upon success, update lists
        this.setState({ lists: json });
      })
      .catch(error => {
        // upon failure, show error message
        console.log("Error")
      });
  }

  async addNewItem(newItem, list_id) {
    let item = { text: newItem, list_id: list_id};
    // POST
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    };

  try {
    let response = await fetch(API_URL2, options);
    if (response.ok) {
    let newLists = await response.json();
    this.setState({ lists: newLists });
    } else {
      console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      console.log("EXCEPTION:", err.message);
  }
    this.props.history.push('/mylists');
}

  async addNewList(newTitle) {
    let newList = { id: this.state.nextListId, title: newTitle, items: [] };

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newList)
    };

    try {
      let response = await fetch(API_URL, options);
      if (response.ok) {
        let newLists = await response.json();
        this.setState({
          lists: [...this.state.lists, newLists],
          nextListId: this.state.newListId +1 });
      } else {
        console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      console.log("EXCEPTION:", err.message);
    }
  }

  setEditedListId(editedListId) {
    this.setState({ editedListId: editedListId });
  }

  async deleteItem(list_id, item_id) {
    // DELETE item from database
    let options = {
      method: "DELETE"
    };
    try {
      let response = await fetch(`${API_URL2}/${item_id}`, options);
      if (response.ok) {
        let newLists = await response.json();
        let newList = newLists.find((l) => l.id === list_id);
        newList.item = newList.item.filter((i) => i !== item_id);
        // upon success, update the list of items
        this.setState({ lists: newLists });
      } else {
        console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      // upon failure, show error message
      console.log("EXCEPTION:", err.message);
    }
  }

  async deleteList(list_id) {
    // DELETE list from database
    let options = {
      method: "DELETE"
    };
    
    try {
      let response = await fetch(`${API_URL}/${list_id}`, options);
      if (response.ok) {
        let newLists = await response.json();
        this.setState({ lists: newLists });
      } else {
        console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      // upon failure, show error message
      console.log("EXCEPTION:", err.message);
    }
  }

  async handleEditList(list_id) {
    let list = this.state.lists.find(l => l.id === list_id);
    // PUT
    let options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(list)
    };

    try {
      let response = await fetch(`${API_URL}/${list_id}`, options);
      if (response.ok) {
        let newList = await response.json();
        // upon success, update tasks
        this.setState({ list: newList });
      } else {
        console.log("ERROR:", response.status, response.statusText);
      }
    } catch (err) {
      // upon failure, show error message
      console.log("EXCEPTION:", err.message);
    }
  }

  saveList(list_id, newTitle, newItems) {
    let newLists = [...this.state.lists];
    let newList = newLists.find((l) => l.id === list_id);
    newList.title = newTitle;
    newList.item = newItems;
    this.setState({lists: newLists})
    this.props.history.push('/mylists');
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div>
            <Navbar bg='info' expand="lg">
              <Button variant="info"><NavLink to='/' exact><NavbarBrand>INVENTARIUM</NavbarBrand></NavLink></Button>
              <Button variant="info"><NavLink to='/mylists' exact activeClassName='selected'>My Lists</NavLink></Button>
              <Button variant="info"><NavLink to='/addlist' activeClassName='selected'>Create New List</NavLink></Button>
            </Navbar>
          </div>
              
            <Switch> 
              <Route path='/' exact>
                <Home />
              </Route>

              <Route path='/mylists'>
                <ItemList
                setEditedListId={(editedListId) => this.setEditedListId(editedListId)}
                lists={this.state.lists}
                deleteItem={(list_id, item_id) => this.deleteItem(list_id, item_id)}
                deleteList={(list_id) => this.deleteList(list_id)}
                handleEditList={(list_id) => this.handleEditList(list_id)} />
              </Route>

              <Route path='/additem'> 
                <InsertForm editedListId={this.state.editedListId}
                newItem={this.state.newItem}
                addNewItem={(newItem, list_id) => this.addNewItem(newItem, list_id)}
                id={this.state.lists.id}/>
              </Route>

              <Route path='/addlist'>
                <NewList addNewList={(newTitle) => this.addNewList(newTitle)} />
              </Route>

              <Route path='/editlist/:id' render={
                (routeProps) => {
                  let list = this.state.lists.find((l) => l.id === routeProps.match.params.id);
                  return <EditList list={list}
                  saveList={(id, t, item) => this.saveList(id, t, item)}
                  />
                }
              } />
              
              <div>
                <div>
                  <Route path='/login'>
                    <ValidatedLoginForm />
                  </Route>
                  <Route path='/sign-up'>
                    <SignUp />
                  </Route>
                </div>
              </div>

              <Error404View />

            </Switch>
      </div>
      </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return(
      <div className="text-center">
        <h1>Welcome</h1>
        <div>
              <Button variant="info"><Link to="/login">SIGN IN</Link></Button>
              <Button variant="info"><Link to="/sign-up">SIGN UP</Link></Button>
        </div>
      </div>
    )
  }
}

export default withRouter(App);