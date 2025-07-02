import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import './LoginCatequista.css';

export function LoginCatequista() {
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
                    tipo: "catequista",
                    criadoEm: new Date()
                });
                navigate("/DashboardCatequista");
            } else {
                const cred = await signInWithEmailAndPassword(auth, email, senha);
                const userDoc = await getDoc(doc(db, "usuarios", cred.user.uid));

                if (userDoc.exists() && userDoc.data().tipo === "catequista") {
                    navigate("/DashboardCatequista");
                } else {
                    setErro("Você não tem permissão para acessar como catequista.");
                }
            }
        } catch (err) {
            setErro("Erro: " + err.message);
        }
    };

    return (
        <div className="login-catequista">
            <h2>{ehNovo ? 'Cadastrar Catequista' : 'Login Catequista'}</h2>
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
                    style={{ color: '#3498db', cursor: 'pointer' }}
                    onClick={() => setEhNovo(!ehNovo)}
                >
                    {ehNovo ? 'Fazer login' : 'Cadastrar-se'}
                </span>
            </p>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
        </div>
    );
}
