import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Products from './pages/Products'
import Contacts from './pages/Contacts'

import Login from './pages/Login'
import CadastroProduto from './pages/CreateProducts'
import MenuAdmin from './pages/MenuAdmin/MenuAdmin'
import ListProductCreat from './pages/ListProductCreat'


function AppContent() {
  const location = useLocation();
  const showNavbar = ["/", "/produtos", "/contato"].includes(location.pathname);
  const showMenuAdmin = ["/admin", "/cadastrar-produto", "/menu-admin", "/admin/produtos"].includes(location.pathname);
  // Não mostrar Navbar em /admin/produtos
  const hideNavbar = location.pathname === "/admin/produtos";
  return (
    <div className="min-vw-100 p-0 m-0">
      {showNavbar && !hideNavbar && <Navbar />}
      {showMenuAdmin && <MenuAdmin />}
      <div className="container-fluid p-0 m-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/contato" element={<Contacts />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/cadastrar-produto" element={<CadastroProduto />} />
          <Route path="/menu-admin" element={<div />} />
          <Route path="/admin/produtos" element={<ListProductCreat />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;