import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import Signup from './Signup';
import Cart from './Cart';
import AddCake from './AddCake';
import CakeDetails from './CakeDetails';
import Checkout from './Checkout';
import Address from './Address';
import Payment from './Payment';
import Search from './Search';
import Admin from './admin';
import Pagenotfound from './Pagenotfound';

export default function Routing() {
  var toaster = (msg, type) => {
    var toastObj = {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    switch (type) {
      case 'info': {
        toast.info(msg, toastObj);
        break;
      }
      case 'success': {
        toast.success(msg, toastObj);
        break;
      }
      case 'error': {
        toast.error(msg, toastObj);
        break;
      }
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar title="Nandha's Cake Shop" />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart toast={toaster} />} />
          <Route path="addcake" element={<AddCake />} />
          <Route path="search" element={<Search />} />
          <Route
            path="cake/:cakeID"
            element={<CakeDetails toast={toaster} />}
          />
          <Route path="cart" elemnt={<Cart />} />
          <Route path="checkout" element={<Checkout />}>
            <Route path="" element={<Address />} />

            <Route path="address" element={<Address />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          <Route path="admin" element={<Admin />}></Route>
          <Route path="admin/EditCake" element={<AddCake />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
