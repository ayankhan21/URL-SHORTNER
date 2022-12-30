import React from 'react';

import { Routes , Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbarlink from './components/navbar';

const App = () => {
  
  return (
    <>
    <Navbarlink/>
     <Routes>
       <Route exact path='/' element={<Home/>}></Route>
       <Route exact path='/about' element={<About/>}></Route>
     </Routes>
     {/* <Home/> */}
    </>
  )
}

export default App