import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSelect from 'pages/user-select';
import Place from 'pages/user-select/place';
import Plan from 'pages/user-select/plan';
import Partner from 'pages/user-select/partner';
import Login from 'pages/Auth/Login';
import DateChoice from 'pages/Ready/dateChoice';
import './App.css';
import Header from 'pages/Header/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dateChoice" element={<DateChoice />} />
          <Route path="/" element={<MainPage />} />
          <Route path='/user-select' element={<UserSelect />}>
            <Route path='partner' element={<Partner />} />
            <Route path='place' element={<Place />} />
            <Route path='plan' element={<Plan />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;