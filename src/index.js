import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NotFound from './Pages/404';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Dashboard from './Pages/Dashboard';
import Movies from './Pages/Movies';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Category' element={<Category/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Movie' element={<Movies/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

