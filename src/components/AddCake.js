import React from 'react';
import { useState } from 'react';
export default function AddCake(props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  var getCakeName = (e) => {
    setName(e.target.value);
  };
  var getCakeImage = (e) => {
    setImg(e.target.value);
  };
  var getCakeprice = (e) => {
    setPrice(e.target.value);
  };
  var pushDetails = () => {
    console.log(name, price, img);
    props.addCake({ name: name, price: price, src: img });
  };
  return (
    <div className="container">
      <div class="form-group">
        <label>Enter Cake name:</label>
        <input class="form-control" onChange={getCakeName} type="text" />
      </div>
      <div class="form-group">
        <label>Add Cake Image:</label>
        <input class="form-control" onChange={getCakeImage} type="text" />
      </div>
      <div class="form-group">
        <label>Enter Price:</label>
        <input class="form-control" onChange={getCakeprice} type="text" />
      </div>
      <button onClick={pushDetails} class="btn btn-primary">
        Add Cake
      </button>
    </div>
  );
}
