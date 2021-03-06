import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Homepage/Home";
import Details from "./Components/Details/Details";
import Title from "./Components/Title/Title";
import {Navbar ,Container} from 'react-bootstrap'

function App() {

  return (
    <div className="App">
      <Navbar  expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#"><h1>Blog App</h1></Navbar.Brand>
        </Container>
        <Navbar.Text>
      <h2>Welcome</h2>
    </Navbar.Text>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}>
            
          </Route>
          <Route path="/Home" exact>
            <Home />
          </Route>
          <Route path="/landing" exact component={Details}/>
            
            {/* <Details />
          </Route> */}
          <Route path="/title" exact><Title/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
