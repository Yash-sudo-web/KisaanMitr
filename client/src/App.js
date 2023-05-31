import './App.css';
import Products from './components/Products';
import HeadPage from './components/HeadPage';
import Navbar from './components/Navbar';
import Login from "./components/login";
import { Signup } from './components/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/" element={<HeadPage />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/signup" element={<Signup />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
