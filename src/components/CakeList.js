import Cake from './Cake'
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