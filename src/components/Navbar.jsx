import React, { useState } from 'react';
import './Navbar.css'; // vamos criar o CSS separado

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar-container">
      {/* Logo esquerda */}
      <div className="navbar-logo">
        <img
          src="/img/logo_principal.svg" 
          alt="Logo"
          className="logo-img"
        />
      </div>

      {/* Barra de pesquisa centralizada */}
      <div className="navbar-search">
        <input
          type="search"
          placeholder="Pesquisar artigos, histórias, versículos e mais..."
          className="search-input"
        />
      </div>

      {/* Menu hambúrguer direita */}
      <div className="navbar-menu">
        <button 
          className="hamburger-btn" 
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </button>

        {/* Dropdown do menu */}
        {menuOpen && (
          <ul className="menu-dropdown">
            <li><a href="/">Home</a></li>
            <li><a href="/VidadeCristo">Vida de Cristo</a></li>
            <li><a href="/SantosESantidades">Santos e Santidade</a></li>
            <li><a href="/Bibliaonline">Bíblia Online</a></li>
            <li><a href="/Contato">Contato</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
