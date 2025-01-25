import "./styles.css";
import {usEffect,useState} from 'react';

export default function App() {
  const [value,setValue]=useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={()=>setValue(value+1)} style={{backgroudColor:"red"}}>Count {value}</button>
    </div>
  );
}
