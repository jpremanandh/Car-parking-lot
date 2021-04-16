import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Home() {
  return(
    <Router>
    <div>
        <h1> Welcome to car booking system </h1>
        <div>
          <Link to = "/booking">
          <Button variant="outline-primary"> For Booking Click here!
          </Button>
          </Link>
          <br></br>
          <Link to = "/cancelling">
          <Button variant="outline-primary"> For Cancelling Click here!
          </Button>
          </Link>
        </div>
      </div>
      </Router>
  );
}
export default Home