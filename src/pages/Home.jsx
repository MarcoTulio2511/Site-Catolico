import React from 'react';
import Hero from '../components/Home/Hero/Hero.jsx';
import VidaDeCristo from '../components/Home/VidaDeCristo/VidaDeCristo.jsx';
import SantosESantidade from '../components/Home/SantosESantidade/SantosESantidade.jsx';
import DestaquesSantos from '../components/Home/DestaquesSantos/DestaquesSantos.jsx';
import SabedoriaDaFe from '../components/Home/SabedoriaDaFe/SabedoriaDaFe.jsx';

const Home = () => {
  return (
    <div className="page-content">
      <Hero />
      <VidaDeCristo />
      <SantosESantidade />
      <DestaquesSantos />
      <SabedoriaDaFe />
    </div>
  );
};

export default Home;
