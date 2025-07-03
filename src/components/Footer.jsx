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
          <h4>Contato</h4>
          <a href="mailto:paxaaeterna@gmail.com?subject=Contato%20do%20site&body=Olá,%20gostaria%20de%20falar%20sobre..." target="_blank" rel="noopener noreferrer">
            paxaaeterna@gmail.com
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
