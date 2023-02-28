import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Private, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Header from './components/Header';
import AddFriend from './components/AddFriend.js';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/friends/add" element={<AddFriend/>} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
