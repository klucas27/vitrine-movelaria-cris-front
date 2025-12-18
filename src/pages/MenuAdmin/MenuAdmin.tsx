import React from 'react';
import { Link } from 'react-router-dom';
import './MenuAdmin.css';

const MenuAdmin: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2 mb-4">
      <span className="navbar-brand">Administração Vitrine Cris</span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/cadastrar-produto">Cadastrar Produto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/produtos">Listar Produtos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Sair</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuAdmin;
