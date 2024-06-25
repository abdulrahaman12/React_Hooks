import React from "react";
import { useEffect,useState } from "react";

interface Effect{
    
}

const State_Effect:React.FC<Effect>=()=>{
    const [count,setCount] = useState(0);
    //1.first form of side effect and it is guaranteed to run atleast once when the component mounts i.e when the page loads.
    //2.syntax - Callback function and array
    //3.if array is empty useEffect runs only once and if dependency array state variable is specified then it runs only when the value updates
    //4.Cleanup function -> which cleans up the previous unnecessary data from memory when specifying the setstate.
    useEffect(()=>{
        //code to run 
        console.log("Initial UseEffect Page loads");
        console.log("Updates after cleanup code present here")
        // Optional return function 
        return()=>{
            console.log("Memory cleaned");
        }
    },[])

    // [] - The dependency array 

    const IncCount = ()=>{
        setCount(count+1);
      }
    // const DecCount = ()=>{
    //     setCount(count-1);
    // }
    return <>
    {count}<br/><br/>
    <button onClick={()=>IncCount()}>Increment</button>
    {count}
    {/* <button onClick={()=>DecCount()}>Decrement</button> */}
    </>
}

export default State_Effect;