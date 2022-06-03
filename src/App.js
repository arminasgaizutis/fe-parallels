import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Memorybox from './pages/Memorybox';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Memorybox />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
