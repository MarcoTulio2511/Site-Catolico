import React, { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    image: '/img/slide1.png',
    text: '“O Senhor é o meu pastor, nada me faltará.” – Salmo 23:1',
  },
  {
    id: 2,
    image: '/img/slide2.png',
    text: '“Tudo posso naquele que me fortalece.” – Filipenses 4:13',
  },
  {
    id: 3,
    image: '/img/slide3.png',
    text: '“Porque sou eu que conheço os planos que tenho para vocês.” – Jeremias 29:11',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // muda a cada 7s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h2>{slide.text}</h2>
          </div>
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
