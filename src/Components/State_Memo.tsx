import React from 'react';


interface AppProps{
 
}

const State_Memo:React.FC<AppProps>=()=> {


  return (
   <>
    <div>
      
    </div>
   </>
  )
}

export default State_Memo;

// To avoid re-rendering of the entire functions or variable which does not make the web performance slow
// only when the dependency array updates/changes works the useMemo.
// helps to avoid creating useState unnecessarily with the help of useEffect.

