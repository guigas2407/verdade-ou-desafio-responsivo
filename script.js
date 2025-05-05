// Arrays para perguntas de cada nível de dificuldade
const truths = {
    easy: [
        "Qual é o seu maior medo?",
        "Você já teve uma paixão secreta?",
        "Qual foi a maior mentira que você já contou?",
        "Se você pudesse mudar uma coisa em sua vida, o que seria?",
        "Qual é o seu maior arrependimento?"
    ],
    medium: [
        "Qual foi o momento mais embaraçoso da sua vida?",
        "Você já traiu alguém?",
        "Se você tivesse que escolher entre riqueza e felicidade, o que escolheria?",
        "Qual é o segredo mais estranho que você guarda?",
        "Você já fez algo ilegal?"
    ],
    hard: [
        "Qual é o maior medo que você tem de um relacionamento?",
        "Se pudesse trair alguém e ninguém jamais soubesse, você faria?",
        "Qual é o maior arrependimento que você tem na vida?",
        "Já fez algo por vingança?",
        "Qual é o seu maior segredo?"
    ],
    extreme: [
        "Qual foi a maior decisão errada que você já tomou?",
        "Você já contou uma mentira que mudou a vida de alguém?",
        "Se fosse revelar um segredo que pudesse prejudicar alguém, você o faria?",
        "Qual foi o maior erro de julgamento que você cometeu?",
        "Já fez algo tão louco que se arrependeu imediatamente?"
    ]
};

const challenges = {
    easy: [
        "Cante uma música em voz alta.",
        "Faça 10 flexões.",
        "Envie uma mensagem engraçada para um amigo.",
        "Imite um animal até alguém adivinhar qual é.",
        "Dance por 1 minuto sem música."
    ],
    medium: [
        "Cante uma música em frente a todos.",
        "Faça 20 flexões.",
        "Faça uma dancinha engraçada por 30 segundos.",
        "Imite uma pessoa famosa até alguém adivinhar quem é.",
        "Coma uma colher de molho picante."
    ],
    hard: [
        "Dance como um profissional por 1 minuto.",
        "Fale 2 minutos sobre algo sem parar.",
        "Deixe alguém escrever algo no seu rosto com marcador.",
        "Desafie alguém para uma luta de travesseiros.",
        "Fique em silêncio por 5 minutos."
    ],
    extreme: [
        "Coma algo extremamente picante.",
        "Entre em uma piscina fria por 5 minutos.",
        "Fique em silêncio e faça uma performance de mímica por 2 minutos.",
        "Revele um segredo muito pessoal.",
        "Imite uma cena de um filme com todos ao redor te assistindo."
    ]
};

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Variável para armazenar a dificuldade escolhida
let dificuldade = "easy";  // Dificuldade inicial como fácil

// Função para definir a dificuldade
function definirDificuldade(nivel) {
    dificuldade = nivel;
    alert("Dificuldade definida como: " + nivel);
}

// Função para exibir uma pergunta ou desafio aleatório
function displayQuestion(tipo) {
    let question;
    if (tipo === 'truth') {
        const shuffledTruths = shuffleArray([...truths[dificuldade]]);
        question = shuffledTruths[0]; // Pegue uma pergunta aleatória da dificuldade selecionada
    } else if (tipo === 'challenge') {
        const shuffledChallenges = shuffleArray([...challenges[dificuldade]]);
        question = shuffledChallenges[0]; // Pegue um desafio aleatório da dificuldade selecionada
    }

    // Exibe a pergunta ou desafio na tela
    const questionsDiv = document.querySelector('.questions');
    questionsDiv.innerHTML = `<h3>${question}</h3>`;
}

// Event listeners para os botões de verdade e desafio
document.querySelector('.truth').addEventListener('click', () => displayQuestion('truth'));
document.querySelector('.challenge').addEventListener('click', () => displayQuestion('challenge'));

// Event listeners para os botões de dificuldade
document.querySelector('.easy').addEventListener('click', () => definirDificuldade('easy'));
document.querySelector('.medium').addEventListener('click', () => definirDificuldade('medium'));
document.querySelector('.hard').addEventListener('click', () => definirDificuldade('hard'));
document.querySelector('.extreme').addEventListener('click', () => definirDificuldade('extreme'));

// Função para escolher o próximo jogador (sem alterações)
let ultimoJogador = null;

function escolherProximoJogador() {
    if (nomes.length === 0) {
        alert("Adicione jogadores antes de começar o jogo!");
        return;
    }

    let proximoJogador;
    do {
        const indiceAleatorio = Math.floor(Math.random() * nomes.length);
        proximoJogador = nomes[indiceAleatorio];
    } while (proximoJogador === ultimoJogador);

    ultimoJogador = proximoJogador;

    // Exibe o nome do jogador na tela
    const questionsDiv = document.querySelector('.questions');
    questionsDiv.innerHTML = `<h3>É a vez de: ${proximoJogador}</h3>`;
}

// Função para iniciar o jogo (sem alterações)
let jogoIniciado = false;

function iniciarJogo() {
    if (nomes.length === 0) {
        alert("Adicione jogadores antes de começar o jogo!");
        return;
    }
    jogoIniciado = true;
    escolherProximoJogador();
    alert("O jogo começou! É a vez do primeiro jogador.");
}

// Função para resetar o jogo (sem alterações)
function resetarJogo() {
    nomes.length = 0;
    ultimoJogador = null;
    jogoIniciado = false;
    document.getElementById("listaDeNomes").innerHTML = "";
    document.querySelector('.questions').innerHTML = "";
    alert("O jogo foi resetado!");
}

// Função para escolher o próximo jogador (sem alterações)
function proximoJogador() {
    if (!jogoIniciado) {
        alert("O jogo ainda não começou! Clique em 'Começar' para iniciar.");
        return;
    }
    escolherProximoJogador();
}

// Event listeners para os botões
document.querySelector('.start').addEventListener('click', iniciarJogo);
document.querySelector('.reset').addEventListener('click', resetarJogo);
document.querySelector('.next').addEventListener('click', proximoJogador);
