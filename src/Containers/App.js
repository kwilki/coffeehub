import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import SuggestedRecipes from '../Components/SuggestedRecipes';
import RatioCalculator from '../Components/RatioCalculator';
import Account from '../Components/Account';


const App = (props) => {

return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={Home()}/>
          <Route path="/SuggestedRecipes" element={<SuggestedRecipes />}/>
          <Route path="/RatioCalculator" element={<RatioCalculator />}/>
          <Route path="/Account" element={<Account />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App