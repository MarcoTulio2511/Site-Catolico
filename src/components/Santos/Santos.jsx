import './Santos.css';

const santosData = [
    {
        nome: "Nossa Senhora do Perpétuo Socorro",
        imagem: "/img/perpetuo.png",
        gradiente: "linear-gradient(to top, #27274e, transparent)"
    },
    {
        nome: "Nossa Senhora da Cabeça",
        imagem: "/img/nscabeca.png",
        gradiente: "linear-gradient(to top, #2073a7, transparent)"
    },
    {
        nome: "São Miguel",
        imagem: "/img/miguel.png",
        gradiente: "linear-gradient(to top, #4b0000, transparent)"
    },
    {
        nome: "São Bento",
        imagem: "/img/bento.png",
        gradiente: "linear-gradient(to top, rgba(0, 0, 0, 0.81), transparent)"
    },
    {
        nome: "Nossa Senhora da Abadia",
        imagem: "/img/abadia.png",
        gradiente: "linear-gradient(to top, #4f87b3, transparent)"
    },
    {
        nome: "Beato Carlo Acutis",
        imagem: "/img/carlo.png",
        gradiente: "linear-gradient(to top, #4b0000, transparent)"
    }
];


export default function Santos() {
    return (
        <div className="santos-container">
            <h1>Santos e Santidades</h1>
            <div className="santos-grid">
                {santosData.map((santo, index) => (
                    <div
                        key={index}
                        className="santo-card"
                        style={{ backgroundImage: `url(${santo.imagem})` }}
                    >
                        <div
                            className="santo-nome"
                            style={{ background: santo.gradiente }}
                        >
                            {santo.nome}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
