import React, { Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light" style={{background: '#e3f2fd'}}>
          <h2>Hello World</h2>
        </nav>
      </div>
    );
  }
}

export default App;
