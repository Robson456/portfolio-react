import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Background from './background.jpg'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
          <img src={Background} alt="Background"/>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/About' component={About}/>
              <Route path='/Contact' component={Contact}/>
              <Route path='/Projects' component={Projects}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
