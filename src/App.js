import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import LoggedIn from './pages/LoggedIn/LoggedIn';
import MyAccount from './pages/MyAccount/MyAccount';


const App = () => (
  <Router>
      <main>
        <Routes>
        <Route exact path='/' element={< HomePage />}></Route>
        <Route exact path='/login' element={< LogIn />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/loggedin' element={< LoggedIn />}></Route>
        <Route exact path='/myaccount' element={< MyAccount />}></Route>
        </Routes>
        </main>
    
    <Footer />    
</Router>
)

export default App;
