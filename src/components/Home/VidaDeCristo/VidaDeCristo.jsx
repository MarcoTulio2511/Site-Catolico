import React from 'react';
import './VidaDeCristo.css';
import { Link } from 'react-router-dom';


const VidaDeCristo = () => {
  return (
    <section className="vida-section">
      <div className="vida-container">
        <div className="vida-left">
          <h2>A Vida de Cristo</h2>
          <p>
            Conheça a trajetória de Jesus Cristo desde seu nascimento até a ressurreição. Uma jornada marcada por milagres, ensinamentos e amor incondicional.
          </p>
          <Link to="/VidadeCristo">
            <button className="cta-button">Saiba mais</button>
          </Link>
        </div>
        <div className="vida-right">
          <img src="/img/JESUS-FLOREST.png" alt="Santo" />

        </div>
      </div>
    </section>
  );
};

export default VidaDeCristo;
