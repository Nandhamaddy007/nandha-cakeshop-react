import {useState, useEffect} from 'react'
export default function Counter(){
    const [counter,setCounter]=useState(0)
    useEffect(()=>{},[])
    function increment(){
        setCounter(counter+1)
    }
    return(
        <div>
            <button onClick={increment}>Click me!</button>
            <h1>Counter:{counter}</h1>
        </div>
    )

}