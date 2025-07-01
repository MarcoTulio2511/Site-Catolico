// DashboardAluno.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function DashboardAluno() {
    const navigate = useNavigate();

    const entrarSala = () => {
        // redireciona para uma sala - aqui você pode colocar lógica pra escolher a sala
        navigate('/Sala/default'); // exemplo de sala default
    };

    return (
        <div className="dashboard-aluno">
            <h2>Bem-vindo, Aluno</h2>
            <button onClick={entrarSala}>Entrar na Salsa de Catequese</button>
        </div >
    );
}
