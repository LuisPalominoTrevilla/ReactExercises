import React, { Component } from 'react';
import Menu from './menuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish : null
    };
  }


    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light" style={{background: '#e3f2fd'}}>
          <h2>Ristorante Con Fusion</h2>
        </nav>
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
