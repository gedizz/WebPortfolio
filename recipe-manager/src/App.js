import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterNav from './Components/RouterNav.js';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Components/Homepage.js';
import RecipeList from './Components/RecipeList.js';
import AddRecipe from './Components/AddRecipe.js';
import { useState } from 'react';


function App() {

  // Prop drilling for dark-light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

  }

  return (
    <div className="App">
      <RouterNav isDarkMode={isDarkMode} darkModeHandler={toggleDarkMode}/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/recipe-list" element={<RecipeList />}></Route>
        <Route path="/add-recipe" element={<AddRecipe />}></Route>
      </Routes>
    </div>
    
    
  );
}

export default App;
