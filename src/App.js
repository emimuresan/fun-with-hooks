import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Form from './useState/Form.class';
//import Form from './useState/Form';
//import Button from './useEffect/Button.class';
//import Button from './useEffect/Button';
//import StatusBar from './useEffect/StatusBar.class';
//import StatusBar from './useEffect/StatusBar';
//import FriendChat from './useEffect/FriendChat';
import FriendChat from './customHooks/FriendChat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Hooks</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          {/* <Form /> */}
          {/* <Button /> */}
          <FriendChat />
        </main>
      </div>
    );
  }
}

export default App;
