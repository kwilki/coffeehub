import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import SuggestedRecipes from '../Components/SuggestedRecipes';
import RatioCalculator from '../Components/RatioCalculator';
import Account from '../Components/Account';
import Recipes from '../Components/Recipes';
import CreateNewRecipe from '../Components/CreateNewRecipe';
import BrewingInstructions from '../Components/BrewingInstructions';
import RecipeSpotlight from '../Components/RecipeSpotlight';


const App = () => {

  const [ Id, setId ] = useState()
  const [ timezone, setTimezone ] = useState()
  const { user, isAuthenticated } = useAuth0()

  if(isAuthenticated) {
    fetch("http://localhost:8000/Users")
    .then(res => res.json())
    .then(json => getUserId(json))
    .catch("Gracefully handling error")
  }

  let getUserId = (json) => {
    json.find((loggedInUser) => {
      if(loggedInUser.email === user.email) {
        setId(loggedInUser.id)
        setTimezone(loggedInUser.timezone)
        return console.log(loggedInUser.email, loggedInUser.id, loggedInUser.timezone)
      } else return undefined
    })
  }

  // const recipeNavigation = useNavigate()

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/SuggestedRecipes" element={<SuggestedRecipes />} />
          <Route path="/RatioCalculator" element={<RatioCalculator />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Recipes" element={<Recipes userId={Id} />} />
          <Route path="/NewRecipe" element={<CreateNewRecipe userId={Id} timezone={timezone} />} />
          <Route path="/CreateBrewingInstructions" element={<BrewingInstructions />} />
          <Route path="/ViewRecipe" element={<RecipeSpotlight />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App