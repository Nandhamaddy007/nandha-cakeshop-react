import React from 'react';
export default function Cake(props) {
  var deleteCake = () => {
    props.DeleteCake(props.cake.index);
  };
  return (
    <div className="col-md">
      <div className="card" style={{ width: '15rem' }}>
        <img
          className="card-img-top"
          style={{ height: '10rem' }}
          src={props.cake.src}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.cake.name}</h5>
          <p className="card-text">{props.cake.price}Rs</p>

          {props.editable ? (
            <button className="btn btn-danger" onClick={deleteCake}>
              Delete
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
