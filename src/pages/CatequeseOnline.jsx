import React from 'react';
import { Link } from 'react-router-dom';
import './CatequeseOnline.css';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function CatequeseOnline() {
    return (
        <div className="catequese-home">
            <h1>Catequese Online</h1>
            <p className="subtexto">Acesse como catequista ou aluno para iniciar sua jornada de fé.</p>

            <div className="cards-catequese">
                <Link to="/LoginCatequista" className="card-catequese">
                    <BookOpen size={32} />
                    <h3>Catequista</h3>
                    <p>Área exclusiva para catequistas acompanharem turmas, enviar materiais e marcar encontros.</p>
                </Link>

                <Link to="/LoginAluno" className="card-catequese">
                    <GraduationCap size={32} />
                    <h3>Aluno</h3>
                    <p>Acesse suas aulas, veja conteúdos catequéticos e converse com seu catequista.</p>
                </Link>
            </div>
        </div>
    );
}
