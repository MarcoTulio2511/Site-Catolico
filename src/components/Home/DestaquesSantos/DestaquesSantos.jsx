import React from 'react';
import './DestaquesSantos.css';

const santos = [
  {
    nome: 'Nossa Senhora da Abadia',
    descricao: 'Padroeira de várias regiões do Brasil, especialmente em Minas Gerais, Nossa Senhora da Abadia é um símbolo de fé e proteção.',
    frase: '“Mãe amorosa, guia-nos no caminho da fé e da esperança.”',
    imagem: 'img/nossa-senhora-abadia.png',
  },
  {
    nome: 'Carlo Acutis',
    descricao: 'Jovem beato conhecido como o “influencer de Deus”.',
    frase: '“A Eucaristia é minha estrada para o céu.”',
    imagem: '/img/carlo-acutis.png',
  },
  {
    nome: 'São Bento',
    descricao: 'Pai do monasticismo ocidental e defensor contra o mal.',
    frase: '“Ora et labora” – Reza e trabalha.',
    imagem: '/img/sao-bento.png',
  },
];

const DestaquesSantos = () => {
  return (
    <section className="destaques-section">
      <h2>Destaques de Santos</h2>
      <div className="cards-container">
        {santos.map((santo, index) => (
          <div className="santo-card" key={index} style={{ backgroundImage: `url(${santo.imagem})` }}>
            <div className="santo-gradient" />
            <div className="santo-content">
              <blockquote className="santo-frase">{santo.frase}</blockquote>
              <p className="santo-descricao">{santo.descricao}</p>
            </div>
          </div>
        ))} 
      </div>
    </section>
  );
};

export default DestaquesSantos;
