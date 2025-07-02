import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import './DashboardAluno.css';

export function DashboardAluno() {
    const [salas, setSalas] = useState([]);
    const [msg, setMsg] = useState('');
    const alunoId = localStorage.getItem("usuario_id");
    const nomeAluno = localStorage.getItem("usuario_nome") || "Aluno";
    const navigate = useNavigate();

    const sair = async () => {
        await signOut(auth);
        localStorage.clear();
        navigate("/LoginAluno");
    };

    useEffect(() => {
        const buscarSalas = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'salas'));
                const agora = new Date();
                const tresHorasAtras = new Date(agora.getTime() - 3 * 60 * 60 * 1000);

                const filtradas = snapshot.docs
                    .map(doc => ({ id: doc.id, ...doc.data() }))
                    .filter(sala =>
                        sala.ativa &&
                        sala.alunos?.includes(alunoId) &&
                        sala.criadoEm?.toDate?.() >= tresHorasAtras
                    )
                    .sort((a, b) => b.criadoEm?.seconds - a.criadoEm?.seconds);

                setSalas(filtradas);
            } catch (err) {
                setMsg('Erro ao buscar salas.');
            }
        };

        buscarSalas();
    }, []);

    return (
        <div className="dashboard-aluno">
            <header className="top-bar">
                <h1>Bem-vindo(a), {nomeAluno}</h1>
                <button onClick={sair} className="btn-sair">Sair</button>
            </header>

            <section className="salas-disponiveis">
                <h2>Suas Salas Ativas (últimas 3h)</h2>
                {msg && <p style={{ color: 'red' }}>{msg}</p>}
                {salas.length === 0 ? (
                    <p>Você ainda não foi adicionado a nenhuma sala ativa.</p>
                ) : (
                    <ul>
                        {salas.map((sala, index) => (
                            <li key={sala.id || index} className="card-sala">
                                <div>
                                    <strong>{sala.nome}</strong><br />
                                    Código: {sala.codigo}<br />
                                    Criada em: {sala.criadoEm?.toDate?.().toLocaleString() || '---'}
                                </div>
                                <Link to={`/Sala/${sala.codigo}`} className="botao-entrar">Entrar na Sala</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}
