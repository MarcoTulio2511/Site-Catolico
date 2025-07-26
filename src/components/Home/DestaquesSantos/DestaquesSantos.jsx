import React, { useEffect, useRef, useState } from 'react';
import './DestaquesSantos.css';
import { santosData } from '../../Santos/Santos'; 
import { useNavigate } from 'react-router-dom';

const DestaquesSantos = () => {
  const carrosselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  if (carrosselRef.current) {
    carrosselRef.current.scrollLeft = 0; // 👈 força a posição inicial para o primeiro card
  }

  const intervalo = setInterval(() => {
    if (!isPaused && carrosselRef.current) {
      carrosselRef.current.scrollBy({
        left: carrosselRef.current.offsetWidth / 3,
        behavior: 'smooth'
      });

      if (
        carrosselRef.current.scrollLeft + carrosselRef.current.offsetWidth >=
        carrosselRef.current.scrollWidth
      ) {
        carrosselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  }, 5000);

  return () => clearInterval(intervalo);
}, [isPaused]);


  return (
    <section className="destaques-section">
      <h2></h2>
      <div
        className="carrossel-horizontal"
        ref={carrosselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {santosData.map((santo, index) => (
          <div
            className="santo-card"
            key={index}
            style={{ backgroundImage: `url(${santo.imagem})` }}
            onClick={() => navigate(`/SantoDetalhe/${santo.id}`)}
          >
            <div className="santo-gradient" />
            <div className="santo-content">
              <blockquote className="santo-frase1">{santo.frase}</blockquote>
              <p className="santo-descricao1">{santo.nome}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestaquesSantos;
