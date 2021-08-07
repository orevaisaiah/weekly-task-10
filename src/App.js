import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  const linkStyle= {
    textDecoration: 'none', 
    color: 'white',
    margin: '60px',
    fontSize: '30px',
    fontWeight: 'bold',
  
  
  }
  return (
    <div className="App">
      <div className="nav-container">
        <nav className="navigator">
          <Link style={linkStyle } to="/">HOME</Link>
          <Link style={linkStyle} to="/about">ABOUT</Link>
          <Link style={linkStyle} to="/contact">CONTACT</Link>
          <Link style={linkStyle} to="/login">LOGIN</Link>
        </nav>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
