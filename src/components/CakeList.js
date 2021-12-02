import Cake from './Cake';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
export default function CakeList(props) {
  const [editable, setEditable] = useState(false);
  const [cakeList, setCakeList] = useState([]);
  const [loading, setLoading] = useState(false);
  var toggleEdit = () => {
    setEditable(!editable);
  };
  useEffect(() => {
    setLoading(true);
    axios({
      url: 'https://apifromashu.herokuapp.com/api/allcakes',
      method: 'GET',
    })
      .then((res) => {
        setLoading(false);
        console.log(res);
        setCakeList(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
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
          {cakeList.map((cake, index) => {
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
