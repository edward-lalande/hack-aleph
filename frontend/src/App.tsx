import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import Documents from './Documents';

const App: React.FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/documents' element={<Documents />}/>
        </Routes>
      </BrowserRouter>
    );
};

export default App;
