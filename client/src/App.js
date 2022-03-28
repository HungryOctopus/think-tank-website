import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';

function App() {
  // //const [offsetY, setoffsetY] = useState(0); // const of the length of the page

  // const handleScroll = () => setoffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      <Router>
        <Navbar />
        <p className="text-blue-500 text-lg"> Tailwind test </p>
        <Homepage />
        {/* <Routes>
          <Route path="/" exact component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Routes> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
