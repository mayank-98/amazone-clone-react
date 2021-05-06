import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"

function App() {
  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route exact path = "/checkout">
          <Header />
            <h1>check</h1>
          </Route>
          <Route exact path = "/login">
            <h1>login</h1>
          </Route>
          <Route path = "/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
