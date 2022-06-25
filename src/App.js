import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Cities from './Pages/Cities';
import NotFound from './Pages/NotFound';
import Roma from './Pages/pagCit/roma';
import Milano from './Pages/pagCit/milano';
import Napoli from './Pages/pagCit/napoli';
import Torino from './Pages/pagCit/torino';
import Contact from './Pages/Contact';
import Footer from './Components/Footer'
import Palermo from './Pages/pagCit/palermo';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/cities' element={<Cities/>}/>
        <Route path='/roma' element={<Roma/>}/>
        <Route path='/milano' element={<Milano/>}/>
        <Route path='/napoli' element={<Napoli/>}/>
        <Route path='/torino' element={<Torino/>}/>
        <Route path='/palermo' element={<Palermo/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        <Route element={<NotFound/>}/>
      </Routes>
      <Footer/>

      
    </BrowserRouter>
  );
}

export default App;
