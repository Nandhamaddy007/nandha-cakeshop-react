import Cake from './Cake';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCakes } from '../reduxstore/thunks';
import Loader from 'react-loader-spinner';
function CakeList(props) {
  const [editable, setEditable] = useState(false);
  const [cakeList, setCakeList] = useState([]);
  const [loading, setLoading] = useState(false);
  var toggleEdit = () => {
    setEditable(!editable);
  };
  useEffect(() => {
    // setLoading(true);
    props.dispatch(getCakes());
  }, []);

  return (
    <div>
      <div className="container">
        {loading ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            //3 secs
          />
        ) : null}
        {/* <button className="btn btn-outline-primary active" onClick={toggleEdit}>
          Edit
        </button> */}
        <div className="row">
          {props.cakes?.map((cake, index) => {
            cake.index = index;
            return (
              <Cake
                key={index}
                DeleteCake={props.DeleteCake}
                cake={cake}
                editable={editable}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state, props) {
  return {
    cakes: state['InitCakes']['cakes'],
  };
}

CakeList = connect(mapStateToProps)(CakeList);
export default CakeList;
