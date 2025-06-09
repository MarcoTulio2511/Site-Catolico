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
          className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>


        <section className={`menu-dropdown ${menuOpen ? 'show' : ''}`}>
          <div className="menu-list"> <a href="/">Home</a> </div>
          <div className="menu-list"> <a href="/VidadeCristo">Vida de Cristo</a> </div>
          <div className="menu-list"> <a href="/SantosESantidades">Santos e Santidade</a> </div>
          <div className="menu-list"> <a href="/Bibliaonline">Bíblia Online</a> </div>
          <div className="menu-list"> <a href="/Contato">Contato</a> </div>
        </section>

      </div>
    </nav>
  );
}

export default Navbar;
