import React,{useState} from 'react';

function Counter(){

  const [count,setCount]=useState(0);

  const increment =()=>{
    setCount(count+1)
  }
    const decrement =()=>{
      setCount(count-1)
  }
  const reSet =()=>{
    setCount(0);
}
return(<div className="counter-container">
  <p className="count-display">{count}</p>
  <button className="counter-button" onClick={decrement}>Drecrement</button>
  <button className="counter-button" onClick={reSet}>Reset</button>
  <button className="counter-button" onClick={increment}>Increment</button>
      
</div>)

}
export default Counter