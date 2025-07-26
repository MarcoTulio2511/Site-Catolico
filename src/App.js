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
import CatequeseComo from './pages/CatequeseComo';
import CatequeseCatequistas from './pages/CatequeseCatequistas';
import CatequeseAlunos from './pages/CatequeseAlunos';
import CatequeseFAQ from './pages/CatequeseFAQ';
import ScrollToTop from './components/ScrollToTop';



import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Aqui no topo da árvore */}
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
          <Route path="/catequeseonline/como" element={<CatequeseComo />} />
          <Route path="/catequeseonline/catequistas" element={<CatequeseCatequistas />} />
          <Route path="/catequeseonline/alunos" element={<CatequeseAlunos />} />
          <Route path="/catequeseonline/faq" element={<CatequeseFAQ />} />
<Route path="/SantoDetalhe/:id" element={<SantoDetalhe />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
