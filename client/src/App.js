import './App.css';
import HeadPage from './components/HeadPage';
import Navbar from './components/Navbar';
import Login from "./components/login";
import { Signup } from './components/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Bazaar from './components/Bazaar';
import User from './components/User';
import Market from './components/Market';
import Cropchecker from './components/Cropchecker';
//import Marketlist from './components/Marketlist';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
            <Route exact path="/Bazaar" element={<Bazaar />}/>
            {/* //<Route exact path="/Market1" element={<Marketlist />}/> */}
            <Route exact path="/Market" element={<Market/>}/>
            <Route exact path="/Cropchecker" element={<Cropchecker/>}/>
            <Route exact path="/" element={<HeadPage />}/>
            <Route exact path="/User" element={<User />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/signup" element={<Signup />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
