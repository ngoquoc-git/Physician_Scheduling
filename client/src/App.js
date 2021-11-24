import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Login from "./Components/Login";
import Home from "./Components/Home";
import SearchBar from "./Components/SearchBar";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/search" exact component={SearchBar}/>
      </Switch>
    </Router>
    
  );
}

export default App;
