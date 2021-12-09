import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import '../style.css';
function Cart(props) {
  const [addedCakes, setAddedCakes] = useState([]);
  const [total, setTotal] = useState(0);
  var amt = 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.isLoggedin) {
      console.log('hello');
      alert('Please login to continue');
      navigate('/login');
    }
    console.log(props);
    props.dispatch({
      type: 'GET_CART',
    });
  }, []);
  return (
    <div className="container">
      <h3>Cart</h3>
      <Link to="/checkout">
        {' '}
        <button
          className="btn btn-outline-secondary"
          style={{ float: 'right' }}
          onClick={() => {
            console.log(props);
          }}
        >
          Checkout
        </button>{' '}
      </Link>
      <table className="table table-borderless table-hover">
        <thead class="table-dark">
          <tr>
            <td>Cake</td>
            <td>Quantity</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {props['cartitems']?.map((cake, index) => {
            amt = amt + cake.price * cake.quantity;
            return <CartItem cake={cake} index={index} />;
          })}

          <tr>
            <td colSpan={2}>Total</td>
            <td>{amt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  function CartItem(cakes) {
    var cake = cakes.cake;
    function removeOneCake() {
      axios
        .post(
          'https://apifromashu.herokuapp.com/api/removeonecakefromcart',
          { cakeid: cake.cakeid },
          {
            headers: { authToken: localStorage.token },
          }
        )
        .then(
          (res) => {
            console.log(res);
            props.toast(res.data.message, 'success');
            cake.quantity -= 1;
            var temp = [...props.cartitems];
            console.log(temp);
            temp[cakes.index] = cake;
            console.log(temp);
            props.dispatch({
              type: 'ADDTOCART',
              payload: temp,
            });
          },
          (err) => {
            props.toast('unable to remove, please try again later', 'error');
            console.log(err);
          }
        );
    }
    function removeCake() {
      axios
        .post(
          'https://apifromashu.herokuapp.com/api/removecakefromcart',
          { cakeid: cake.cakeid },
          {
            headers: { authToken: localStorage.token },
          }
        )
        .then(
          (res) => {
            console.log(res);
            props.toast(res.data.message, 'success');
            props.dispatch({
              type: 'ADDTOCART',
              payload: res.data.data,
            });
            console.log('hello', props['cartitems']);
          },
          (err) => {
            props.toast('unable to remove', 'error');
            console.log(err);
          }
        );
    }
    function addOneCake() {
      axios
        .post(
          'https://apifromashu.herokuapp.com/api/' + 'addcaketocart',
          cake,
          { headers: { authToken: localStorage.token } }
        )
        .then(
          (res) => {
            console.log(res);
            if (res.data.message == 'Not Authorised') {
              props.toast(
                res.data.message + ' Please Login and try again',
                'error'
              );
            } else {
              props.toast(res.data.message, 'success');
              cake.quantity += 1;
              var temp = [...props.cartitems];
              console.log(temp);
              temp[cakes.index] = cake;
              console.log(temp);
              props.dispatch({
                type: 'ADDTOCART',
                payload: temp,
              });
            }
          },
          (err) => {
            props.toast('unable to add', 'error');
            console.log(err);
          }
        );
    }
    return (
      <tr>
        <td>
          <img src={cake.image} style={{ height: '100px', width: '100px' }} />
          <h5>{cake.name}</h5>
        </td>
        <td>
          <span
            onClick={addOneCake}
            style={{ position: 'relative', left: '12px' }}
            className=" inline"
          >
            <i class="arrow up"></i>
          </span>
          &nbsp;&nbsp;
          <input
            type="text"
            value={cake.quantity}
            className="form-control inline"
            style={{ width: '40px', height: '20px', padding: '0px' }}
          />
          &nbsp;&nbsp;
          <span
            className="inline"
            onClick={removeOneCake}
            style={{ position: 'relative', left: '5px' }}
          >
            <i class="arrow down"></i>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </td>
        <td>{cake.price * cake.quantity}</td>
        <td>
          <button className="btn btn-danger" onClick={removeCake}>
            Remove Cake
          </button>
        </td>
      </tr>
    );
  }
}
function mapStateToProps(state, props) {
  console.log(state);
  return {
    cartitems: state['CartReducer']['cartitems'],
    isLoggedin: state['AuthReducer']['isLoggedin'],
  };
}
Cart = connect(mapStateToProps)(Cart);
export default Cart;
