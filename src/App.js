/** @format */

import React,{useEffect, useState} from "react";
import "./App.css";

function App() {
  const APP_ID = "e053ce49";
  const APP_KEY = "7104f7f24b96c2a57b7ade1afef060ff	";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [counter, setCounter] = useState(0)
  useEffect(()=>{
    console.log('Effect runned')
  })

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
  <button type="submit"className="searh-button">Search</button>
      </form>
  <h1  onClick={()=> setCounter(counter +1)} >{counter}</h1>
    </div>
  );
}

export default App;
