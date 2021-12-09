import { Component, useEffect } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { loginThunk } from '../reduxstore/thunks';
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  Switch,
  useNavigate,
} from 'react-router-dom';
import Signup from './Signup';
import axios from 'axios';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      counter: 0,
    };
  }
  user = {
    email: '',
    password: '',
  };
  getEmail = (e) => {
    this.user.email = e.target.value;
  };
  getPass = (e) => {
    this.user.password = e.target.value;
  };
  login = () => {
    // this.props.loading(true);
    // console.log(this.props.loading);
    console.log(this.props);
    if (
      this.user.email === 'nandhamaddy007@gmail.com' &&
      this.user.password === 'Cake01'
    ) {
      this.props.props.dispatch(loginThunk(this.user));
      // axios.post('https://apifromashu.herokuapp.com/api/login', this.user).then(
      //   (res) => {
      //     console.log(res);
      //     if (res.data.token) {
      //       localStorage.token = res.data.token;
      //       localStorage.role = res.data.role;
      //       localStorage.name = res.data.name;
      //       this.props.reducer.dispatch({
      //         type: 'LOGIN',
      //         payload: true,
      //       });
      //       this.props.navigate('/');
      //     }
      //   },
      //   (err) => {
      //     console.log(err);
      //     alert('Invalid Credentials');
      //   }
      // );
    }
  };
  render() {
    return (
      <div>
        <div className="container" style={{ width: '50%', margin: 'auto' }}>
          <h1>Login here</h1>
          <div className="form-group">
            <label for="exampleInputEmail1">Email: </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              onChange={this.getEmail}
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              class="form-control"
              onChange={this.getPass}
              placeholder="Enter your Password"
            />
            <Link to="/signup">New user? Register here</Link>
            <Link style={{ float: 'right' }} to="/forgot">
              Forgot password?? recover here
            </Link>
          </div>
          <button className="btn btn-primary" onClick={this.login}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  console.log('map', state, props);
  return {
    isloggedin: state['AuthReducer']['isLoggedin'],
  };
}

function loginComp(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.isloggedin) {
      navigate('/');
    }
  });
  return <Login navigate={navigate} props={props} />;
}
loginComp = connect(mapStateToProps)(loginComp);
export default loginComp;
