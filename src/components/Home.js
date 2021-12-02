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
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
//getuserdetails to validate token
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: localStorage.token ? true : false,
      money: 0,
      isLoading: false,
    };
  }
  setIsLoading = (value) => {
    console.log(value);
    this.setState({
      isLoading: value,
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
        <Carousel />
        <CakeList />
      </div>
    );
  }
}
export default Home;
