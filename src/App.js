import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Footer from './components/footer';
import Portal from './components/portal';
import Navbar from './components/navbar'
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div><Navbar /><Portal /><Footer /></div>} />
      </Routes>
    </Router>
  );
}