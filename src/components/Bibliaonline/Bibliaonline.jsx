import React, { useState, useEffect } from 'react';
import './Bibliaonline.css';
import { nomesLivrosVelhoTestamento, nomesLivrosNovoTestamento } from '../../utils/livrosBiblia';

const versiculosCarrossel = [
    "João 3:16 — Porque Deus amou tanto o mundo que deu o seu Filho único, para que todo o que nele crer não pereça, mas tenha a vida eterna",
    "Salmos 23:1 — O Senhor é o meu pastor, nada me faltará.",
    "Filipenses 4:13 — Posso todas as coisas naquele que me fortalece.",
    "Provérbios 3:5 — Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento."
];

export default function Bibliaonline() {
    const [biblia, setBiblia] = useState([]);
    const [livroAtual, setLivroAtual] = useState('gn');
    const [capituloAtual, setCapituloAtual] = useState(1);
    const [versiculos, setVersiculos] = useState([]);
    const [busca, setBusca] = useState('');
    const [resultadoBusca, setResultadoBusca] = useState([]);
    const [carrosselIndex, setCarrosselIndex] = useState(0);
    const [modalAberto, setModalAberto] = useState(false);
    const [livroModal, setLivroModal] = useState(null); // objeto livro completo aqui
    const [dropdownAberto, setDropdownAberto] = useState({ at: false, nt: false });

    useEffect(() => {
        fetch('/biblia/acf.json')
            .then(res => res.json())
            .then(data => setBiblia(data))
            .catch(err => console.error('Erro ao carregar a bíblia:', err));
    }, []);

    useEffect(() => {
        if (biblia.length === 0) return;
        const livro = biblia.find(l => l.abbrev === livroAtual);
        if (livro && livro.chapters.length >= capituloAtual) {
            setVersiculos(livro.chapters[capituloAtual - 1]);
            setResultadoBusca([]);
            setBusca('');
        } else {
            setVersiculos([]);
        }
    }, [livroAtual, capituloAtual, biblia]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCarrosselIndex((prevIndex) => (prevIndex + 1) % versiculosCarrossel.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handleBusca = (e) => {
        const texto = e.target.value;
        setBusca(texto);
        if (!texto.trim()) {
            setResultadoBusca([]);
            return;
        }
        const resultados = versiculos
            .map((v, i) => ({ texto: v, numero: i + 1 }))
            .filter(v => v.texto.toLowerCase().includes(texto.toLowerCase()));
        setResultadoBusca(resultados);
    };

    // **Abre o modal passando o objeto livro completo**
    const abrirModal = (abreviacao) => {
        const livro = biblia.find(l => l.abbrev === abreviacao);
        if (livro) {
            setLivroModal(livro);
            setCapituloAtual(1);
            setModalAberto(true);
        }
    };

    const fecharModal = () => {
        setModalAberto(false);
        setLivroModal(null);
    };

    // Troca de capítulo no modal
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

            {/* Modal antigo funcional */}
            {modalAberto && livroModal && (
                <div className="modal-overlay" onClick={fecharModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>{livroModal.name} - Capítulo {capituloAtual}</h2>

                        {/* Select para trocar capítulo */}
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

                        {/* Versículos do capítulo */}
                        <div className="modal-versiculos" style={{ maxHeight: '60vh', overflowY: 'auto', marginTop: '1rem' }}>
                            {livroModal.chapters[capituloAtual - 1].map((verso, i) => (
                                <p key={i}>
                                    <sup>{i + 1}</sup> {verso}
                                </p>
                            ))}
                        </div>

                        <button onClick={fecharModal} style={{ marginTop: '1rem' }}>Fechar</button>
                    </div>
                </div>
            )}

            {/* Filtro normal */}



        </div>
    );
}
