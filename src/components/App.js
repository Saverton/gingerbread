import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Houses from './Houses';
import Home from './Home';
import Contestants from './Contestants';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/gingerbread' element={<Home />}></Route>
        <Route path="/contestants/:id" element={<Contestants />}></Route>
        <Route path="/houses/:id" element={<Houses />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
