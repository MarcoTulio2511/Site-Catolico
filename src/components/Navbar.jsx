import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { nomesLivrosVelhoTestamento, nomesLivrosNovoTestamento } from '../utils/livrosBiblia';
import { santosData } from './Santos/Santos';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const [bibliaCompleta, setBibliaCompleta] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const paginas = [
    { nome: 'Home', path: '/' },
    { nome: 'Vida de Cristo', path: '/VidadeCristo' },
    { nome: 'Santos e Santidade', path: '/SantosESantidades' },
    { nome: 'Bíblia Online', path: '/Bibliaonline' },
    { nome: 'Catequese Online', path: '/CatequeseOnline' },
    { nome: 'Login do Catequista', path: '/LoginCatequista' },
    { nome: 'Login do Aluno', path: '/LoginAluno' },
    { nome: 'Contato', path: '/Contato' },
  ];

  const livrosBiblia = [
    ...Object.entries(nomesLivrosVelhoTestamento).map(([abrev, nome]) => ({ nome, abrev })),
    ...Object.entries(nomesLivrosNovoTestamento).map(([abrev, nome]) => ({ nome, abrev })),
  ];

  // 🔥 Carrega a Bíblia completa via fetch (porque está na pasta public/)
  useEffect(() => {
    fetch('/biblia/acf.json')
      .then(res => res.json())
      .then(data => setBibliaCompleta(data))
      .catch(err => console.error("Erro ao carregar a Bíblia:", err));
  }, []);

  // 🔍 Atualiza os resultados da busca
  useEffect(() => {
    if (busca.trim() === '') {
      setResultados([]);
      return;
    }

    const termo = busca.toLowerCase();

    // 🔹 Busca em páginas
    const resultadoPaginas = paginas
      .filter(p => p.nome.toLowerCase().includes(termo))
      .map(p => ({ nome: p.nome, path: p.path }));

    // 🔹 Busca em santos
    const resultadoSantos = santosData
      .filter(s => s.nome.toLowerCase().includes(termo))
      .map(s => ({
        nome: s.nome,
        path: `/SantoDetalhe/${s.id}`
      }));


    // 🔹 Busca em livros da Bíblia
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

    // 🔹 Busca em versículos por conteúdo textual
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
          {paginas.map((pagina, index) => (
            <div key={index} className="menu-list">
              <a href={pagina.path}>{pagina.nome}</a>
            </div>
          ))}
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
