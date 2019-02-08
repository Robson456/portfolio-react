import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/Home'


class App extends Component {
  render() {
    return (
      <HashRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
            
          </div>
      </HashRouter>
    );
  }
}

export default App;
