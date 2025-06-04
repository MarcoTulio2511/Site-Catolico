import React from 'react';
import './SantosESantidade.css'; // Correção do nome do arquivo


const SantosESantidade = () => {
  return (
    <section className="santos-section">
      <div className="santos-container">
                <div className="santos-right">
            <img src="img/Santos catolicos 2_0.png" alt="Santo" />;
        </div>
        <div className="santos-left">
          <h2>Santos e Santidade</h2>
          <p>
            Explore a vida de homens e mulheres que viveram intensamente a fé cristã e se tornaram modelos de santidade para o mundo inteiro.
          </p>
          <button className="cta-button">Conheça a História</button>
        </div>
      </div>
    </section>
  );
};

export default SantosESantidade;
