import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-banner">
        <img src="/img/img-footer.png" alt="Faixa decorativa" />
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <img src="/img/1.svg" alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-column">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/VidadeCristo">Vida de Cristo</a></li>
            <li><a href="/SantosESantidades">Santos e Santidades</a></li>
            <li><a href="/Bibliaonline">Bíblia Online</a></li>
            <li><a href="/Contato">Contato</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Instagram</h4>
          <a href="https://instagram.com/seu_perfil" target="_blank" rel="noopener noreferrer">
            @seu_perfil
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
