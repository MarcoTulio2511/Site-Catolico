import React, { useState, useEffect } from 'react';
import './Bibliaonline.css';
import { nomesLivrosVelhoTestamento, nomesLivrosNovoTestamento } from '../../utils/livrosBiblia';

export default function Bibliaonline() {
    const [biblia, setBiblia] = useState([]);
    const [aberto, setAberto] = useState(null); // 'vt' ou 'nt' aberto na sanfona
    const [modalAberto, setModalAberto] = useState(false); // controle modal
    const [livroAtual, setLivroAtual] = useState(null);
    const [capituloAtual, setCapituloAtual] = useState(1);
    const [versiculos, setVersiculos] = useState([]);
    const [busca, setBusca] = useState('');
    const [resultadoBusca, setResultadoBusca] = useState([]);

    useEffect(() => {
        fetch('/biblia/acf.json')
            .then(res => res.json())
            .then(data => setBiblia(data))
            .catch(err => console.error('Erro ao carregar a bíblia:', err));
    }, []);

    useEffect(() => {
        if (!biblia.length || !livroAtual) return;

        const livro = biblia.find(l => l.abbrev === livroAtual);
        if (livro && livro.chapters.length >= capituloAtual) {
            setVersiculos(livro.chapters[capituloAtual - 1]);
            setResultadoBusca([]);
            setBusca('');
        } else {
            setVersiculos([]);
        }
    }, [livroAtual, capituloAtual, biblia]);

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

    // Quando clicar no livro, abre o modal e seleciona o livro
    const abrirLivro = (abreviacao) => {
        setLivroAtual(abreviacao);
        setCapituloAtual(1);
        setBusca('');
        setResultadoBusca([]);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setLivroAtual(null);
        setCapituloAtual(1);
        setVersiculos([]);
        setBusca('');
        setResultadoBusca([]);
    };

    const livroSelecionado = biblia.find(l => l.abbrev === livroAtual);

    return (
        <div className="biblia-container">
            <h1>Bíblia Online</h1>

            <div className="accordion">
                <div className="accordion-item">
                    <button className="accordion-header" onClick={() => setAberto(aberto === 'vt' ? null : 'vt')}>
                        📜 Antigo Testamento (46 livros) {aberto === 'vt' ? '⋀' : '⋁'}
                    </button>
                    {aberto === 'vt' && (
                        <ul className="lista-livros">
                            {Object.entries(nomesLivrosVelhoTestamento).map(([abreviacao, nome]) => (
                                <li key={abreviacao}>
                                    <button className="botao-livro" onClick={() => abrirLivro(abreviacao)}>
                                        {nome}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="accordion-item">
                    <button className="accordion-header" onClick={() => setAberto(aberto === 'nt' ? null : 'nt')}>
                        📜 Novo Testamento (27 livros) {aberto === 'nt' ? '⋀' : '⋁'}
                    </button>
                    {aberto === 'nt' && (
                        <ul className="lista-livros">
                            {Object.entries(nomesLivrosNovoTestamento).map(([abreviacao, nome]) => (
                                <li key={abreviacao}>
                                    <button className="botao-livro" onClick={() => abrirLivro(abreviacao)}>
                                        {nome}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Modal */}
            {modalAberto && (
                <div className="modal-overlay" onClick={fecharModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="fechar-modal" onClick={fecharModal}>×</button>
                        <h2>{(nomesLivrosVelhoTestamento[livroAtual] || nomesLivrosNovoTestamento[livroAtual]) || livroAtual.toUpperCase()}</h2>

                        <div className="controle-selecao">
                            <label>
                                Capítulo:
                                <select
                                    value={capituloAtual}
                                    onChange={e => setCapituloAtual(Number(e.target.value))}
                                >
                                    {livroSelecionado && livroSelecionado.chapters.map((_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <div className="busca">
                            <input
                                type="text"
                                placeholder="Buscar texto no capítulo"
                                value={busca}
                                onChange={handleBusca}
                            />
                        </div>

                        <div className="versiculos">
                            {(resultadoBusca.length > 0
                                ? resultadoBusca
                                : versiculos.map((v, i) => ({ texto: v, numero: i + 1 }))
                            ).map(({ texto, numero }) => (
                                <p key={numero}>
                                    <sup>{numero}</sup> {texto}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
