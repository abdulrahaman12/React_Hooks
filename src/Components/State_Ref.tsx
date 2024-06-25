import React, { useState, useRef, useEffect } from 'react';

interface AppProps {}

const State_Ref: React.FC<AppProps> = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [refVal, setRefVal] = useState<string | undefined>();
 
    // const SetRef = () => {
    //     setRefVal(inputRef.current?.value);
    // };

    useEffect((()=>{
        setRefVal(inputRef.current?.value)
    }),[])
    
    return (
        <>
            <h1>Input Form</h1>
            <p>{refVal}</p>
            <input ref={inputRef} type='text' />
            {/* <button onClick={SetRef}>Set Value</button> */}
        </>
    );
}

export default State_Ref;


// useRef - Whenever the change in state value or event triggers , the component re-renders for every event triggers so useRef helps in resolving this 
// Usage - Mostly used for forms
// useRef renders only when you call it , it will not work as same as state , it will trigger the value and store accordingly but it will render only when you call it.
// access using inputRef.current.value 
// optional chaining - inputRef.current?.value - check if property exists and then it will return a value.

// DOM Manipulation: Directly access and manipulate DOM elements.
// Persisting Mutable Values: Store values that persist across renders without causing re-renders.
// Storing Previous Values: Keep track of previous state or prop values for comparison.
// Avoiding Unnecessary Re-renders: Optimize performance by avoiding re-renders when the stored value changes.

//Reference link - https://www.youtube.com/watch?v=DhOqlEOXlxM&list=PL5mydh8SndyNMhrcuQqY1VY_cVTaoJC5C&index=7

// Functionality Hooks

// 1.useState
// 2.useEffect
// 3.useRef

Performance Hooks

1.useMemo