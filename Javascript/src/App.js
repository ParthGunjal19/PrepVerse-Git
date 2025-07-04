import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home  from './Home';
import About from './About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>  
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/yash" element={<About/>}/>
      </Routes>
    </Router>


    </>
    
    
  );
}

export default App;
