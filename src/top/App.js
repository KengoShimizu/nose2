import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Top from './Top';
import Confirm from '../confirm/Confirm';
import Payment from '../payment/Payment';
import Footer from '../common/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Top}/>
            <Route path='/Confirm' component={Confirm}/>
            <Route path='/Payment' component={Payment}/>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
