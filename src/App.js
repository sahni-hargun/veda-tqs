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
	         <Route path="/" exact component={Home} />
	         <Route path="/practice" component={Practice} />
           <Route path="/member" component={Member} />
           <Route path="/alumini" component={Alumini} />
           <Route path="/joinus" component={JoinUs} />
          </Switch>
          <Footer />
         </Router>
      );
}

export default App;
