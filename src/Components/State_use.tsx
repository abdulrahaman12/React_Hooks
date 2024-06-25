import React from 'react';
import { useState } from 'react';
interface AppProps{
 
}

const State_use:React.FC<AppProps>=()=> {
  const [count,setCount] = useState(0);

  const updateCount = ()=>{
    setCount(count+1);
  }
  return (
    <div>Count:{count}<br/><br/>
    <button onClick={()=>updateCount()}>Increment</button></div>
  )
}

export default State_use;

// useState - State is the any piece of information that change over time across renders in React.