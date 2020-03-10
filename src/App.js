/** @format */

import React,{useEffect, useState} from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "e053ce49";
  const APP_KEY = "7104f7f24b96c2a57b7ade1afef060ff	";

 const [recipes, setRecipes] = useState([])
 const [search, setSearch]=useState("")
 const [query,setQuery] = useState('chicken')
  useEffect(()=>{
    // console.log('Effect runned')
    getrecipes()
  },[query])
  const getrecipes = async ()=>{
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }
  const updateSearch= e =>{
    setSearch(e.target.value)
    console.log(search)
  }
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch} >
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
  <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
    {recipes.map((recipe)=>(
      <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
    ))}
    </div>
    </div>
  );
}

export default App;
