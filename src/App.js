import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import RecipeTile from "./RecipeTile";

function App() {
  
  const [state, setState] = useState("");
  const [recipes, setRecipe] = useState([]);
  const [dropdown, setDropdown] = useState("vegan")

  const url = `https://api.edamam.com/search?q=${state}&app_id=05119407&app_key=71ee628a695a9b0becc4167f2e2ed9a3&calories=591-722&health=${dropdown}`;

  const fetchRecipe = async () => {
      
      const response = await axios.get(url);
      setRecipe(response.data.hits)   
      console.log(response.data.hits);   
  }


  const submitRecipe = (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  return (
    <>
      <div className="app">
        <h1>Food Recipe Plaza</h1>
        <form onSubmit={submitRecipe} className="search_form">
          <input 
            type="text" 
            placeholder="Enter Recipe Ingredient"
            value={state}
            onChange={(e) => setState(e.target.value)} 
            className="searchInput"
          />
          <input
            type="submit"
            value="Search"
            className="searchButton"
          />

          <select className="app_healthLabels">
            <option onClick={() => setDropdown("vegan")}>Vegan</option>
            <option onClick={() => setDropdown("Non-veg")}>Non-veg</option>
          </select>
        </form>

        <div className="app__recipe">
          {
            recipes.map((recipe, ind) => {
             return <RecipeTile recipe={recipe} ind={ind } />
            })
          }
        </div>

        
      </div>
    </>
  );
}

export default App;
