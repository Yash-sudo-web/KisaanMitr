import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import './App.css';
import HeadPage from './components/HeadPage';
import Navbar from './components/Navbar';
import Login from "./components/login";
import Community from './components/Community';
import { Signup } from './components/Signup';
import {Bazaar} from './components/Bazaar';
import {User} from './components/User';
import {Market} from './components/Market';
import {Cropchecker} from './components/Cropchecker';



function App() {
  const PrivateRoute = ({ path, element }) => {
    const token = localStorage.getItem('token');
  
    // If token is not present, redirect to the registration page
    if (!token) {
      return <Navigate to="/login" replace />;
    }
  
    // Otherwise, render the provided element
    return element;
  };
  
  const PublicRoute = ({ path, element }) => {
    const token = localStorage.getItem('token');
  
    // If token is present, redirect to the sidebar
    if (token) {
      return <Navigate to="/User" replace />;
    }
  
    // Otherwise, render the provided element
    return element;
  };
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
            <Route exact path="/community" element={<Community />}/>
            <Route exact path="/Bazaar" element={<Bazaar />}/>
            <Route exact path="/Market" element={<Market/>}/>
            <Route exact path="/Cropchecker" element={<Cropchecker/>}/>
            <Route exact path="/" element={<HeadPage />}/>
            <Route exact path="/User" element={<PrivateRoute element={<User />} />} />
            <Route exact path="/login" element={<PublicRoute element={<Login />} />} />
            <Route exact path="/signup" element={<PublicRoute element={<Signup />} />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
