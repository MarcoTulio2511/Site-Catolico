import React from 'react';
import './CatequeseFAQ.css';

export default function CatequeseFAQ() {
    return (
        <div className="container catequese-page py-5">
            <h1 className="text-center mb-4">Perguntas Frequentes</h1>
            <div className="accordion" id="faqAccordion">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1. Como faço para participar?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Após se cadastrar com o catequista da sua paróquia, você receberá seu acesso. Com as aulas marcadas, basta entrar no site e acessar a sala disponível para você.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2. O que faço se não vejo nenhuma sala?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Verifique com seu catequista se você foi corretamente vinculado a uma sala. Apenas salas ativas e atualizadas são exibidas.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3. É necessário usar câmera ou microfone?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Depende do seu catequista. Em geral, mantenha o microfone desligado e ative apenas se for solicitado.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            4. A Catequese Online é gratuita?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Sim. A Catequese Online é totalmente gratuita para alunos e catequistas. Nosso objetivo é evangelizar com amor e acessibilidade.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
