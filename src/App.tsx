import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from 'pages/MyPage';
import UserSelect from 'pages/user-select';
import Place from 'pages/user-select/place';
import Plan from 'pages/user-select/plan';
import Partner from 'pages/user-select/partner';
import Map from 'pages/Map';
import Login from 'pages/Auth/Login';
import Header from 'pages/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Header />}>
            <Route path='/user-select' element={<UserSelect />}>
              <Route path='partner' element={<Partner />} />
              <Route path='place' element={<Place />} />
              <Route path='plan' element={<Plan />} />
            </Route>
            <Route path='/myPage' element={<MyPage/>} />
          </Route>
          <Route path='/map' element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;