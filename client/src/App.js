import React from 'react';
import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
    
     {/* <Router> */}
        <Navbar />
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sensors" component={Focus} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch> */}
        <Footer />
      {/* </Router>  */}
    </>
  );
}

export default App;
