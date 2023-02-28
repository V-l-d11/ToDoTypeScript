import React ,{useState, useEffect} from 'react';
import { NavBar } from './components/NavBar';
import {Routes, Route } from 'react-router-dom';
import { TodosPage } from './Pages/TodosPage';
import { AboutPage } from './Pages/AboutPage';


const App:React.FC=() =>{
 

  
  return <>
    <NavBar />
    <div className="container">
      <Routes >
      <Route  path="/" element={<TodosPage />} />
      <Route path="/about" element={<AboutPage />}  />
      </Routes>
    </div>
  </> 
}

export default App;
