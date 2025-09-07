import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import Products from './pages/products'
import Contacts from './pages/contacts'

function App() {
  return (
    <div className="bg-dark min-vw-100 p-0 m-0">
      <Router>
        <Navbar />
        <div className="container-fluid p-0 m-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/contato" element={<Contacts />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;