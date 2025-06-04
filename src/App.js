import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import VidadeCristo from './pages/VidadeCristo';
import Santos from './pages/SantosESantidades';
import Biblia from './pages/Bibliaonline';
import Contato from './pages/Contato';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Layout> {/* Layout com Navbar dentro */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/VidadeCristo" element={<VidadeCristo />} />
          <Route path="/SantosESantidades" element={<Santos />} />
          <Route path="/Bibliaonline" element={<Biblia />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
