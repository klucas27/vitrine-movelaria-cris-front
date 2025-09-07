import './style/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';
import logo from '../logo192.png'; // Importa a imagem

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-myedit">
      <div className="container-fluid">
        <img
          src={logo}
          alt="Logo Movelaria Cris"
          width={48}
          height={48}
          className="navbar-logo"
        />
        {/* <span className="navbar-brand text-white fw-bold">Movelaria Cris Planejados</span> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <span></span>
          </span>
        </button>
        <div className="collapse navbar-collapse menu-myedit" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => `${isActive ? 'active-menu' : ''} nav-link text-white`}>Início</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/produtos" className={({ isActive }) => `${isActive ? 'active-menu' : ''} nav-link text-white`}>Produtos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contato" className={({ isActive }) => `${isActive ? 'active-menu' : ''} nav-link text-white`}>Contato</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;