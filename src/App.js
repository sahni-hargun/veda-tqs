import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Practice from "./Practice";
import Member from "./Member";
import Alumini from "./Alumini";
import JoinUs from "./JoinUs";
import './App.css';

function App() {
      return (
         <Router>
          <Navbar />
          <Switch>
	         <Route exact path="/" component={Home} />
	         <Route exact path="/practice" component={Practice} />
            <Route exact path="/member" component={Member} />
            <Route exact path="/alumini" component={Alumini} />
            <Route exact path="/joinus" component={JoinUs} />
          </Switch>
          <Footer />
         </Router>
      );
}

export default App;
