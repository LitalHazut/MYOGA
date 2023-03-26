import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import logo from './assets/logo.png';
import { Contact } from './components/contact/contact';
import { MyLessons } from './components/myLessons/myLessons';
import { Workshops } from './components/workshops/workshops';
import { Login } from './components/login/login';
import { Main } from './components/main/main';
import axios from 'axios';
import { Gallery } from './components/gallery/gallery';
import { fetchTasks } from './accounts-service';


function App() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetchTasks()
      .then((data) => {
        setData(data.data.accounts);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
        <img src={logo} className="logo" alt='logo'></img>

      </div>
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/MyLessons' element={<MyLessons />} />
          <Route path='/Workshops' element={<Workshops />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
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
