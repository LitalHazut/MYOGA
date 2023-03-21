import React from 'react';
import './App.css';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import logo from './assets/logo.png';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { MyLessons } from './components/myLessons/myLessons';
import { Workshops } from './components/workshops/workshops';

function App() {
  return (
    <div className="App">

      <div>
        <Navbar />
        <img src={logo} alt='logo'></img>
      </div>
      <div>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/MyLessons' element={<MyLessons />} />
          <Route path='/Workshops' element={<Workshops />} />
        </Routes>
      </div>

    </div>
  )
}

export const SpecialApp = () => {
  return (
    <div>
      <App />
    </div>
  )
}

export default App;
