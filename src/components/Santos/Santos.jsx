import { Link } from 'react-router-dom';
import './Santos.css';

export const santosData = [
    {
        id: 'nossa-senhora-do-perpetuo-socorro',
        nome: "Nossa Senhora do Perpétuo Socorro",
        imagem: "/img/perpetuo.png",
        gradiente: "linear-gradient(to top, #27274e, transparent)",
        descricao: `Nossa Senhora do Perpétuo Socorro é uma das devoções marianas mais conhecidas no mundo, especialmente difundida pelos missionários redentoristas. Sua origem está ligada a um ícone bizantino do século XV, que representa a Virgem Maria segurando o Menino Jesus, cercada pelos arcanjos Miguel e Gabriel, que mostram os instrumentos da Paixão de Cristo.\n\nA devoção é voltada àqueles que buscam auxílio nas dificuldades, proteção constante e amparo nas aflições. No Brasil e no mundo, milhões de fiéis participam das novenas perpétuas, pedindo socorro nas causas impossíveis e agradecendo pelas graças alcançadas. Nossa Senhora do Perpétuo Socorro é reconhecida como Mãe que nunca abandona seus filhos e intercede continuamente junto a Deus.`,
        frase: '“Nunca vos desespereis. Confiai em meu auxílio.”'
    },
    {
        id: 'nossa-senhora-da-cabeca',
        nome: "Nossa Senhora da Cabeça",
        imagem: "/img/nscabeca.png",
        gradiente: "linear-gradient(to top, #2073a7, transparent)",
        descricao: `Nossa Senhora da Cabeça é uma devoção mariana originária da Espanha, que se espalhou pelo Brasil, especialmente entre pessoas que sofrem com problemas de cabeça, como dores, enxaquecas e doenças mentais. A tradição conta que a Virgem apareceu a um humilde pastor no Monte Cabeça, na Espanha, no século XIII, pedindo a construção de um santuário no local.\n\nNo Brasil, a devoção é muito forte, especialmente entre aqueles que pedem cura, libertação e proteção contra enfermidades físicas e espirituais. Sua imagem costuma representar Maria segurando o Menino Jesus e abençoando os fiéis. A festa de Nossa Senhora da Cabeça é celebrada com muita fé, procissões e pedidos de intercessão, sendo um símbolo de esperança e alívio para quem sofre.`,
        frase: '“Aos que me buscam com fé, ofereço consolo e paz.”'
    },
    {
        id: 'sao-miguel',
        nome: "São Miguel",
        imagem: "/img/miguel.png",
        gradiente: "linear-gradient(to top, #4b0000, transparent)",
        descricao: `São Miguel Arcanjo é um dos príncipes da milícia celeste e líder dos exércitos de Deus contra as forças do mal. É mencionado na Bíblia, especialmente no livro do Apocalipse, onde comanda os anjos na batalha contra o dragão, símbolo de Satanás. Seu nome significa “Quem como Deus?”, expressão de fidelidade e obediência absoluta a Deus.\n\nSão Miguel é venerado como protetor da Igreja, defensor contra os ataques do inimigo e guardião das almas. A devoção a ele é marcada por orações de proteção, libertação e exorcismo, como a famosa oração “São Miguel Arcanjo, defendei-nos no combate”. Sua festa é celebrada em 29 de setembro, junto aos arcanjos Gabriel e Rafael, sendo símbolo de força, fé e vitória do bem sobre o mal.`,
        frase: '“Quem como Deus? Ninguém como Deus!”'
    },
    {
        id: 'sao-bento',
        nome: "São Bento",
        imagem: "/img/bento.png",
        gradiente: "linear-gradient(to top, rgba(0, 0, 0, 0.81), transparent)",
        descricao: `São Bento nasceu na região de Núrsia, na Itália, por volta do ano 480. Desde jovem, buscou uma vida dedicada a Deus, afastando-se dos costumes e corrupções do mundo. Abandonou os estudos em Roma para viver como eremita em uma caverna na região de Subíaco, onde passou anos em oração, penitência e meditação. Sua fama de santidade atraiu muitos discípulos, e ele passou a orientá-los espiritualmente, fundando doze pequenos mosteiros na região.\n\nPosteriormente, São Bento fundou o famoso Mosteiro de Monte Cassino, onde escreveu sua Regra, um conjunto de orientações que equilibram oração, trabalho e vida comunitária. Essa regra se tornou a base do monaquismo ocidental, influenciando profundamente a vida religiosa na Europa. São Bento é conhecido como o patrono da Europa e é venerado pela proteção contra o mal, simbolizada pela medalha de São Bento, que contém orações de exorcismo e proteção espiritual. Faleceu em 547, sendo lembrado até hoje por sua vida de fé, disciplina e amor a Deus.`,
        frase: '“Ora et labora — Reza e trabalha.”'
    },
    {
        id: 'nossa-senhora-da-abadia',
        nome: "Nossa Senhora da Abadia",
        imagem: "/img/nossa-senhora-abadia.png",
        gradiente: "linear-gradient(to top, #4f87b3, transparent)",
        descricao: `Nossa Senhora da Abadia é uma das invocações marianas mais queridas no Brasil, especialmente em Minas Gerais, Goiás e Bahia. Sua devoção teve origem em Portugal, onde foi construída uma abadia dedicada a Maria no século XIII. No Brasil, a devoção começou com os colonizadores portugueses e rapidamente se espalhou entre os fiéis, que recorriam à Virgem Maria pedindo proteção, saúde e bênçãos para suas famílias e lavouras.\n\nA imagem de Nossa Senhora da Abadia é geralmente representada com manto azul, segurando o Menino Jesus no colo, transmitindo ternura e cuidado materno. Sua festa é celebrada em 15 de agosto, atraindo milhares de romeiros que fazem promessas e peregrinações em sinal de fé e gratidão. Ela é considerada padroeira dos pobres, dos enfermos e das comunidades rurais, sendo um símbolo de esperança, amor e devoção para seus fiéis.`,
        frase: '“Venham a mim todos que estão aflitos e sobrecarregados.”'
    },
    {
        id: 'beato-carlo-acutis',
        nome: "Beato Carlo Acutis",
        imagem: "/img/carlo.png",
        gradiente: "linear-gradient(to top, #4b0000, transparent)",
        descricao: `Carlo Acutis nasceu em 1991, em Londres, mas viveu na Itália desde pequeno. Desde muito jovem, demonstrou uma grande fé e devoção à Eucaristia, que considerava sua “estrada para o céu”. Apaixonado por tecnologia, usava seus conhecimentos para evangelizar, criando um site que documentava milagres eucarísticos ao redor do mundo. Sempre foi conhecido por sua generosidade, simplicidade e amor pelos mais necessitados.\n\nCarlo faleceu em 2006, aos 15 anos, vítima de leucemia, oferecendo seu sofrimento pela Igreja e pelo Papa. Seu testemunho de fé, amor e caridade inspira milhares de jovens no mundo todo. Foi beatificado em 2020 e é considerado o padroeiro da internet e dos jovens digitais, mostrando que é possível viver a santidade mesmo no mundo moderno e conectado.`,
        frase: '“A Eucaristia é minha rodovia para o céu.”'
    }
];


export default function Santos() {
    return (
        <div className="santos-container">
            <h1>Santos e Santidades</h1>
            <div className="santos-grid">
                {santosData.map((santo) => (
                    <Link to={`/SantoDetalhe/${santo.id}`} key={santo.id}>
                        <div
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
                    </Link>
                ))}
            </div>
        </div>
    );
}
