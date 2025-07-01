import React from 'react';
import './VideoCallRoom.css';

export function VideoCallRoom() {
    return (
        <div className="sala-reuniao">
            <h2>Reunião de Catequese</h2>
            <iframe
                title="Sala Catequese"
                src="https://meet.jit.si/CatequeseOnline123"
                allow="camera; microphone; fullscreen; display-capture"
                style={{ width: '100%', height: '80vh', border: 'none' }}
            ></iframe>
        </div>
    );
}
