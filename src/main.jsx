import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Lodging from './pages/lodging/lodging'
import About from './pages/About/About'
import Error from './pages/Error-page/Error-page'
import "./main.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging/" element={<Lodging />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)