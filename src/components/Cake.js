import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Cake(props) {
  var deleteCake = () => {
    props.DeleteCake(props.cake.index);
  };
  var navigate = useNavigate();
  var showDetails = () => {
    navigate(`/cake/${props.cake.cakeid}`);
  };
  return (
    <div className="col-md mt-3">
      <div className="card" style={{ width: '15rem' }}>
        <img
          className="card-img-top"
          style={{ height: '10rem' }}
          src={props.cake.image}
          alt="Card image cap"
          onClick={showDetails}
        />
        <div className="card-body">
          <h5 className="card-title">{props.cake.name}</h5>
          <p className="card-text">
            {props.cake.price}
            <sup>&#8377;</sup>
          </p>

          {/* {props.editable ? (
            <button className="btn btn-danger" onClick={deleteCake}>
              Delete
            </button>
          ) : null} */}
        </div>
      </div>
    </div>
  );
}
