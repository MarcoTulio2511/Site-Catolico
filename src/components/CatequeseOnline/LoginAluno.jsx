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
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ehNovo, setEhNovo] = useState(false);
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleAuth = async () => {
        setErro('');
        try {
            if (ehNovo) {
                const cred = await createUserWithEmailAndPassword(auth, email, senha);
                await setDoc(doc(db, "usuarios", cred.user.uid), {
                    email,
                    tipo: "aluno",
                    criadoEm: new Date()
                });
                navigate("/DashboardAluno");
            } else {
                const cred = await signInWithEmailAndPassword(auth, email, senha);
                const userDoc = await getDoc(doc(db, "usuarios", cred.user.uid));

                if (userDoc.exists() && userDoc.data().tipo === "aluno") {
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
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
            />
            <button onClick={handleAuth}>{ehNovo ? 'Cadastrar' : 'Entrar'}</button>
            <p style={{ marginTop: '1rem' }}>
                {ehNovo ? 'Já tem uma conta?' : 'Ainda não tem conta?'}{' '}
                <span
                    style={{ color: '#2980b9', cursor: 'pointer' }}
                    onClick={() => setEhNovo(!ehNovo)}
                >
                    {ehNovo ? 'Fazer login' : 'Cadastrar-se'}
                </span>
            </p>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </div>
    );
}
