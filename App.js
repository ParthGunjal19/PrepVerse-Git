import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import About from './AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
