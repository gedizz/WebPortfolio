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

  const mode = isDarkMode ? 'dark' : 'light';

  return (
    <div className={mode}>
      <RouterNav colorMode={mode} darkModeHandler={toggleDarkMode}/>
      <Routes>
        <Route path="/" element={<Homepage colorMode={mode}/>}></Route>
        <Route path="/recipe-list" element={<RecipeList colorMode={mode}/>}></Route>
        <Route path="/add-recipe" element={<AddRecipe colorMode={mode}/>}></Route>
      </Routes>
    </div>
    
    
  );
}

export default App;
