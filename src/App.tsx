import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import logo from './assets/logo.png';
import { Contact } from './components/contact/contact';
import { MyLessons } from './components/myLessons/myLessons';
import { Workshops } from './components/workshops/workshops';
import { Login } from './components/login/login';


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <img src={logo} className="logo" alt='logo'></img>
      </div>
      <div>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/MyLessons' element={<MyLessons />} />
          <Route path='/Workshops' element={<Workshops />} />
          <Route path='/Contact' element={<Contact />} />

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
