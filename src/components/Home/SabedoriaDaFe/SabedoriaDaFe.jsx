import React from 'react';
import './SabedoriaDaFe.css';

const noticias = [
  {
    titulo: 'Domingo da Ascensão do Senhor',
    descricao: 'A Solenidade da Ascensão do Senhor é um momento de contemplação e ação. Celebramos a glorificação de Jesus, que, após cumprir sua missão terrena,',
    link: 'https://www.fecatolica.com.br/noticias/domingo-da-ascensao-do-senhor/',
    imagem: '/img/noticia1.jpg',
  },
  {
    titulo: 'Papa Leão XIV: com Maria, percorramos nosso caminho em seguimento a Jesus',
    descricao: 'Vejamos “nossa existência como um caminho em seguimento a Jesus, a ser percorrido, como fizemos nesta noite, junto com Maria.',
    link: 'https://www.vaticannews.va/pt/papa/news/2025-05/leao-xiv-terco-jardins-vaticanos-conclusao-mes-mariano-31-maio.html',
    imagem: '/img/noticia2.jpeg',
  },
  {
    titulo: 'Onde está o véu da Virgem Maria e qual é a relação com a Festa da Visitação?',
    descricao: 'Uma antiga tradição diz que na Anunciação-Encarnação de Cristo, a Virgem Maria usava um véu, que teria usado também ao ir "às pressas" para ajudar a sua prima Isabel.',
    link: 'https://www.acidigital.com/noticia/55285/onde-esta-o-veu-da-virgem-maria-e-qual-e-a-relacao-com-a-festa-da-visitacao?',
    imagem: '/img/noticia3.webp',
  },
  {
    titulo: 'Indígenas pedem que papa Leão XIV devolva artefatos mantidos no Vaticano',
    descricao: 'Críticos pontuam que são relíquias levadas pela Igreja Católica Romana há um século como troféus de missionários em terras distantes',
    link: 'https://www.cnnbrasil.com.br/internacional/indigenas-pedem-que-papa-leao-xiv-devolva-artefatos-mantidos-no-vaticano/',
    imagem: '/img/noticia4.webp',
  }
];

const SabedoriaDaFe = () => {
  return (
    <section className="sabedoria-section">
      <h2>Sabedoria da Fé</h2>
            <p>Aprofunde seus conhecimentos com reflexões espirituais, ensinamentos teológicos e artigos que fortalecem a fé. Encontre respostas para suas dúvidas e descubra novas formas de viver o Evangelho no dia a dia.</p>
      <div className="noticias-grid">
        {noticias.map((noticia, index) => (
          <a
            className="noticia-card"
            key={index}
            href={noticia.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundImage: `url(${noticia.imagem})` }}
          >
            <div className="overlay">
              <h3>{noticia.titulo}</h3>
              <p>{noticia.descricao}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SabedoriaDaFe;
