import React from 'react';
import { Link, Outlet } from 'react-router-dom';
export default function Checkout() {
  return (
    <div>
      <h1>Checkout page</h1>
      <div className="row">
        <div className="col-md-4">
          <ul>
            <li>
              <Link to="address">Address</Link>
            </li>
            <li>
              <Link to="payment">Payment</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
