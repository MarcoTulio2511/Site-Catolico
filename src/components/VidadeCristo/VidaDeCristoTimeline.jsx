import React from 'react';
import './VidaDeCristoTimeline.css';

const etapas = [
    {
        periodo: '6 a.C. – 7 d.C.',
        titulo: 'Nascimento e Infância',
        imagem: '/img/nascimento.png',
        resumo: 'A história da infância de Jesus começa com a anunciação do anjo Gabriel a Maria (Lucas 1:26-38), revelando que ela conceberia o Filho de Deus por obra do Espírito Santo. Em seguida, Maria e José viajam até Belém, onde Jesus nasce humildemente em uma manjedoura (Lucas 2:1-20). Após o nascimento, três sábios do Oriente, guiados por uma estrela, visitam o menino e oferecem presentes simbólicos: ouro, incenso e mirra (Mateus 2:1-12). Para escapar da perseguição do rei Herodes, a família foge para o Egito, retornando a Nazaré quando o perigo passa (Mateus 2:13-23). Já aos doze anos, Jesus é encontrado entre os doutores no Templo de Jerusalém, debatendo com sabedoria e revelando sua missão divina (Lucas 2:41-50).',
        frase: '📜 "O Verbo se fez carne e habitou entre nós." (João 1:14)',
        link: '/Bibliaonline?livro=jo&capitulo=1&versiculo=15',
    },
    {
        periodo: '27-30 d.C.',
        titulo: 'Batismo e Início da Vida Pública',
        imagem: '/img/batismo.png',
        resumo: 'Jesus é batizado por João Batista no rio Jordão, ocasião em que o Espírito Santo desce sobre Ele em forma de pomba e a voz do Pai confirma sua identidade divina: "Este é o meu Filho amado" (Mateus 3:13-17). Logo após, retira-se ao deserto, onde jejua por 40 dias e enfrenta as tentações de Satanás, vencendo-as com firmeza e demonstrando total obediência ao propósito do Pai (Mateus 4:1-11). Em seguida, inicia publicamente sua missão, anunciando a chegada do Reino de Deus e chamando os primeiros discípulos — Pedro, André, Tiago e João — convidando-os a segui-lo e tornar-se "pescadores de homens" (Mateus 4:18-22).',
        frase: '📜 "Este é o meu Filho amado, em quem me comprazo." (Mateus 3:17)',
        link: '/Bibliaonline?livro=mt&capitulo=3&versiculo=17',
    },
    {
        periodo: '28-29 d.C.',
        titulo: 'Primeiros Milagres e Ensinamentos',
        imagem: '/img/primeirosmilagres.png',
        resumo: 'Em Caná da Galileia, Jesus realiza seu primeiro milagre, transformando água em vinho durante uma festa de casamento, manifestando assim sua glória e despertando a fé nos discípulos (João 2:1-11). Posteriormente, no Sermão da Montanha, proclama as Bem-Aventuranças, estabelecendo os princípios fundamentais do Reino de Deus e revelando o caminho da verdadeira felicidade pautada pela humildade, misericórdia e justiça (Mateus 5:1-12). Além disso, através de parábolas marcantes como a do Bom Samaritano e a do Filho Pródigo, ensina sobre o amor ao próximo, a compaixão e o perdão incondicional do Pai (Lucas 10:25-37; 15:11-32).',
        frase: '📜 "Bem-aventurados os que têm fome e sede de justiça, porque serão saciados." (Mateus 5:6)',
        link: '/Bibliaonline?livro=mt&capitulo=5&versiculo=6',
    },
    {
        periodo: '29-30 d.C.',
        titulo: 'Milagres e Expansão do Ministério',
        imagem: '/img/grandesmilagres.png',
        resumo: 'Entre seus milagres mais notáveis está a multiplicação dos pães e peixes, quando alimenta uma grande multidão com apenas alguns poucos alimentos, evidenciando sua providência divina (Mateus 14:13-21). Também realiza diversas curas, devolvendo a vista aos cegos, fazendo os paralíticos andarem e, de maneira extraordinária, ressuscita Lázaro, demonstrando seu poder sobre a vida e a morte (João 11:1-44). Em outro momento, caminha sobre as águas, revelando seu domínio absoluto sobre as forças da natureza e fortalecendo a fé dos discípulos (Mateus 14:22-33).',
        frase: '📜 "Eu sou o pão da vida; aquele que vem a mim não terá fome." (João 6:35)',
        link: '/Bibliaonline?livro=jo&capitulo=6&versiculo=35',
    },
    {
        periodo: '30 d.C.',
        titulo: 'Entrada e Última Ceia ',
        imagem: '/img/ultimaceia.png',
        resumo: 'Na sua entrada triunfal em Jerusalém, celebrada no Domingo de Ramos, Jesus é aclamado pela multidão como o rei e Messias esperado, cumprindo as profecias (Mateus 21:1-11). Durante a Última Ceia, institui a Eucaristia ao repartir o pão e o vinho como sinais de seu corpo e sangue, selando a nova e eterna aliança com a humanidade (Lucas 22:19-20).',
        frase: '📜 "Isto é o meu corpo, que é dado por vós." (Lucas 22:19)',
        link: '/Bibliaonline?livro=lc&capitulo=22&versiculo=19',
    },
    {
        periodo: '30 d.C.',
        titulo: 'Paixão e Morte na Cruz',
        imagem: '/img/mortenacruz.png',
        resumo: 'Em profunda oração no Getsêmani, Jesus se entrega à vontade do Pai e aceita plenamente sua missão redentora, sendo logo depois traído por Judas e preso (Mateus 26:36-50). Julgado e condenado injustamente por Pilatos, é cruelmente flagelado (Mateus 27:11-26) e, por fim, crucificado, entregando sua vida na cruz como oferta suprema pela salvação de toda a humanidade (Lucas 23:33-46).',
        frase: '📜 "Pai, perdoa-lhes, porque não sabem o que fazem." (Lucas 23:34)',
        link: '/Bibliaonline?livro=lc&capitulo=23&versiculo=34',
    },
    {
        periodo: '(30-33 d.C.)',
        titulo: 'Ressurreição e Ascensão',
        imagem: '/img/ressureicao.png',
        resumo: 'No terceiro dia após sua morte, Jesus ressuscita gloriosamente, deixando o túmulo vazio e aparecendo às mulheres e aos discípulos, enchendo-os de alegria e esperança (Mateus 28:1-10). Caminha com dois discípulos rumo a Emaús e se manifesta a Tomé, fortalecendo e confirmando a fé de todos (Lucas 24:13-49). Após 40 dias, ascende ao Céu diante dos seus seguidores, prometendo enviar o Espírito Santo para guiá-los e sustentá-los na missão de anunciar o Evangelho ao mundo inteiro (Atos 1:6-11).',
        frase: '📜 "Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá." (João 11:25)',
        link: '/Bibliaonline?livro=jo&capitulo=11&versiculo=25',
    },
];

function VidaDeCristoTimeline() {
    return (
        <div className="vida-cristo-wrapper">
            <div className="vida-container">
                {etapas.map((etapa, index) => (
                    <div key={index} className="etapa">
                        <div className="etapa-titulo">
                            <span className="periodo">{etapa.periodo}</span>
                            <h2 className="titulo">{etapa.titulo}</h2>
                            <div className="linha-horizontal"></div>
                        </div>

                        <div className="etapa-conteudo">
                            <div className="etapa-img">
                                <img src={etapa.imagem} alt={etapa.titulo} />
                            </div>
                            <div className="etapa-resumo">
                                <p>{etapa.resumo}</p>
                            </div>
                        </div>

                        <div className="etapa-footer">
                            <span className="frase">{etapa.frase}</span>
                            <a href={etapa.link} target="_blank" rel="noreferrer" className="btn-lermais">
                                Ler mais
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default VidaDeCristoTimeline;
