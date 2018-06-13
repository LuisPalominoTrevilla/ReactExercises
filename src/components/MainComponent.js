import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './menuComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import DishDetail from './DishdetailComponent';
import Header from './headerComponent';
import Footer from './footerComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} leader={this.state.leaders.filter((leader) => leader.featured)[0]} promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}/> // Return only feature dish using filter js
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}/>
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Route path='/menu/:dishId' component={DishWithId} /> 
          <Route exact path="/contactus" component={Contact}/>

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
