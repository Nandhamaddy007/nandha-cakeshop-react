import Carousel from './Carousel';
import Navbar from './Navbar';
import CakeList from './CakeList';
import Signup from './Signup';
import React from 'react';
import { Component } from 'react';
import Login from './Login';
import { cake1, cake2, cake3 } from './images';
import AddCake from './AddCake';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      money: 0,
      cakeDetails: [
        { name: 'Rainbow cake', price: '300Rs', src: cake1 },
        { name: 'Chocolate cake', price: '400Rs', src: cake2 },
        { name: 'Heartin Cake', price: '500Rs', src: cake3 },
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
  showLogin = () => {};
  addCake = (obj) => {
    var temp = this.state.cakeDetails;
    temp.push(obj);
    this.setState({
      cakeDetails: temp,
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
        <AddCake addCake={this.addCake} />
        <Login loginDone={this.loginDone} />
        <Signup />
        <Carousel />
        <CakeList cakes={this.state.cakeDetails} />
      </div>
    );
  }
}
export default Home;
