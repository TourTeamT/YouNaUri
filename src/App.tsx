import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from 'pages/Header/index'
import Place from 'pages/Place';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path='/place' element={<Place />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;