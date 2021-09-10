
import React from 'react';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import SmoothScroll from './components/SmoothScroll';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
   <NavMenu/>
  <SmoothScroll>
  <Switch>
    <Route path='/about'> <About/></Route>
    <Route path='/projects'><Project/></Route>
    <Route path='/contact'> <Contact/></Route>
    <Route path='/'> <Home/></Route>
    </Switch>
    <Footer/>
    </SmoothScroll>
    </Router>

  );
}

export default App;
