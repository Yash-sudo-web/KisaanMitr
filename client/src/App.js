import './App.css';
import Products from './components/Products';
import HeadPage from './components/HeadPage';
import Navbar from './components/Navbar';
import Login from "./components/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
        <Switch>
            <Route exact path="/products">
                <Products />
            </Route>
            <Route exact path="/">
                <HeadPage />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
