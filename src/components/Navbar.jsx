import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { nomesLivrosVelhoTestamento, nomesLivrosNovoTestamento } from '../utils/livrosBiblia';
import { santosData } from './Santos/Santos';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const [bibliaCompleta, setBibliaCompleta] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  const livrosBiblia = [
    ...Object.entries(nomesLivrosVelhoTestamento).map(([abrev, nome]) => ({ nome, abrev })),
    ...Object.entries(nomesLivrosNovoTestamento).map(([abrev, nome]) => ({ nome, abrev })),
  ];

  useEffect(() => {
    fetch('/biblia/acf.json')
      .then(res => res.json())
      .then(data => setBibliaCompleta(data))
      .catch(err => console.error("Erro ao carregar a Bíblia:", err));
  }, []);

  useEffect(() => {
    if (busca.trim() === '') {
      setResultados([]);
      return;
    }

    const termo = busca.toLowerCase();

    const resultadoPaginas = [
      { nome: 'Home', path: '/' },
      { nome: 'Vida de Cristo', path: '/VidadeCristo' },
      { nome: 'Santos e Santidade', path: '/SantosESantidades' },
      { nome: 'Bíblia Online', path: '/Bibliaonline' },
      { nome: 'Catequese Online', path: '/CatequeseOnline' },
      { nome: 'Contato', path: '/Contato' },
    ].filter(p => p.nome.toLowerCase().includes(termo));

    const resultadoSantos = santosData
      .filter(s => s.nome.toLowerCase().includes(termo))
      .map(s => ({
        nome: s.nome,
        path: `/SantoDetalhe/${s.id}`
      }));

    const resultadoLivros = livrosBiblia
      .map(livro => {
        const regex = new RegExp(`^${livro.nome.toLowerCase()}\\s*(\\d+)?$`);
        const match = termo.match(regex);
        if (match) {
          const capitulo = match[1] ? parseInt(match[1]) : 1;
          return {
            nome: `${livro.nome} ${capitulo}`,
            path: `/Bibliaonline?livro=${livro.abrev}&capitulo=${capitulo}`,
          };
        }
        return null;
      })
      .filter(Boolean);

    const resultadoVersiculos = [];
    bibliaCompleta.forEach(livro => {
      livro.chapters.forEach((capitulo, capIndex) => {
        capitulo.forEach((verso, versoIndex) => {
          if (verso.toLowerCase().includes(termo)) {
            resultadoVersiculos.push({
              nome: `${livro.name} ${capIndex + 1}:${versoIndex + 1} — "${verso.substring(0, 60)}..."`,
              path: `/Bibliaonline?livro=${livro.abbrev}&capitulo=${capIndex + 1}`,
            });
          }
        });
      });
    });

    setResultados([
      ...resultadoPaginas,
      ...resultadoSantos,
      ...resultadoLivros,
      ...resultadoVersiculos,
    ]);
  }, [busca, bibliaCompleta]);

  const handleNavigate = (path) => {
    navigate(path);
    setBusca('');
    setResultados([]);
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <a href="/">
          <img
            src="/img/logo_principal.svg"
            alt="Logo"
            className="logo-img"
          />
        </a>
      </div>

      <div className="navbar-search">
        <input
          type="search"
          placeholder="Pesquisar artigos, santos, livros, versículos..."
          className="search-input"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        {resultados.length > 0 && (
          <div className="search-dropdown">
            {resultados.map((item, index) => (
              <div
                key={index}
                className="search-item"
                onClick={() => handleNavigate(item.path)}
              >
                {item.nome}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="navbar-menu">
        <button
          className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>

        <section className={`menu-dropdown ${menuOpen ? 'show' : ''}`}>
          <div className="menu-list"><a href="/">Home</a></div>
          <div className="menu-list"><a href="/VidadeCristo">Vida de Cristo</a></div>
          <div className="menu-list"><a href="/SantosESantidades">Santos e Santidade</a></div>
          <div className="menu-list"><a href="/Bibliaonline">Bíblia Online</a></div>

          <div className="menu-list submenu-toggle" onClick={toggleSubmenu}>
            Catequese Online {submenuOpen ? '▲' : '▼'}
          </div>

          {submenuOpen && (
            <div className="submenu">
              <div className="submenu-item" onClick={() => handleNavigate('/CatequeseOnline')}>Painel Principal</div>
              <div className="submenu-item" onClick={() => handleNavigate('/catequeseonline/como')}>Como Funciona</div>
              <div className="submenu-item" onClick={() => handleNavigate('/catequeseonline/catequistas')}>Para Catequistas</div>
              <div className="submenu-item" onClick={() => handleNavigate('/catequeseonline/alunos')}>Para Alunos</div>
              <div className="submenu-item" onClick={() => handleNavigate('/catequeseonline/faq')}>Perguntas Frequentes</div>
            </div>
          )}


          <div className="menu-list"><a href="/Contato">Contato</a></div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
