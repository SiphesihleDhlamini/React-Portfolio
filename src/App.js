import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NavHeader from './components/NavHeader'

function App() {
  return (
    <div>
      <Router>
        <NavHeader/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route> 
          <Route exact path='/Contact'>
            <Contact/>
          </Route>   
          <Route exact path='/About'>
            <About/>
          </Route>
        </Switch> 
      </Router>
    </div>
    
  );
}

export default App;
