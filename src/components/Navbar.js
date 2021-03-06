import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
function Navbar(props) {
  const [searchText, setSearchText] = useState();
  const navigate = useNavigate();
  function getSearchText(e) {
    setSearchText(e.target.value);
  }
  var handleSubmit = () => {
    console.log(`search?q=${searchText}`);
    navigate(`search?q=${searchText}`);
  };
  var logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    props.dispatch({
      type: 'LOGIN',
      payload: false,
    });
    navigate('/');
    setIsLoggedIn(false);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(props.isloggedin);
  useEffect(() => {}, []);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            {props.title}
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {/* <li class="nav-item">
                <h6>Your Wallet Balance is : {props.money}</h6>
              </li> */}
            </ul>
            <h5 className="m-3">
              {localStorage.name ? `Welcome ${localStorage.name}` : null}
            </h5>
            <input
              className="form-control"
              type="search"
              style={{ width: '200px' }}
              onChange={getSearchText}
              placeholder="Search"
              aria-label="Search"
            />
            &nbsp;&nbsp;
            <button
              onClick={handleSubmit}
              class="btn btn-outline-success my-2 my-sm-0"
            >
              Search
            </button>
            &nbsp;&nbsp;
            {props.isloggedin ? (
              <div>
                <button class="btn btn-outline-danger" onClick={logOut}>
                  Logout
                </button>
                &nbsp;&nbsp;
                <Link to="cart">
                  {' '}
                  <button class="btn btn-warning">
                    Cart{' '}
                    <span
                      class="badge badge-pill badge-danger"
                      style={{ backgroundColor: 'red' }}
                    >
                      {props.cartcount}
                    </span>
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="login">
                  <button class="btn btn-outline-primary">Login</button>
                </Link>
                &nbsp;&nbsp;
                <Link to="signup">
                  <button class="btn btn-outline-success">Signup</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      {props.isloggedin ? (
        <Link to="addcake">
          <button className="btn btn-primary">Got a new recipe?</button>
        </Link>
      ) : null}
    </div>
  );
}
function mapStateToProps(state, props) {
  console.log(state, props);
  return {
    isloggedin: state['AuthReducer']['isLoggedin'],
    cartcount: state['CartReducer']['cartitems'].length,
  };
}
Navbar = connect(mapStateToProps)(Navbar);
export default Navbar;
