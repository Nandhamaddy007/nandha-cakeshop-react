import React from 'react';
import { Component } from 'react';

import Carousel from './Carousel';
import Navbar from './Navbar';
import CakeList from './CakeList';
import Signup from './Signup';
import Login from './Login';
import { cake1, cake2, cake3 } from './images';
import AddCake from './AddCake';
import Cart from './Cart';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      money: 0,
      cakeDetails: [
        { name: 'Rainbow cake', price: 300, src: cake1 },
        { name: 'Chocolate cake', price: 400, src: cake2 },
        { name: 'Heartin Cake', price: 500, src: cake3 },
      ],
    };
  }
  loginDone = (value) => {
    this.setState({
      isLoggedIn: value,
      money: 10000,
    });
  };
  setLogout = () => {
    this.setState({
      isLoggedIn: false,
      money: 0,
    });
  };
  DeleteCake = (index) => {
    this.state.cakeDetails.splice(index, 1);
    this.setState({
      cakeDetails: this.state.cakeDetails,
    });
  };
  addCake = (obj) => {
    this.state.cakeDetails.push(obj);

    this.setState({
      cakeDetails: this.state.cakeDetails,
    });
    console.log(this.state.cakeDetails);
  };
  render() {
    return (
      <div>
        <Navbar
          title="Nandha's Cake Shop"
          setLogout={this.setLogout}
          money={this.state.money}
          isLoggedIn={this.state.isLoggedIn}
        />
        <Cart cakeList={this.state.cakeDetails} />
        <AddCake addCake={this.addCake} />
        <Login loginDone={this.loginDone} />
        <Signup />
        <Carousel />
        <CakeList cakes={this.state.cakeDetails} DeleteCake={this.DeleteCake} />
      </div>
    );
  }
}
export default Home;
