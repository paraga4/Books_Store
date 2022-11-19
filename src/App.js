import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Login from './Components/Login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import RegistrationForm from './Components/RegistrationForm';
import Products from './Components/Products';
import CardDetails from './Components/CardDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route element={<Home/>} path="/home"></Route>
        <Route element={<RegistrationForm/>} path="/registrationform"></Route>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Products/>} path="/products"></Route>
        <Route element={<CardDetails/>} path="/carddetails/:id"></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
