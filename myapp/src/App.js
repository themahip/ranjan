import React from 'react';
import logo from './logo.svg';
import Login from './component/login/login';
import Register from './component/register/register';
import Home from './component/home/home';
import Post from './component/post_upload/post_upload';

import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import './App.css';

function App() {
  let params=useParams()
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/post' element={<Post/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
