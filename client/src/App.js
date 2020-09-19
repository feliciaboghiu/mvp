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
import Login from "./components/login.js";
import SignUp from "./components/signUp.js";


const API_URL = "/inventarium/lists";

// const TEST_ITEMS = [
//   { id: 1, title: 'Albums', name: ["The Beatles - Sgt. Pepper' Lonely Hearts Club Band", 'The Beach Boys - Pet Sounds', "The Beatles - Revolver", 'Bob Dylan - Highway 61 Revisited', "Marvin Gaye - What's Going On", 'The Rolling Stones - Exile on Main Street']},
//   { id: 2, title: 'Films', name: ['Good Will Hunting', 'The Royal Tenenbaums', "Matrix", "The Godfather", "Fight Club", "Pulp Fiction"]},
//   { id: 3, title: "Pantry", name: ['Wild Rice', "Black Beans", 'Toilet paper', 'Cat food', 'Condensed Milk']}
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        lists: [],
        newList: '',
        nextListId: 4,
        editedListId: null,
        list: null
        // isShown: false,
        // showLogIn: true
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
      });
  }

//   async addNewItem(newItem, listId) {
//     // copy lists
//     let newLists = [...this.state.lists]
//     // find the index of the list using listId
//     let newIx = newLists.findIndex((l) => l.id === listId);
//     // get that specific list using the index
//     let newList = newLists[newIx]
//     // add newItem to that list  
//     newList.items.push(newItem)

//     // POST
//     let options = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(item)
//     };

//   try {
//     let response = await fetch(API_URL, options);
//     if (response.ok) {
//     let newLists = await response.json();
//     this.setState({ lists: newLists });
//     } else {
//       console.log("ERROR:", response.status, response.statusText);
//       }
//     } catch (err) {
//       console.log("EXCEPTION:", err.message);
//   }
//     this.props.history.push('/mylists');
// }

  addNewItem = (newItem, list_id) => {
    // copy lists
    let newLists = [...this.state.lists]
    // find the index of the list using listId
    let newIx = newLists.findIndex((l) => l.id === list_id);
    // get that specific list using the index
    let newList = newLists[newIx]
    // add newItem to that list  
    newList.item.push(newItem)
    // update state replacing lists with the specific list
    this.setState({lists: newLists})
    // change view to itemList
    this.props.history.push('/mylists');
  }

  // async addNewList(newTitle) {
  //   event.preventDefault();

  //   let newList = {id: this.state.nextListId, title: newTitle, items: []};
  //   let options = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newList)
  //   };

  //   try {
  //     let response = await fetch(API_URL, options);
  //     if (response.ok) {
  //       let newLists = await response.json();
  //       this.setState({
  //         lists: [...this.state.lists, newList],
  //         nextListId: this.state.newListId +1 });
  //     } else {
  //       console.log("ERROR:", response.status, response.statusText);
  //     }
  //   } catch (err) {
  //     console.log("EXCEPTION:", err.message);
  //   }
  //   this.props.history.push('/mylists');
  // }

  addNewList = (newTitle) => {
    let newList = {id: this.state.nextListId, title: newTitle, items: []}
    this.setState({
      lists: [...this.state.lists, newList],
      nextListId: this.state.nextListId + 1
    });
    // Redirect to '/mylists'
    this.props.history.push('/mylists');
  }

  setEditedListId(editedListId) {
    this.setState({ editedListId: editedListId });
  }

  deleteItem = (list_id, text) => {
    //console.log(listId, item)
    let newLists = [...this.state.lists]
    let newList = newLists.find((l) => l.id === list_id);
    newList.item = newList.item.filter((i) => i !== text);
    this.setState({lists: newLists})
  }

  deleteList = (list_id) => {  
    let newLists = [...this.state.lists];
    let newIx = newLists.findIndex((l) => l.id === list_id);
    newLists.splice(newIx, 1)
    this.setState({lists: newLists})
    // console.log(newLists)
  }

  handleEditList(list_id) {
    let newLists = [...this.state.lists]
    let newIx = newLists.findIndex((l) => l.id === list_id);
    let newList = newLists[newIx]
    this.setState({list: newList})
    console.log(newList);
  }

  // showButtons(event) {
  //   event.preventDefault();
  //   let boolean= (this.state.isShown = !this.state.isShown);
  //   this.setState({isShown: boolean}) 
  //   }

  saveList(list_id, newTitle, newItems) {
    let newLists = [...this.state.lists]
    let newList = newLists.find((l) => l.id === list_id);
    newList.title = newTitle;
    newList.item = newItems;
    this.setState({lists: newLists})
    this.props.history.push('/mylists');
    
  }

  // toggleLogIn(event) {
  //   let boolean = (this.state.showLogIn = !this.state.showLogIn);
  //     this.setState({showLogIn: boolean}) 
  // }

  render() {
    
    return (
      <Router>
        <div className="container">
        <div className="text-center">  
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
                setEditedListId={this.setEditedListId}
                lists={this.state.lists}
                deleteItem={this.deleteItem}
                deleteList={this.deleteList}
                handleEditList={(i) => this.handleEditList(i)} />
              </Route>

              <Route path='/additem'> 
                <InsertForm editedListId={this.state.editedListId} newItem={this.state.newItem} addNewItem={this.addNewItem} id={this.state.lists.id}/>
              </Route>

              <Route path='/addlist'>
                <NewList addNewList={title => this.addNewList(title)} />
              </Route>

              <Route path='/editlist/:id' render={
                (routeProps) => {
                  let list = this.state.lists.find((l) => l.id === routeProps.match.params.id);
                  return <EditList list={list}
                  saveList={(list_id, newTitle, newItems) => this.saveList(list_id, newTitle, newItems)}
                  />
                }
              } />
              
              <div>
                <div>
                  <Route path='/login'>
                    <Login />
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