import './VideoCallRoom.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function VideoCallRoom() {
    const navigate = useNavigate();

    useEffect(() => {
        const domain = 'meet.jit.si';
        const options = {
            SHOW_PROMOTIONAL_CLOSE_PAGE: false,

            roomName: 'CatequeseOnline123',
            width: '100%',
            height: '100%',
            parentNode: document.getElementById('jitsi-container'),
            interfaceConfigOverwrite: {
                SHOW_PROMOTIONAL_CLOSE_PAGE: false,
            },
            userInfo: {
                displayName: localStorage.getItem('usuario_nome') || 'Participante'
            },
            configOverwrite: {
                prejoinPageEnabled: false,
                startWithAudioMuted: true,
                startWithVideoMuted: false,
            }
        };

        const api = new window.JitsiMeetExternalAPI(domain, options);

        return () => api.dispose();
    }, []);

    const usuarioNome = localStorage.getItem('usuario_nome') || 'Participante';

    const voltarAoInicio = () => {
        const tipo = localStorage.getItem('usuario_tipo'); // "aluno" ou "catequista" tanto faz
        if (tipo === 'catequista') {
            navigate('/DashboardCatequista');
        } else {
            navigate('/DashboardAluno');
        }
    };

    const sairDaReuniao = () => {
        navigate('/');
    };

    return (
        <div className="video-call-layout">
            <aside className="sidebar">
                <h3>{usuarioNome}</h3>
                <button onClick={voltarAoInicio}>🏠 Voltar ao Início</button>
                <button onClick={sairDaReuniao}>🚪 Sair da Reunião</button>
                <button onClick={() => alert("Em breve!")}>📄 Material da Aula</button>
                <button onClick={() => alert("Entre em contato com seu catequista.")}>❓ Suporte</button>
            </aside>

            <main className="jitsi-area">
                <div className="jitsi-wrapper" id="jitsi-container"></div>
            </main>
        </div>
    );
}
