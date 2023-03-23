import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import logo from './assets/logo.png';
import { Contact } from './components/contact/contact';
import { MyLessons } from './components/myLessons/myLessons';
import { Workshops } from './components/workshops/workshops';
import { Login } from './components/login/login';
import { Signup } from './components/login/signup';
import { Main } from './components/main/main';
import axios from 'axios';


function App() {

  const [data, setData] = React.useState(null);
  useEffect(() => {
    axios.get('api/get')
      .then((data) => {
        setData(data.data);
      })
      .catch((e) => {
        return e;
      });
  }, []);


  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
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
          <Route path="/Signup" element={<Signup />} />
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
