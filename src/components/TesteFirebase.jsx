import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function TesteFirebase() {
    const [dados, setDados] = useState([]);

    // Enviar dados de teste po firebase
    const enviarDado = async () => {
        try {
            await addDoc(collection(db, "testeFirebase"), {
                nome: "Teste de conexão",
                data: new Date().toLocaleString()
            });
            alert("Dados enviados com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar:", error);
        }
    };

    // essa cont lê os dados do banco
    const lerDados = async () => {
        const querySnapshot = await getDocs(collection(db, "testeFirebase"));
        const itens = [];
        querySnapshot.forEach((doc) => {
            itens.push({ id: doc.id, ...doc.data() });
        });
        setDados(itens);
    };

    // Ler dados ao abrir o componente
    useEffect(() => {
        lerDados();
    }, []);

    return (
        <div style={{ padding: "30px" }}>
            <h1>Teste Firebase 🔥</h1>
            <button onClick={enviarDado}>Enviar Dado de Teste</button>
            <h2>Dados no Firestore:</h2>
            <ul>
                {dados.map((item) => (
                    <li key={item.id}>
                        {item.nome} - {item.data}
                    </li>
                ))}
            </ul>
        </div>
    );
}
