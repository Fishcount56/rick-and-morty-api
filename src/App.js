import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Dashboard from './components/dashboard';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Dashboard />}/>
    </Routes>
  );
}

export default App;
