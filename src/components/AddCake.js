import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
export default function AddCake(props) {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();
  useEffect(() => {
    console.log(query.get('cakeid'));
    axios
      .get('https://apifromashu.herokuapp.com/api/cake/' + query.get('cakeid'))
      .then((res) => {
        console.log(res.data.data);
        // setCakeDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [imgUrl, setImgUrl] = useState({
    url: String,
    file: File,
  });
  const [cake, setCake] = useState({
    name: String,
    price: String,
    image: String,
    description: String,
    type: String,
    ingredients: [],
    eggless: Boolean,
    flavour: String,
  });
  var showPreview = (e) => {
    var reader = new FileReader();
    setImgUrl({
      file: e.target.files[0],
    });
    var url = reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = (data) => {
      setImgUrl({
        url: reader.result,
      });
    };
  };
  var ClearImage = () => {
    setImgUrl({
      url: undefined,
      file: null,
    });
  };
  var pushDetails = () => {};
  var getValue = () => {};
  return (
    <div className="container">
      <div className="form-group">
        <img
          src={imgUrl.url}
          height="300"
          width="500"
          className="float right"
          style={{ border: '5px solid black', float: 'right' }}
          alt="Your image preview"
        />
        <input
          type="file"
          accept="image/*"
          onChange={showPreview}
          className="form-control"
        />
        <button className="btn btn-danger" onClick={ClearImage}>
          Clear
        </button>
      </div>
      <div className="form-group">
        <label>Enter Cake name:</label>
        <input class="form-control" onChange={getValue} type="text" />
      </div>
      <div className="form-group">
        <label>Enter Price:</label>
        <input className="form-control" onChange={getValue} type="text" />
      </div>
      <div className="form-group">
        <label>Type:</label>
        <input className="form-control" onChange={getValue} type="text" />
      </div>
      <div className="form-group">
        <label>Flavour:</label>
        <input className="form-control" onChange={getValue} type="text" />
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label bg-success" for="flexRadioDefault1">
          Eggless
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label bg-warning" for="flexRadioDefault2">
          Egg
        </label>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea className="form-control" onChange={getValue}></textarea>
      </div>
      <button onClick={pushDetails} class="btn btn-primary">
        Add Cake
      </button>
    </div>
  );
}
