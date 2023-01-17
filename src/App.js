import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./view/Home/home";
import About from "./view/About/about";
  
function App() {
    
  return (
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}
  
export default App;