import React, { useState, useEffect, useRef } from 'react';
import './Bibliaonline.css';
import { nomesLivrosVelhoTestamento, nomesLivrosNovoTestamento } from '../../utils/livrosBiblia';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const versiculosCarrossel = [
    "João 3:16 — Porque Deus amou tanto o mundo que deu o seu Filho único, para que todo o que nele crer não pereça, mas tenha a vida eterna",
    "Salmos 23:1 — O Senhor é o meu pastor, nada me faltará.",
    "Filipenses 4:13 — Posso todas as coisas naquele que me fortalece.",
    "Provérbios 3:5 — Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento."
];

export default function Bibliaonline() {
    const query = useQuery();
    const livroParam = query.get('livro');
    const capituloParam = query.get('capitulo');
    const versiculoParam = query.get('versiculo'); // novo parâmetro pra destacar os versiculos

    const [biblia, setBiblia] = useState([]);
    const [livroAtual, setLivroAtual] = useState('gn');
    const [capituloAtual, setCapituloAtual] = useState(1);
    const [versiculos, setVersiculos] = useState([]);
    const [carrosselIndex, setCarrosselIndex] = useState(0);
    const [modalAberto, setModalAberto] = useState(false);
    const [livroModal, setLivroModal] = useState(null);
    const [dropdownAberto, setDropdownAberto] = useState({ at: false, nt: false });

    // Para scroll e focar no versículo destacado
    const versiculoRefs = useRef([]);

    // Carrega o arquivo JSON da Bíblia
    useEffect(() => {
        fetch('/biblia/acf.json')
            .then(res => res.json())
            .then(data => setBiblia(data))
            .catch(err => console.error('Erro ao carregar a bíblia:', err));
    }, []);

    // Carrossel de versículos
    useEffect(() => {
        const timer = setInterval(() => {
            setCarrosselIndex((prevIndex) => (prevIndex + 1) % versiculosCarrossel.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // Abre automaticamente modal com params URL
    useEffect(() => {
        if (biblia.length === 0) return;
        if (livroParam && capituloParam) {
            const livro = biblia.find(l => l.abbrev === livroParam);
            if (livro) {
                setLivroModal(livro);
                setLivroAtual(livroParam);
                setCapituloAtual(Number(capituloParam));
                setModalAberto(true);
            }
        }
    }, [biblia, livroParam, capituloParam]);

    // Atualizar versículos exibidos
    useEffect(() => {
        if (biblia.length === 0) return;
        const livro = biblia.find(l => l.abbrev === livroAtual);
        if (livro && livro.chapters.length >= capituloAtual) {
            setVersiculos(livro.chapters[capituloAtual - 1]);
        } else {
            setVersiculos([]);
        }
    }, [livroAtual, capituloAtual, biblia]);

    // Após versículos renderizados, faz scroll para versículo destacado
    useEffect(() => {
        if (!modalAberto) return;
        if (!versiculoParam) return;

        const idx = Number(versiculoParam) - 1;
        if (versiculoRefs.current[idx]) {
            versiculoRefs.current[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [modalAberto, versiculoParam, versiculos]);

    // Abre o modal com o livro escolhido, resetando versiculoParam
    const abrirModal = (abreviacao) => {
        const livro = biblia.find(l => l.abbrev === abreviacao);
        if (livro) {
            setLivroModal(livro);
            setLivroAtual(abreviacao);
            setCapituloAtual(1);
            setModalAberto(true);
        }
    };

    const fecharModal = () => {
        setModalAberto(false);
        setLivroModal(null);
    };

    const trocarCapitulo = (e) => {
        setCapituloAtual(Number(e.target.value));
    };

    return (
        <div className="biblia-container">

            {/* Carrossel de versículos */}
            <div className="carrossel-versiculos">
                <p>{versiculosCarrossel[carrosselIndex]}</p>
            </div>

            {/* Dropdown Antigo e Novo Testamento */}
            <div className="dropdown-livros">
                <div className="dropdown-secao" onClick={() => setDropdownAberto({ ...dropdownAberto, at: !dropdownAberto.at })}>
                    <span>📜 Antigo Testamento ({Object.keys(nomesLivrosVelhoTestamento).length})</span>
                    <span className="seta">{dropdownAberto.at ? '▲' : '▼'}</span>
                </div>
                {dropdownAberto.at && (
                    <div className="livros-lista">
                        {Object.entries(nomesLivrosVelhoTestamento).map(([abrev, nome]) => (
                            <p key={abrev} className="livro-nome" onClick={() => abrirModal(abrev)}>
                                {nome}
                            </p>
                        ))}
                    </div>
                )}

                <div className="dropdown-secao" onClick={() => setDropdownAberto({ ...dropdownAberto, nt: !dropdownAberto.nt })}>
                    <span>📖 Novo Testamento ({Object.keys(nomesLivrosNovoTestamento).length})</span>
                    <span className="seta">{dropdownAberto.nt ? '▲' : '▼'}</span>
                </div>
                {dropdownAberto.nt && (
                    <div className="livros-lista">
                        {Object.entries(nomesLivrosNovoTestamento).map(([abrev, nome]) => (
                            <p key={abrev} className="livro-nome" onClick={() => abrirModal(abrev)}>
                                {nome}
                            </p>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            {modalAberto && livroModal && (
                <div className="modal-overlay" onClick={fecharModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>{livroModal.name} - Capítulo {capituloAtual}</h2>

                        <label>
                            Capítulo:{' '}
                            <select value={capituloAtual} onChange={trocarCapitulo}>
                                {livroModal.chapters.map((_, i) => (
                                    <option key={i} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <div className="modal-versiculos" style={{ maxHeight: '60vh', overflowY: 'auto', marginTop: '1rem' }}>
                            {versiculos.map((verso, i) => (
                                <p
                                    key={i}
                                    ref={el => (versiculoRefs.current[i] = el)}
                                    className={versiculoParam && (i + 1) === Number(versiculoParam) ? 'versiculo-destaque' : ''}
                                >
                                    <sup>{i + 1}</sup> {verso}
                                </p>
                            ))}
                        </div>

                        <button onClick={fecharModal} style={{ marginTop: '1rem' }}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
