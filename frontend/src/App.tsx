import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import Documents from './Documents';
import Login from './LoginPage';

const App: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/documents' element={<Documents />}/>
        </Routes>
      </BrowserRouter>
    );
};

export default App;
