import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from 'pages/MyPage';
import UserSelect from 'pages/user-select';
import Place from 'pages/user-select/place';
import Plan from 'pages/user-select/plan';
import Partner from 'pages/user-select/partner';
import Time from 'pages/user-select/time';
import Login from 'pages/Auth/Login';
import Map from 'pages/Map';
import Header from 'pages/Header';
import './App.css';
import Intend from 'pages/MyPage/Intend';
import Past from 'pages/MyPage/Past';

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
              <Route path='time' element={<Time />} />
            </Route>
            <Route path='/myPage' element={<MyPage />}>
              <Route path='past' element={<Past />} />
            </Route>
            <Route path='/map' element={<Map />} />
          </Route >
        </Routes>
        </div>
     </Router>
  )
}

export default App;