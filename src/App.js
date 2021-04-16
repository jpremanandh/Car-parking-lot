import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
 import Booking from './booking';
import Cancelling from './Cancelling';
import Slots from './Slots';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path = "/Home" component = {Home}/>
      <Route path = "/Slots" component = {Slots}/>
      <Route path = "/cancelling" component = {Cancelling}/>
      <Route path = "/booking" component = {Booking}/>
    </div>
    </Router>
  );
}

export default App;
