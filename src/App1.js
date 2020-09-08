import React from 'react';
import './App.css';
import UserView from './App';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router,
  Link,
  Route,
  Switch} from 'react-router-dom';


class App extends React.Component {
  
  handleSubmit(event) {
    window.location.href="localhost:300/home"
  }

  render() {
      return (
        <div className="container-sm">
          <h1>Inventarium</h1>
          <h2>Welcome to Inventarium</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label for="exampleInputEmail">Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label for="exampleInputPassword1">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <input type="checkbox" />
            <label>Keep me logged in</label>
            <br />
            <div className="white">
              <Button variant="info">Submit</Button>
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

export default App;