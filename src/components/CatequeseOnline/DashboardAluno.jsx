import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import './DashboardAluno.css';

export function DashboardAluno() {
    const [salas, setSalas] = useState([]);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const buscarSalas = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'salas'));
                const agora = new Date();
                const tresHorasAtras = new Date(agora.getTime() - 3 * 60 * 60 * 1000); // 3 horas atrás

                const filtradas = snapshot.docs
                    .map(doc => ({ id: doc.id, ...doc.data() }))
                    .filter(sala => {
                        const data = sala.criadoEm?.toDate?.();
                        return (
                            sala.ativa === true &&
                            data &&
                            data >= tresHorasAtras
                        );
                    })
                    .sort((a, b) => b.criadoEm?.seconds - a.criadoEm?.seconds); // mais recentes primeiro

                setSalas(filtradas);
            } catch (err) {
                setMsg('Erro ao buscar salas.');
            }
        };

        buscarSalas();
    }, []);

    return (
        <div className="dashboard-aluno">
            <h1>Bem-vindo(a), Aluno</h1>

            <section className="salas-disponiveis">
                <h2>Salas Disponíveis (últimas 3h)</h2>
                {msg && <p style={{ color: 'red' }}>{msg}</p>}
                {salas.length === 0 ? (
                    <p>Nenhuma sala disponível no momento.</p>
                ) : (
                    <ul>
                        {salas.map((sala, index) => (
                            <li key={sala.id || index} className="card-sala">
                                <div>
                                    <strong>{sala.nome}</strong><br />
                                    Código: {sala.codigo}<br />
                                    Criada em: {sala.criadoEm?.toDate?.().toLocaleString() || '---'}
                                </div>
                                <Link to={`/Sala/${sala.codigo}`} className="botao-entrar">
                                    Entrar na Sala
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            <section className="info-adicional">
                <h2>Dicas e Avisos</h2>
                <p>Lembre-se de entrar com o microfone desligado para evitar ruídos.</p>
                <p>Fique atento(a) ao horário de início da sua turma.</p>
            </section>
        </div>
    );
}
