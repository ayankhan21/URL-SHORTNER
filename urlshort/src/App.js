import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbarlink from './components/navbar';

const App = () => {

  return (
    <>
      <Navbarlink />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App