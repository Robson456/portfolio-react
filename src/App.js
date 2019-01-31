import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/Home'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar/>
            {/* <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/About' component={About}/>
              <Route path='/Contact' component={Contact}/>
              <Route path='/Projects' component={Projects}/>
            </Switch> */}
            <Home/>
            <Projects/>
            <About/>
            <Contact/>
            
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
