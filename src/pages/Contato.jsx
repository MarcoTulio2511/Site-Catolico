import React from 'react';
import '../components/Navbar.css';
import '../components/Footer.css';
import './Contato.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contato() {
  return (
    <>


      <div className="contato-container">
        <div className="contato-form">
          <h1>Entre em Contato</h1>
          <form>
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" required />

            <label>Email</label>
            <input type="email" placeholder="Seu email" required />

            <label>Telefone</label>
            <input type="tel" placeholder="(xx) xxxxx-xxxx" />

            <label>Mensagem</label>
            <textarea placeholder="Digite sua mensagem" rows="6" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className="contato-logo">
          <img src="/img/1.svg" alt="Logo do site" />
        </div>
      </div>


    </>
  );
}
