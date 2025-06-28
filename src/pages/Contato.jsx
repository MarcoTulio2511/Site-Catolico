import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import './Contato.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contatos'), {
        ...formData,
        dataEnvio: serverTimestamp(),
      });
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatus('Erro ao enviar. Tente novamente.');
    }
  };

  return (
    <div className="contato-container">
      <div className="contato-form">
        <h1>Entre em Contato</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Telefone</label>
          <input
            type="tel"
            name="telefone"
            placeholder="(xx) xxxxx-xxxx"
            value={formData.telefone}
            onChange={handleChange}
          />

          <label>Mensagem</label>
          <textarea
            name="mensagem"
            placeholder="Digite sua mensagem"
            rows="6"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
          {status && <p className="status">{status}</p>}
        </form>
      </div>

      <div className="contato-logo">
        <img src="/img/1.svg" alt="Logo do site" />
      </div>
    </div>
  );
}

export default Contato;
