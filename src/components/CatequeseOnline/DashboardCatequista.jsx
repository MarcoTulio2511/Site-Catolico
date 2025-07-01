// DashboardCatequista.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export function DashboardCatequista() {
    const [salas, setSalas] = useState([]);
    const [nomeSala, setNomeSala] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Carrega salas do Firestore
        const fetchSalas = async () => {
            const querySnapshot = await getDocs(collection(db, "salas"));
            const lista = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setSalas(lista);
        };
        fetchSalas();
    }, []);

    const criarSala = async () => {
        if (!nomeSala.trim()) return alert('Informe o nome da sala');
        const docRef = await addDoc(collection(db, "salas"), {
            nome: nomeSala,
            criadoEm: new Date(),
        });
        setNomeSala('');
        // Atualiza a lista com nova sala
        setSalas(prev => [...prev, { id: docRef.id, nome: nomeSala }]);
    };

    const entrarSala = (id) => {
        navigate(`/Sala/${id}`);
    };

    return (
        <div className="dashboard-catequista">
            <h2>Bem-vindo, Catequista</h2>
            <input
                type="text"
                placeholder="Nome da nova sala"
                value={nomeSala}
                onChange={e => setNomeSala(e.target.value)}
            />
            <button onClick={criarSala}>Criar Sala</button>

            <h3>Salas criadas</h3>
            <ul>
                {salas.map(sala => (
                    <li key={sala.id}>
                        {sala.nome} <button onClick={() => entrarSala(sala.id)}>Entrar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
