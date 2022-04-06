import { useEffect, useState } from 'react';
import './App.css';
import Title from './title';

function App() {
  
  const[count,setCount]=useState(0)
  useEffect(()=>
  {
    document.title=`messages ${count}`;
  })

  return (

    <>
    <div className=''>
    <button>count={count}</button>
    <button onClick={()=>setCount(count+1)}>Increase</button>

    <button onClick={()=>setCount(count-1)}>Decrease</button>
    <button onClick={()=>setCount(0)}>reset</button>
    </div>
    </>
  );
}

export default App;
