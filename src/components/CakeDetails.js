import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
function CakeDetails(props) {
  var params = useParams();
  var cakeid = params.cakeID;
  const [cakeDetails, setCakeDetails] = useState({});
  var navigate = useNavigate();
  function AddItem() {
    if (props.isLoggedin) {
      var reqObj = {
        cakeid: cakeDetails.cakeid,
        name: cakeDetails.name,
        price: cakeDetails.price,
        image: cakeDetails.image,
        quantity: cakeDetails.quantity,
        weight: cakeDetails.weight,
      };
      axios
        .post(
          'https://apifromashu.herokuapp.com/api/' + 'addcaketocart',
          reqObj,
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
              navigate('/login');
            } else props.toast(res.data.message, 'success');
          },
          (err) => {
            props.toast('unable to add', 'error');
            console.log(err);
          }
        );
    } else {
      props.toast('please login and try again', 'error');
    }
  }
  useEffect(() => {
    axios
      .get('https://apifromashu.herokuapp.com/api/cake/' + cakeid)
      .then((res) => {
        console.log(res.data.data);
        setCakeDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function Star() {
    return (
      <p className="d-inline" style={{ color: 'orange', fontSize: '20px' }}>
        &#9733;
      </p>
    );
  }

  return (
    <div className="container bg-light border rounded-3 mt-5">
      <h6>Cake id is {cakeid}</h6>
      <div className="row">
        <img src={cakeDetails.image} className="col-md-4 rounded m-4" />
        <div className="col-md-4">
          <h4>{cakeDetails.name}</h4>
          <h2>
            <div className="d-inline">
              <div className="mx-3">
                <sup>&#8377;</sup>
                {cakeDetails.price}
              </div>
            </div>
          </h2>
          <div className="mb-2">
            <h6>{cakeDetails.likes} people &#128077; this</h6>
            <h6>{cakeDetails.reviews} people reviewed this</h6>

            {/* {Array(parseInt(cakeDetails.ratings)).map((index) => {
              return (
                <p
                  className="d-inline"
                  style={{ color: 'orange', fontSize: '20px' }}
                >
                  &#9733;
                </p>
              );
            })} */}
          </div>
          <h5>
            <span
              style={{
                backgroundColor: cakeDetails.eggless ? 'green' : 'yellow',
              }}
              className="border rounded p-1"
            >
              Eggless
            </span>
          </h5>
          <h3>Description:</h3>
          <p className="ms-5" style={{ width: '400px' }}>
            {cakeDetails.description}
          </p>
          <div class="d-inline p-2 ">Available:</div>
          <div class="d-inline p-2 ">
            {cakeDetails.weight}Kg/ <b>{cakeDetails.price} &#8377;</b>
          </div>
          <button className="btn btn-primary" onClick={AddItem}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

CakeDetails = connect(function (state, props) {
  return {
    isLoggedin: state['AuthReducer']['isLoggedin'],
  };
})(CakeDetails);
export default CakeDetails;
