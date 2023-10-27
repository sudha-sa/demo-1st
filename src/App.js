
// import './App.css';
// import Header from './components/Header.js'
// import { useEffect, useState } from 'react';


// function App() { 
//   const x = 10;
//   function updateState(){
//     x = 15;
//   }
//   console.log(x)
//   return (
//     // <div className="App">
//     //   <h1> I am Sudha Sahu...</h1>
//     //   <p>This is my first React Js. Project</p>
//     //   <p>{5 + 5}</p>
//     //   <p>{(x)<15? "greater" : "amaller"}</p>
//     // </div>

//   //  <>
//   //   <Header name = "siya"/>
//   //   <Header name = "sona"/>
//   //   <Header name = "sam"/>
//   //  </>

//     <>
//     <h1>learning state {x}</h1>
//     <button onClick={updateState}>click me</button>
//     </>

//   );
// }

// export default App;

//state - hook
// import {UseState, UseEffect, React} from 'react';

// function App() {
//   const [count, setcounter] = useState(0)
//   const [data,setData] = useState("Ram")
//   useEffect( ()=>{
//     console.log("component mounted")
//   },[data])

//   function updateCount(){
//     setcounter(count +1)
//   }
//   function updateData(){
//     setData("Sita")
//   }
//   return (
//     <>
// <h1>botton clicked {count} time</h1>
// <button onClick={updateCount}>click</button>
// <button onClick={updateData}>update Data</button>
//     </>
//   )
// }
// export default App;


// import { useRef } from 'react';
// function App(){
//   const refElement = useRef("");
//   const [name,setName] = useState("yoshita")
//   console.log(refElement)
//   function Reset(){
//     setName("")
//     refElement.current.focus()
//   }
//   function handleInput(){
//     refElement.current.style.color = "blue";
//     refElement.current.value = "yani"
//   }
//   return(
// <>
// <h1>learning ref</h1>
// <input ref={refElement} type='text' value ={name} onChange={(e)=>setName(e.target.value)}></input>
// <button onClick={Reset}>Reset</button>
// <button onClick={handleInput}>handle Input</button>
// </>
//   )
// }
// export default App;


// //props drilling
import './App.css';
import ChildA from './components/ChildA';
import React, {createContext} from 'react';

const data = createContext()
const data1 = createContext()

function App(){
  const name = "yosita"
  const gender = "female"
  return(
<>
<data.Provider value={name}>
  <data1.Provider value={gender}>
{/* <ChildA name = {name}/> */}
<ChildA/>
</data1.Provider>
</data.Provider>
</>
  )
}
export default App;
export{data, data1};

//context Api
//create, provider, consumer
// use context hook