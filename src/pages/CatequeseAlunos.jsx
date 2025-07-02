import React from 'react';
import './CatequeseAlunos.css';

export default function CatequeseAlunos() {
    return (
        <div className="container catequese-page py-5">
            <h1 className="text-center mb-4">👶 Área do Aluno</h1>
            <p className="lead text-center mb-5">
                Bem-vindo(a)! Nesta área você irá participar da sua turma de catequese, aprender sobre Jesus,
                os sacramentos, os santos, a Bíblia e muito mais. Tudo isso com o acompanhamento do seu catequista.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <h3>📦 O que você precisa</h3>
                    <ul className="list-group mb-4">
                        <li className="list-group-item">Internet no celular, tablet ou computador</li>
                        <li className="list-group-item">Seu login (e-mail e senha)</li>
                        <li className="list-group-item">Saber o nome e o horário da sua turma</li>
                        <li className="list-group-item">Estar atento às mensagens do catequista</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>🕊️ Sua Jornada com Cristo</h3>
                    <p className="mb-3">
                        Durante as aulas você vai aprender sobre a vida de Jesus, as histórias da Bíblia, a importância
                        da oração, da comunhão e do amor ao próximo. Prepare seu coração e participe com atenção!
                    </p>
                    <p className="mb-3">
                        Sua presença e participação são sinais do seu amor por Deus! 💖
                    </p>
                </div>
            </div>
        </div>
    );
}