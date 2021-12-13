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
        setCake(res.data.data);
        setImgUrl(
          {
            ...imgUrl,
            url: res.data.data.image,
          },
          []
        );
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
  var increaseIng = () => {
    var temp = cake.ingredients;
    temp.push('');
    setCake({
      ...cake,
      ingredients: temp,
    });
  };
  var getValue = (e) => {
    console.log(e.target.type);
    if (e.target.type === 'radio') {
      setCake({
        ...cake,
        [e.target.name]: e.target.value == 'true' ? true : false,
      });
    } else {
      if (e.target.name === 'ingredients') {
        var temp = cake.ingredients;
        temp[e.target.id] = e.target.value;
        console.log(temp);
        setCake({
          ...cake,
          ingredients: temp,
        });
      } else {
        setCake({
          ...cake,
          [e.target.name]: e.target.value,
        });
      }

      console.log('else');
    }

    console.log(e.target.value, cake);
  };
  return (
    <div className="container">
      <h6></h6>
      <div className="form-group m-2">
        <img
          src={imgUrl.url ? imgUrl.url : cake.image}
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
      <div className="form-group m-2">
        <label>Enter Cake name:</label>
        <input
          class="form-control"
          onChange={getValue}
          value={cake.name}
          type="text"
          name="name"
        />
      </div>
      <div className="form-group m-2">
        <label>Enter Price:</label>
        <input
          className="form-control"
          onChange={getValue}
          value={cake.price}
          type="text"
          name="price"
        />
      </div>
      <div className="form-group m-2">
        <label>Type:</label>
        <input
          className="form-control"
          onChange={getValue}
          value={cake.type}
          type="text"
          name="type"
        />
      </div>
      <div className="form-group m-2">
        <label>Flavour:</label>
        <input
          className="form-control"
          onChange={getValue}
          value={cake.flavour}
          type="text"
          name="flavour"
        />
      </div>
      <div class="form-check m-2">
        <input
          class="form-check-input"
          type="radio"
          name="eggless"
          id="flexRadioDefault1"
          value={true}
          checked={cake.eggless}
          onChange={getValue}
        />
        <label class="form-check-label bg-success mt-2" for="flexRadioDefault1">
          Eggless
        </label>
      </div>
      <div class="form-check m-2">
        <input
          class="form-check-input"
          type="radio"
          name="eggless"
          id="flexRadioDefault2"
          value={false}
          checked={!cake.eggless}
          onChange={getValue}
        />
        <label class="form-check-label bg-warning" for="flexRadioDefault2">
          Egg
        </label>
      </div>
      <div className="form-group m-2">
        <label>Description:</label>
        <textarea
          className="form-control"
          onChange={getValue}
          value={cake.description}
          name="description"
        ></textarea>
      </div>
      <div className="form-group m-2">
        <label>Ingredients</label>
        <div class="row">
          {cake.ingredients?.map((data, index) => {
            return (
              <input
                style={{ width: '200px' }}
                type="text"
                className="form-control m-1"
                value={data}
                name="ingredients"
                onChange={getValue}
                id={index}
                key={index}
              />
            );
          })}{' '}
          <button
            onClick={increaseIng}
            style={{ width: '40px', height: '40px' }}
            class="btn btn-secondary m-1"
          >
            +
          </button>
        </div>
      </div>
      <button onClick={pushDetails} class="btn btn-primary">
        Add Cake
      </button>
    </div>
  );
}
