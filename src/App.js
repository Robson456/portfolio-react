import React, { Component } from 'react';
import { BrowserRouter, Route,} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ThankYou from './components/ThankYou'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/thankyou' component={ThankYou}/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
