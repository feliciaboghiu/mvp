import React from 'react';
import './App.css';
import ItemList from './ItemList';
import InsertForm from './InsertForm';
import NewList from './NewList';
import { Switch, Route, NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Error404View from './Error404View';
import EditList from './EditList';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { NavbarBrand } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL = "/inventarium/lists";

const TEST_ITEMS = [
  { id: 1, title: 'Albums', name: ["The Beatles - Sgt. Pepper' Lonely Hearts Club Band", 'The Beach Boys - Pet Sounds', "The Beatles - Revolver", 'Bob Dylan - Highway 61 Revisited', "Marvin Gaye - What's Going On", 'The Rolling Stones - Exile on Main Street']},
  { id: 2, title: 'Films', name: ['Good Will Hunting', 'The Royal Tenenbaums', "Matrix", "The Godfather", "Fight Club", "Pulp Fiction"]},
  { id: 3, title: "Pantry", name: ['Wild Rice', "Black Beans", 'Toilet paper', 'Cat food', 'Condensed Milk']}
];

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        lists: TEST_ITEMS, // [],
        newList: '',
        nextListId: 4,
        editedListId: null,
        list: null,
        isShown: false,
        showLogIn: true
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
    this.props.history.push('/mylists');
  }
  
  // componentDidMount() {
  //   fetch(API_URL)
  //     .then(res => res.json())
  //     .then(json => {
  //       // Upon success, update tasks
  //       this.setState({ lists: json });
  //     });
  // }

  addNewList = (newTitle) => {
    let newList = {id: this.state.nextListId, title: newTitle, name: []}
    this.setState({
      lists: [...this.state.lists, newList],
      nextListId: this.state.nextListId + 1
    });
    // Redirect to '/mylists'
    this.props.history.push('/mylists');
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

  // showButtons(event) {
  //   event.preventDefault();
  //   let boolean= (this.state.isShown = !this.state.isShown);
  //   this.setState({isShown: boolean}) 
  //   }

  saveList(listId, newTitle, newNames) {
    let newLists = [...this.state.lists]
    let newList = newLists.find((l) => l.id === listId);
    newList.title = newTitle;
    newList.name = newNames;
    this.setState({lists: newLists})
    this.props.history.push('/mylists');
    
  }

  toggleLogIn(event) {
    let boolean = (this.state.showLogIn = !this.state.showLogIn);
      this.setState({showLogIn: boolean}) 
  }

  render() {
    
      return (

        <div className="container">
          <h1>Inventarium</h1>

        <div className={this.state.showLogIn ? 'false' : 'true'}>  
          {/* <div className="white"> */}
            <Navbar bg='info' expand="lg">
              <Button variant="info"><NavLink to='/' exact><NavbarBrand>INVENTARIUM</NavbarBrand></NavLink></Button>
              <Button variant="info"><NavLink to='/mylists' exact activeClassName='selected'>My Lists</NavLink></Button>
              <Button variant="info"><NavLink to='/addlist' activeClassName='selected'>Create New List</NavLink></Button>
            </Navbar>
          </div>
        {/* </div> */}
              
            <Switch> 
              <Route path='/' exact>
                <Home />
              </Route>

              <Route path='/mylists'>
                <ItemList  setEditedListId={this.setEditedListId} lists={this.state.lists} deleteItem={this.deleteItem} deleteList={this.deleteList} handleEditList={(i) => this.handleEditList(i)} isShown={this.state.isShown} toggleLogIn={(e)=>this.toggleLogIn(e)} showLogIn={this.state.showLogIn} />
              </Route>

              <Route path='/additem'> 
                <InsertForm editedListId={this.state.editedListId} newName={this.state.newName} addNewItem={this.addNewItem} id={this.state.lists.id}/>
              </Route>

              <Route path='/addlist'>
                <NewList addNewList={title => this.addNewList(title)} />
              </Route>

              <Route path='/editlist/:id' render={
                (routeProps) => {
                  let list = this.state.lists.find((l) => l.id == routeProps.match.params.id);
                  return <EditList list={list}  saveList={(i, t, n) => this.saveList(i, t, n)}
                  />
                }
              } />

              <Route path='/signIn'>
                <SignInSignUp />
              </Route>

              <Error404View />

            </Switch>
            
            <br/>
        </div>
      )
  }
}

class Home extends React.Component {
  render() {
    return(
      <div className="container">
        <h1>Welcome</h1>
        <div>
              <Button variant="info"><Link to="/signIn">SIGN IN</Link></Button>
        </div>
      </div>
    )
  }
}

class SignInSignUp extends React.Component {
  render() {
    return (
      // <div className={this.state.showLogIn ? 'true' : 'false'}>
      <div className="container">
      {/* <h2>Welcome to Inventarium</h2> */}
      <br/>
      <Form>
        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label for="exampleInputEmail">Email Adress</Form.Label> */}
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          {/* <Form.Label for="exampleInputPassword1">Password</Form.Label> */}
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <input type="checkbox" />
        <label>Remember Me</label>
        <br />
        <div className="white">
          <Button variant="info" onClick={(e) => this.toggleLogIn(e)}>Submit</Button>
        </div>
      </Form>
      <br />
      <Form>
        <div className="sign-up">
        <Form.Label>
          Don't have an acount?
          <br />
          <Button variant="info">Sign Up</Button>
        </Form.Label>
        </div>
      </Form>
    </div>
    )
  }
}

export default withRouter(App);