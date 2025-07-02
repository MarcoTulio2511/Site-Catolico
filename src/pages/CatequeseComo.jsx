import React from 'react';
import './CatequeseComo.css';

export default function CatequeseComo() {
    return (
        <div className="container catequese-page py-5">
            <h1 className="text-center mb-4">📚 Como Funciona a Catequese Online</h1>
            <p className="lead text-center mb-5">
                A Catequese Online é uma forma moderna e acessível de conectar catequistas e alunos
                através da internet. Aqui você encontra um ambiente seguro e organizado para viver a fé,
                aprender os ensinamentos cristãos e caminhar rumo aos sacramentos.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <h3>🌐 Funcionalidades</h3>
                    <ul className="list-group mb-4">
                        <li className="list-group-item">Salas virtuais exclusivas para cada turma</li>
                        <li className="list-group-item">Acesso com login individual para catequistas e alunos</li>
                        <li className="list-group-item">Chamadas de vídeo, recursos didáticos e atividades online</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>🔄 Fluxo de Uso</h3>
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item">O catequista se cadastra e cria sua sala</li>
                        <li className="list-group-item">Os alunos também se cadastram na plataforma</li>
                        <li className="list-group-item">O catequista vincula os alunos à sala</li>
                        <li className="list-group-item">O aluno acessa a sala e participa das atividades</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}