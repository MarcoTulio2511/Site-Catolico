import React from 'react';
import Hero from '../components/Home/Hero/Hero.jsx';
import VidaDeCristoTimeline from '../components/VidadeCristo/VidaDeCristoTimeline';



const Home = () => {
  return (
    <div className="page-content">
      <Hero />
      <VidaDeCristoTimeline />
    </div>
  );
};

export default Home;
