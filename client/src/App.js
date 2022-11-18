
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { userCurrent } from "./redux/userSlice/userSlice";
import Home from './components/Home';
import Navbar from './components/Navbar';





function App() {
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }

})
  return (

    <div className="App">
    <Home/>

      
      
      
    
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/navbar" element={<Navbar />}></Route>
     

    </Routes>
    
</div>

  );
}

export default App;
