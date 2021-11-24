import Cake from './Cake'
import React from 'react';
export default function CakeList(props){
    return(
<div>
<div className="container">
          <div className="row">
        {props.cakes.map((cake)=>{
            return <Cake cake={cake} />
        })}
</div>
</div>
</div>
    )
}