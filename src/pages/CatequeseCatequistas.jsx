import React from 'react';
import './CatequeseCatequistas.css';

export default function CatequeseCatequistas() {
    return (
        <div className="container catequese-page py-5">
            <h1 className="text-center mb-4">👨‍🏫 Área do Catequista</h1>
            <p className="lead text-center mb-5">
                Aqui você encontra ferramentas, instruções e dicas práticas para gerenciar suas turmas de catequese
                de forma eficiente e acolhedora. Nossa missão é te ajudar a evangelizar com alegria e organização!
            </p>
            <div className="row">
                <div className="col-md-6">
                    <h3>🛠️ Ferramentas Disponíveis</h3>
                    <ul className="list-group mb-4">
                        <li className="list-group-item">Criação de salas com código único</li>
                        <li className="list-group-item">Vinculação de alunos por login</li>
                        <li className="list-group-item">Dashboard com histórico de salas</li>
                        <li className="list-group-item">Botão para chamada de vídeo</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>💡 Dicas para Catequistas</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Estabeleça horários fixos semanais</li>
                        <li className="list-group-item">Prepare temas e conteúdos com antecedência</li>
                        <li className="list-group-item">Incentive a participação dos alunos</li>
                        <li className="list-group-item">Utilize vídeos, músicas e recursos visuais</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}