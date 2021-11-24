import Cake from './Cake';
import React from 'react';
import { useState } from 'react';
export default function CakeList(props) {
  const [editable, setEditable] = useState(false);
  var toggleEdit = () => {
    
    setEditable(!editable);
  };
  return (
    <div>
      <div className="container">
        <button className="btn btn-outline-primary active" onClick={toggleEdit}>
          Edit
        </button>
        <div className="row">
          {props.cakes.map((cake, index) => {
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
