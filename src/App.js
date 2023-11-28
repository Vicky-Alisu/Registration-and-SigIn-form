import React from "react";
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from "./components/SignIn";
import Registration from "./Registration";
import Dashboard from "./components/Dashboard";



const App = () => {
  return (
    
    
    <Routes>
      <Route exact path='/Registration' element={<Registration/>}/>

      <Route exact path='/SignIn' element={<SignIn/>}/>
     
      <Route exact path='/Dashboard' element={<Dashboard/>}/>
     
      

      
    </Routes>
    
    
  );
}

export default App;
















