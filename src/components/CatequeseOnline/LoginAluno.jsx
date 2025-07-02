import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import './LoginAluno.css';

export function LoginAluno() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ehNovo, setEhNovo] = useState(false);
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleAuth = async () => {
        setErro('');
        try {
            if (ehNovo) {
                if (!nome.trim()) {
                    setErro("Por favor, informe seu nome.");
                    return;
                }

                const cred = await createUserWithEmailAndPassword(auth, email, senha);
                await setDoc(doc(db, "usuarios", cred.user.uid), {
                    nome: nome.trim(),
                    email,
                    tipo: "aluno",
                    criadoEm: new Date()
                });

                localStorage.setItem('usuario_nome', nome.trim());
                localStorage.setItem("usuario_id", cred.user.uid);
                localStorage.setItem("tipo_usuario", "aluno");

                navigate("/DashboardAluno");
            } else {
                const cred = await signInWithEmailAndPassword(auth, email, senha);
                const userDoc = await getDoc(doc(db, "usuarios", cred.user.uid));

                if (userDoc.exists() && userDoc.data().tipo === "aluno") {
                    localStorage.setItem('usuario_nome', userDoc.data().nome || email);
                    localStorage.setItem("usuario_id", cred.user.uid);
                    localStorage.setItem("tipo_usuario", "aluno");

                    navigate("/DashboardAluno");
                } else {
                    setErro("Você não tem permissão para acessar como aluno.");
                }
            }
        } catch (err) {
            setErro("Erro: " + err.message);
        }
    };

    return (
        <div className="login-aluno">
            <h2>{ehNovo ? 'Cadastrar Aluno' : 'Login Aluno'}</h2>

            {ehNovo && (
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    autoComplete="name"
                />
            )}

            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
            />
            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                autoComplete={ehNovo ? "new-password" : "current-password"}
            />

            <button onClick={handleAuth}>{ehNovo ? 'Cadastrar' : 'Entrar'}</button>

            <p style={{ marginTop: '1rem' }}>
                {ehNovo ? 'Já tem uma conta?' : 'Ainda não tem conta?'}{' '}
                <span
                    style={{ color: '#2980b9', cursor: 'pointer' }}
                    onClick={() => {
                        setErro('');
                        setEhNovo(!ehNovo);
                    }}
                >
                    {ehNovo ? 'Fazer login' : 'Cadastrar-se'}
                </span>
            </p>

            {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </div>
    );
}
