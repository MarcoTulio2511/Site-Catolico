import React from 'react';
import { Link } from 'react-router-dom';
import './CatequeseOnline.css';

export default function CatequeseOnline() {
    return (
        <div className="catequese-home">
            <h1>Catequese Online</h1>
            <p>Escolha como deseja acessar:</p>
            <div className="botoes-catequese">
                <Link to="/login-catequista" className="btn-catequista">Sou Catequista</Link>
                <Link to="/login-aluno" className="btn-aluno">Sou Aluno</Link>
            </div>
        </div>
    );
}
