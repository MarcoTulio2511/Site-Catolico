import React from 'react';
import './VidaDeCristo.css'; // Correção do nome do arquivo

const VidaDeCristo = () => {
  return (
    <section className="vida-section">
      <div className="vida-container">
        <div className="vida-left">
          <h2>A Vida de Cristo</h2>
          <p>
            Conheça a trajetória de Jesus Cristo desde seu nascimento até a ressurreição. Uma jornada marcada por milagres, ensinamentos e amor incondicional.
          </p>
          <button className="cta-button">Conheça a História</button>
        </div>
        <div className="vida-right">
          <img src="/img/JESUS-FLOREST.png" alt="Santo" />

        </div>
      </div>
    </section>
  );
};

export default VidaDeCristo;
