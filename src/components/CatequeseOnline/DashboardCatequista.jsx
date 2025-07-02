import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import './DashboardCatequista.css';

export function DashboardCatequista() {
    const [salas, setSalas] = useState([]);
    const [nomeSala, setNomeSala] = useState('');
    const [msg, setMsg] = useState('');

    // 🔁 Buscar salas do Firestore
    const carregarSalas = async () => {
        try {
            const snapshot = await getDocs(collection(db, "salas"));
            const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            // Ordenar pela data mais recente
            lista.sort((a, b) => b.criadoEm?.seconds - a.criadoEm?.seconds);
            setSalas(lista);
        } catch (err) {
            setMsg('Erro ao carregar salas');
        }
    };

    useEffect(() => {
        carregarSalas();
    }, []);

    const criarSala = async () => {
        if (!nomeSala.trim()) {
            setMsg('Digite um nome para a sala');
            return;
        }

        const codigo = "Sala" + Math.floor(1000 + Math.random() * 9000); // Ex: Sala3874
        const novaSala = {
            nome: nomeSala,
            codigo: codigo,
            criadoEm: serverTimestamp(),
            ativa: true
        };

        try {
            await addDoc(collection(db, "salas"), novaSala);
            setNomeSala('');
            setMsg('Sala criada com sucesso!');
            carregarSalas();
        } catch (err) {
            setMsg('Erro ao criar sala');
        }
    };

    return (
        <div className="dashboard-catequista">
            <h1>Bem-vindo(a), Catequista</h1>

            <section className="criar-sala">
                <h2>Criar nova sala de catequese</h2>
                <input
                    type="text"
                    placeholder="Nome da sala (ex: Turma A)"
                    value={nomeSala}
                    onChange={e => setNomeSala(e.target.value)}
                />
                <button onClick={criarSala}>Criar Sala</button>
                {msg && <p className="mensagem">{msg}</p>}
            </section>

            <section className="salas-ativas">
                <h2>Salas Ativas</h2>
                {salas.length === 0 ? (
                    <p>Nenhuma sala criada ainda.</p>
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
                <h2>Informações Adicionais</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt arcu quis nulla lacinia, ut malesuada justo commodo.</p>
                <p>Você pode usar esta área para avisos, documentos, ou links úteis para os catequistas.</p>
            </section>
        </div>
    );
}
