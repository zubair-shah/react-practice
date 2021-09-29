
import {useContext}  from "react";
import Mycontext from "./context/Context";

export default function Section(){
   let CounterValue = useContext(Mycontext)
   console.log(CounterValue)
    return(

        <div>
        <h1>the value is : {CounterValue[0]}</h1>
        <button onClick={()=> {CounterValue[1](++CounterValue[0])}}>Click to increase</button>
        </div>

    )
}