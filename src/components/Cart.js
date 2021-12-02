import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Cart(props) {
  const [addedCakes, setAddedCakes] = useState();
  const [total, setTotal] = useState(0);
  var amt = 0;

  useEffect(() => {});
  return (
    <div className="container">
      <h3>Cart</h3>
      <Link to="/checkout">
        {' '}
        <button
          className="btn btn-outline-secondary"
          style={{ float: 'right' }}
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
          {/* {addedCakes.map((cake, index) => {
            amt = amt + cake.price;
            return cartItem(cake, index);
          })} */}

          <tr>
            <td colSpan={2}>Total</td>
            <td>{amt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  function cartItem(props, index) {
    var cake = props;
    function removeCake() {
      console.log('remove', index);
      var temp = addedCakes;
      temp.splice(index, 1);
      setAddedCakes([...temp]);
    }
    return (
      <tr>
        <td>
          <img src={cake.src} style={{ height: '100px', width: '100px' }} />
          <h5>{cake.name}</h5>
        </td>
        <td>1 X</td>
        <td>{cake.price}</td>
        <td>
          <button className="btn btn-danger" onClick={removeCake}>
            Remove Cake
          </button>
        </td>
      </tr>
    );
  }
}
