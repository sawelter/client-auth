import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './components/Login';
import Header from './components/Header';
import AddFriend from './components/AddFriend.js';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}

      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addfriend" component={AddFriend} />
      </Routes>
    </div>
  );
}

export default App;
