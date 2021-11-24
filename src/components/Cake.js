import React from 'react';
export default function Cake(props) {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top"
          style={{ height: '13rem' }}
          src={props.cake.src}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.cake.name}</h5>
          <p className="card-text">{props.cake.price}</p>
        </div>
      </div>
    </div>
  );
}
