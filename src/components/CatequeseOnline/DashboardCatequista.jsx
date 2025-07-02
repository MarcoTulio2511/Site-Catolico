import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from '../../firebase';
import './DashboardCatequista.css';

export function DashboardCatequista() {
    const [salas, setSalas] = useState([]);
    const [nomeSala, setNomeSala] = useState('');
    const [msg, setMsg] = useState('');
    const [alunos, setAlunos] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);
    const [salaSelecionada, setSalaSelecionada] = useState(null);
    const [selecionados, setSelecionados] = useState([]);
    const usuarioId = localStorage.getItem('usuario_id');
    const navigate = useNavigate();

    const carregarSalas = async () => {
        try {
            const snapshot = await getDocs(collection(db, "salas"));
            const lista = snapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(sala => sala.criadorId === usuarioId)
                .sort((a, b) => b.criadoEm?.seconds - a.criadoEm?.seconds);
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

        const codigo = "Sala" + Math.floor(1000 + Math.random() * 9000);
        const novaSala = {
            nome: nomeSala,
            codigo,
            criadoEm: serverTimestamp(),
            ativa: true,
            criadorId: usuarioId,
            alunos: []
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

    const abrirModalAlunos = async (sala) => {
        try {
            const snapshot = await getDocs(collection(db, "usuarios"));
            const lista = snapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(user => user.tipo === "aluno");
            setAlunos(lista);
            setSalaSelecionada(sala);
            setSelecionados(sala.alunos || []);
            setModalAberto(true);
        } catch (err) {
            setMsg("Erro ao buscar alunos");
        }
    };

    const salvarAlunosNaSala = async () => {
        try {
            await updateDoc(doc(db, "salas", salaSelecionada.id), {
                alunos: selecionados
            });
            setModalAberto(false);
            carregarSalas();
        } catch (err) {
            setMsg("Erro ao salvar alunos na sala");
        }
    };

    const toggleSelecionado = (alunoId) => {
        setSelecionados(prev =>
            prev.includes(alunoId)
                ? prev.filter(id => id !== alunoId)
                : [...prev, alunoId]
        );
    };

    const sair = async () => {
        await signOut(auth);
        localStorage.clear();
        navigate("/LoginCatequista");
    };

    return (
        <div className="dashboard-catequista">
            <header className="cabecalho-dashboard">
                <h1>Bem-vindo(a), Catequista</h1>
                <div className="pagina-dashboard-catequista">
                    <button onClick={sair} className="btn-sair">Sair</button>
                </div>
            </header>


            <section className="criar-sala">
                <h2>Criar nova sala de catequese</h2>
                <input type="text" placeholder="Nome da sala (ex: Turma A)" value={nomeSala} onChange={e => setNomeSala(e.target.value)} />
                <div className="pagina-dashboard-catequista">
                    <button onClick={criarSala}>Criar Sala</button>
                </div>
                {msg && <p className="mensagem">{msg}</p>}
            </section>

            <section className="salas-ativas">
                <h2>Suas Salas</h2>
                {salas.length === 0 ? <p>Nenhuma sala criada ainda.</p> : (
                    <ul>
                        {salas.map((sala, index) => (
                            <li key={sala.id || index} className="card-sala">
                                <div>
                                    <strong>{sala.nome}</strong><br />
                                    Código: {sala.codigo}<br />
                                    Criada em: {sala.criadoEm?.toDate?.().toLocaleString() || '---'}
                                </div>
                                <Link to={`/Sala/${sala.codigo}`} className="botao-entrar">Entrar na Sala</Link>
                                <button onClick={() => abrirModalAlunos(sala)} className="botao-vincular">Vincular Alunos</button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {modalAberto && (
                <div className="modal-overlay" onClick={() => setModalAberto(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h2>Selecionar Alunos para: {salaSelecionada?.nome}</h2>
                        <div className="lista-alunos">
                            {alunos.map(aluno => (
                                <label key={aluno.id}>
                                    <input
                                        type="checkbox"
                                        checked={selecionados.includes(aluno.id)}
                                        onChange={() => toggleSelecionado(aluno.id)}
                                    />
                                    {aluno.email}
                                </label>
                            ))}
                        </div>
                        <button onClick={salvarAlunosNaSala}>Salvar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
