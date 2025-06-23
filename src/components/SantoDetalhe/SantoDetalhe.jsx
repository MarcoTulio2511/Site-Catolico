import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { santosData } from '../Santos/Santos';
import './SantoDetalhe.css';

export default function SantoDetalhe() {
    const { santoId } = useParams();
    const santo = santosData.find((s) => s.id === santoId);

    if (!santo) {
        return <h2 style={{ textAlign: 'center', color: 'white' }}>Santo não encontrado.</h2>;
    }

    return (
        <div className="santo-detalhe-page-wrapper">
            <div className="santo-detalhe-container">
                <div className="image-section">
                    <img src={santo.imagem} alt={santo.nome} className="santo-imagem" />
                    <div className="image-gradient-overlay"></div> {/* Novo elemento para o gradiente */}
                </div>
                <div className="content-section">
                    {/*<h1 className="santo-nome">{santo.nome}</h1>*/}
                    <div className="story-section"> {/* Novo div para envolver descrição e frase */}
                        <p className="santo-descricao">
                            {santo.descricao.split('\n').map((linha, index) => (
                                <React.Fragment key={index}>
                                    {linha}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>

                        <div className="santo-frase">
                            <i>“{santo.frase}”</i>
                        </div>
                    </div>
                    <div className="buttons-section"> {/* Novo div para os botões */}
                        <Link to="/SantosESantidades" className="watch-trailer-button">
                            Ver Outros Santos
                        </Link>
                        {/* Você pode adicionar outro botão aqui se precisar */}
                        {/* <button className="other-button">Outro Botão</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}