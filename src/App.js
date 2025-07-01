import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import VidadeCristo from './pages/VidadeCristo';
import Santos from './pages/SantosESantidades';
import SantoDetalhe from './components/SantoDetalhe/SantoDetalhe';
import Biblia from './pages/Bibliaonline';
import Contato from './pages/Contato';
import TesteFirebase from './components/TesteFirebase';
import CatequeseOnline from './pages/CatequeseOnline';
import { LoginCatequista } from './components/CatequeseOnline/LoginCatequista';
import { LoginAluno } from './components/CatequeseOnline/LoginAluno';
import { DashboardCatequista } from './components/CatequeseOnline/DashboardCatequista';
import { DashboardAluno } from './components/CatequeseOnline/DashboardAluno';
import { VideoCallRoom } from './components/CatequeseOnline/VideoCallRoom';


import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Layout> {/* Layout com Navbar dentro */}
        <Routes>
          <Route path="/teste" element={<TesteFirebase />} />
          <Route path="/" element={<Home />} />
          <Route path="/VidadeCristo" element={<VidadeCristo />} />
          <Route path="/SantosESantidades" element={<Santos />} />
          <Route path="/Bibliaonline" element={<Biblia />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/SantoDetalhe/:santoId" element={<SantoDetalhe />} />
          <Route path="/CatequeseOnline" element={<CatequeseOnline />} />
          <Route path="/LoginCatequista" element={<LoginCatequista />} />
          <Route path="/LoginAluno" element={<LoginAluno />} />
          <Route path="/DashboardCatequista" element={<DashboardCatequista />} />
          <Route path="/DashboardAluno" element={<DashboardAluno />} />
          <Route path="/Sala/:salaId" element={<VideoCallRoom />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
