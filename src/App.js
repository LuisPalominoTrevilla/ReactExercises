import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light" style={{background: '#e3f2fd'}}>
          <h2>Hello World</h2>
        </nav>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
