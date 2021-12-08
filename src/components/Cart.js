import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import '../style.css';
function Cart(props) {
  const [addedCakes, setAddedCakes] = useState([]);
  const [total, setTotal] = useState(0);
  var amt = 0;

  useEffect(() => {
    // axios
    //   .post(
    //     'https://apifromashu.herokuapp.com/api/cakecart',
    //     {},
    //     {
    //       headers: { authToken: localStorage.token },
    //     }
    //   )
    //   .then(
    //     (res) => {
    //       console.log(res);
    //       props.dispatch({
    //         type: 'FETCH_CART_START',
    //         payload: res.data.data,
    //       });
    //       setAddedCakes(props['cartitems']);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    props.dispatch({
      type: 'GET_CART',
    });
    console.log(props);
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
            return <CartItem cake={cake} />;
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
    function removeCake() {
      // console.log('remove', index);
      // var temp = addedCakes;
      // temp.splice(index, 1);
      // setAddedCakes([...temp]);
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
            props.dispatch({
              type: 'ADDTOCART',
              payload: res.data.data,
            });
            console.log('hello', props['cartitems']);
          },
          (err) => {
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
          <button
            style={{ width: '30px', height: '30px', padding: '0px' }}
            className="form-control inline"
          >
            <i class="arrow up"></i>
          </button>
          &nbsp;&nbsp;
          <input
            type="text"
            value={cake.quantity}
            className="form-control inline"
            style={{ width: '40px', height: '20px', padding: '0px' }}
          />
          &nbsp;&nbsp;
          <button
            className="form-control inline"
            style={{ width: '30px', height: '30px', padding: '0px' }}
          >
            <i class="arrow down"></i>
          </button>
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
  };
}
Cart = connect(mapStateToProps)(Cart);
export default Cart;
