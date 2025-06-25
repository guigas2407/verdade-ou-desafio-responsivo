// Arrays para perguntas de cada nível de dificuldade
const truths = {
    easy: [
        "Qual é o seu maior medo?",
        "Você já teve uma paixão secreta?",
        "Qual foi a maior mentira que você já contou?",
        "Se você pudesse mudar uma coisa em sua vida, o que seria?",
        "Qual é o seu maior arrependimento?",
        "Quem da roda é o mais chato?",
        "Quem da roda é o mais legal?",
        "Você já teve um sonho bizarro?",
        "Você já fingiu estar doente?",
        "Você já chorou vendo um filme?",
        "Se pudesse ter um superpoder, qual seria?",
        "Qual é o seu gosto mais estranho?",
        "Quem da roda você gostaria de conhecer melhor?",
        "Qual comida você ama mas tem vergonha de admitir?",
        "Qual foi a maior gafe que você já cometeu em público ?",
        "Você já teve um crush por alguém da sua turma / trabalho ?",
        "Se você pudesse mudar algo em seu corpo, o que mudaria ?",
        "Qual é a coisa mais estranha que você já fez por amor ?",
        "Você já teve um dia inteiro sem tomar banho ?",
        "Qual é a coisa mais engraçada que você já fez sem querer ?",
        "Você já trocou olhares com alguém e se sentiu desconfortável ?",
        "Se você pudesse ter um encontro com qualquer pessoa, quem escolheria ?",
        "Qual a sua maior vergonha na frente de uma pessoa especial ?",
        "Você já ficou com alguém e depois se arrependeu ?",
        "O que você faria se estivesse sozinho em casa com alguém de quem gosta ?",
        "Qual é o maior segredo que você guarda da sua família ?",
        "Você já beijou alguém em público ?",
        "Já se sentiu atraído por alguém da sua amizade íntima ?",
        "Você já deu um beijo de língua em alguém sem querer ?"
    ],
    medium: [
        "Qual foi o momento mais embaraçoso da sua vida?",
        "Você já traiu alguém?",
        "Se tivesse que escolher entre riqueza e felicidade, o que escolheria?",
        "Qual é o segredo mais estranho que você guarda?",
        "Você já fez algo ilegal?",
        "Quem da roda é o mais bonito?",
        "Quem da roda você acha mais feio?",
        "Você já se arrependeu de não ter falado algo?",
        "Você já foi exposto por alguém?",
        "Você já teve vergonha alheia por alguém?",
        "Você já escondeu um segredo importante?",
        "Se você pudesse apagar uma memória, qual seria?",
        "Quem da roda você acha que está escondendo algo?",
        "Você já julgou alguém sem conhecer?",
        "Qual foi a coisa mais esquisita que você já pesquisou?",
        "Se você tivesse que escolher entre um amigo e um amor, quem você escolheria ?",
        "O que você faria se alguém te pedisse um beijo por um milhão de reais ?",
        "Você já trocou mensagens picantes com alguém ?",
        "Se você fosse se envolver com alguém da roda, quem seria ?",
        "Você já fez algo por impulso e se arrependeu depois ?",
        "Já teve um encontro que começou bem, mas terminou de forma estranha?",
        "Qual é a sua fantasia mais secreta ?",
        "Você já sentiu atração por alguém muito mais velho ou mais novo que você ?",
        "Você já ficou com alguém que tinha namorado(a) ?",
        "Já foi em algum lugar e se sentiu atraído por um estranho ?",
        "Qual o maior erro que você cometeu em um relacionamento ?",
        "Já ficou em uma situação desconfortável porque não sabia o que fazer com alguém ?",
        "O que você faria se soubesse que a pessoa que você gosta sente o mesmo por você ?",
        "Você já enviou uma mensagem para a pessoa errada e se sentiu envergonhado ?",
        "Você já teve vontade de beijar alguém da sua roda de amigos ?"
    ],
    hard: [
        "Qual é o maior medo que você tem de um relacionamento?",
        "Se pudesse trair alguém e ninguém jamais soubesse, você faria?",
        "Qual é o maior arrependimento que você tem na vida?",
        "Já fez algo por vingança?",
        "Qual é o seu maior segredo?",
        "Quem da roda você teria nojo de beijar?",
        "Quem da roda você acha mais sexy?",
        "Você já desejou o mal para alguém?",
        "Você já manipulou alguém para conseguir algo?",
        "Qual a pior coisa que você já pensou sobre alguém próximo?",
        "Você sente inveja de alguém aqui?",
        "Você já escondeu sentimentos por alguém da roda?",
        "Se pudesse apagar uma pessoa da sua vida, quem seria?",
        "Qual foi sua maior decepção amorosa?",
        "Você já usou alguém emocionalmente?",
        "Você já ficou com alguém apenas para se vingar de outra pessoa ?",
        "Qual é o maior segredo que você guarda sobre relacionamentos passados ?",
        "Já fez algo para conquistar alguém, mas depois se arrependeu ?",
        "Se tivesse que trair alguém e nunca ser descoberto, faria ?",
        "Você já se apaixonou por alguém que era comprometido(a) ?",
        "Já teve um envolvimento com alguém e depois não quis mais saber da pessoa ?",
        "Você já manipulou alguém para obter o que queria em um relacionamento ?",
        "Já teve um relacionamento escondido de todos por vergonha ou medo ?",
        "Você já se apaixonou por alguém que não deveria ?",
        "Se você pudesse apagar um beijo ou um momento, qual seria ?",
        "Qual é o segredo mais íntimo que você tem sobre um relacionamento ?",
        "Já enviou uma mensagem picante e se arrependeu depois ?",
        "Você já desejou que um relacionamento chegasse ao fim mais rápido ?",
        "Já ficou com alguém para 'superar' outra pessoa ?",
        "Qual foi o maior erro que você cometeu em um relacionamento ?"
    ],
    extreme: [
        "Qual foi a maior decisão errada que você já tomou?",
        "Você já contou uma mentira que mudou a vida de alguém?",
        "Se fosse revelar um segredo que pudesse prejudicar alguém, você o faria?",
        "Qual foi o maior erro de julgamento que você cometeu?",
        "Já fez algo tão louco que se arrependeu imediatamente?",
        "Com quem da roda é mais provável que você pensasse na hora do banho?",
        "Com quem da roda você transaria?",
        "Você já se masturbou pensando em alguém da roda? Se sim, quem?",
        "Qual foi a situação mais intensa que já viveu sexualmente?",
        "Qual o segredo mais sombrio que você esconde?",
        "Você já enganou alguém para benefício próprio?",
        "Você já teve fantasias com alguém que não devia?",
        "Qual foi a coisa mais humilhante que já fez por amor?",
        "Com quem da roda você teria uma noite sem compromisso?",
        "Já foi infiel em pensamento durante um relacionamento?",
        "Você já se apaixonou por alguém completamente errado e não contou para ninguém?",
        "Qual é a coisa mais ousada que você faria por uma pessoa que você gosta?",
        "Você já beijou alguém em um lugar público e sentiu vergonha depois?",
        "Já teve um envolvimento sexual com alguém só para se vingar de outra pessoa?",
        "Você já teve um crush em alguém da sua família ou amigos próximos?",
        "Se você pudesse ter uma noite sem compromisso com alguém da roda, quem seria?",
        "Qual foi o momento mais estranho ou excitante que você já viveu em um relacionamento?",
        "Você já fez algo completamente louco por desejo, mas se arrependeu depois?",
        "Se tivesse a chance de estar com alguém da roda por 1 noite, quem seria?",
        "Você já teve um pensamento tão atrevido sobre alguém que ficou envergonhado?",
        "Já mandou uma mensagem sexual para alguém que você mal conhece?",
        "Qual é o segredo mais quente que você já escondeu de alguém?",
        "Se você tivesse que escolher entre trair alguém e ficar com a pessoa que gosta, o que faria?",
        "Você já teve uma fantasia com alguém que você sabia que não podia ter?",
        "Já foi infiel em pensamento e depois se sentiu culpado?"
    ]
};

const challenges = {
    easy: [
        "Cante uma música em voz alta.",
        "Faça 10 flexões.",
        "Envie uma mensagem engraçada para um amigo.",
        "Imite um animal até alguém adivinhar qual é.",
        "Dance por 1 minuto sem música.",
        "Dê um selinho em alguém da roda.",
        "Diga uma frase engraçada em voz alta.",
        "Faça uma careta engraçada e mantenha por 10 segundos.",
        "Dê um abraço bem apertado em alguém da roda por 10 segundos.",
        "Olhe fixamente nos olhos de alguém da roda por 20 segundos sem rir.",
        "Dê um selinho em alguém da roda com os olhos fechados.",
        "Abra um presente (de mentira) e entregue ele de forma carinhosa para alguém da roda.",
        "Diga algo sedutor para alguém da roda (sem ser explícito).",
        "Faça um elogio bem direto para alguém da roda.",
        "Fique de mãos dadas com alguém da roda por 1 minuto.",
        "Olhe fixamente nos olhos de alguém da roda por 20 segundos sem rir.",
        "Dê um abraço bem apertado em alguém da roda por 10 segundos.",
        "Fique no colo de alguém da roda por 30 segundos.",
        "Toque levemente o cabelo de alguém da roda por 30 segundos.",
        "Passe um batom e dê um beijo estalado em alguém da roda.",
        "Faça uma massagem nos ombros de alguém da roda por 1 minuto.",
        "Sente-se no colo de alguém e faça uma dancinha por 30 segundos.",
        "Faça uma brincadeira de 'verdade ou desafio' com um toque mais carinhoso.",
        "Toque as mãos de todos os participantes por 10 segundos.",
        "Faça uma dança maluca por 30 segundos.",
        "Tire uma foto engraçada imitando a expressão de uma celebridade.",
        "Diga um elogio sincero para a pessoa à sua esquerda.",
        "Tente fazer um truque de mágica simples e mostre para todos.",
        "Fale uma frase engraçada em um sotaque diferente."
    ],
    medium: [
        "Cante uma música em frente a todos.",
        "Faça 20 flexões.",
        "Faça uma dancinha engraçada por 30 segundos.",
        "Imite uma pessoa famosa até alguém adivinhar quem é.",
        "Coma uma colher de molho picante.",
        "Dê um selinho em alguém da roda com a boca cheia.",
        "Tire uma selfie engraçada e poste nas redes sociais.",
        "Fale com um sotaque diferente por 2 minutos.",
        "Dê um beijo no rosto de alguém e segure o olhar por 10 segundos.",
        "Dance agarrado a alguém da roda por 1 minuto.",
        "Fique deitado(a) no colo de alguém por 1 minuto.",
        "Mande uma mensagem sensual (mas não explícita) para alguém da roda.",
        "Faça um striptease (só as camadas de roupa mais simples, sem nada excessivo).",
        "Toque a mão de alguém da roda enquanto faz um elogio pessoal.",
        "Faça uma dança provocante para alguém da roda.",
        "Olhe para os olhos de alguém e faça um comentário atrevido.",
        "Envie uma mensagem carinhosa para um amigo sem usar palavras de carinho óbvias.",
        "Tente dar um beijo na bochecha de alguém sem ser percebido.",
        "Faça uma dança sexy com a pessoa da roda de sua escolha por 1 minuto.",
        "Fique de mãos dadas com alguém e caminhe por 1 minuto sem soltar.",
        "Troque de lugar com alguém da roda, mas de forma mais sensual.",
        "Sente-se no colo de alguém da roda por 1 minuto enquanto troca olhares.",
        "Sussurre algo bem atrevido no ouvido de alguém da roda.",
        "Envie uma mensagem de bom dia para alguém com um texto carinhoso, mas sem ser exagerado.",
        "Poste uma foto no Instagram com uma legenda engraçada, algo bem aleatório.",
        "Diga uma frase embaraçosa que você já ouviu de alguém, mas sem mencionar o nome da pessoa.",
        "Faça uma imitação de um famoso até alguém adivinhar quem é.",
        "Dance como se estivesse em um show de TV, com direito a muito movimento e energia!"
    ],
    hard: [
        "Dance como um profissional por 1 minuto.",
        "Fale Dancelco sem parar.",
        "Dê um beijo no rosto de alguém e segure o olhar por 10 segundos.",
        "Deixe alguém da roda fazer uma maquiagem engraçada em você.",
        "Fique deitado(a) no colo de alguém por 1 minuto.",
        "Desafie alguém para uma luta mano a mano.",
        "Faça um striptease (só as camadas de roupa mais simples, sem nada excessivo).",
        "Toque a mão de alguém da roda enquanto faz um elogio pessoal.",
        "Faça uma dança provocante para alguém da roda.",
        "Olhe para os olhos de alguém e faça um comentário atrevido.",
        "Envie uma mensagem carinhosa para um amigo sem usar palavras de carinho óbvias.",
        "Tente dar um beijo na bochecha de alguém sem ser percebido.",
        "Faça uma dança sexy com a pessoa da roda de sua escolha por 1 minuto.",
        "Fique de mãos dadas com alguém e caminhe por 1 minuto sem soltar.",
        "Troque de lugar com alguém da roda, mas de forma mais sensual.",
        "Sente-se no colo de alguém da roda por 1 minuto enquanto troca olhares.",
        "Sussurre algo bem atrevido no ouvido de alguém da roda.",
        "Fique em silêncio por 5 minutos.",
        "Passe agua da sua boca para a boca de alguém da roda.",
        "Fique duas rodadas sentado no colo do proximo jogador.",
        "troque de roupa com alguém da roda.",
        "mande mensagem se declarando para a 12ª pessoa da sua lista de seguindo do instagram.",
        "Sente-se no colo de alguém e se movimente de maneira sugestiva por 1 minuto.",
        "Beije alguém da roda na boca por 5 segundos (selinho é permitido).",
        "Dê um beijo intenso na bochecha de alguém e mantenha o rosto perto por 10 segundos.",
        "Diga algo picante e olhe nos olhos de alguém enquanto fala.",
        "Toque a perna de alguém de forma carinhosa enquanto faz uma brincadeira.",
        "Dance um tango ou uma dança sensual com alguém da roda.",
        "Toque os ombros de alguém e faça uma massagem leve por 1 minuto.",
        "Passe um tempo em silêncio com alguém, olhando fixamente para os olhos da pessoa.",
        "Sente-se de frente para alguém e faça uma dança de forma provocante.",
        "Faça uma brincadeira mais ousada envolvendo toque, mas sem ultrapassar os limites de ninguém.",
        "Envie uma mensagem quente (mas sem ser vulgar) para um amigo próximo.",
        "Coloque as mãos nos ombros de alguém e faça um movimento sensual.",
        "Dê um beijo no pescoço de alguém da roda (de leve e sem ser invasivo).",
        "Fique abraçado com alguém por 3 minutos sem dizer nada.",
        "Faça uma dança erótica para alguém da roda, mas de maneira leve."
    ],
    extreme: [
        "Coma algo extremamente picante.",
        "Entre em uma piscina fria por 5 minutos.",
        "Fique em silêncio e faça uma performance de mímica por 2 minutos.",
        "Revele um segredo muito pessoal.",
        "Imite uma cena de um filme com todos ao redor te assistindo.",
        "Fique 10min em um quarto separado com o proximo jogador.",
        "Tire a roupa de alguém da roda.",
        "Tire uma peça de roupa e jogue para alguém da roda.",
        "Mande uma mensagem para o seu ex dizendo que ainda gosta dele.",
        "Mande uma ens para o seu crush dizendo que aoa ele.",
        "Tire a roupa de alguém da roda.",
        "Dê um beijo apaixonado na boca de alguém da roda por 10 segundos.",
        "Sente-se no colo de alguém e faça um movimento sensual por 2 minutos.",
        "Faça um striptease mais ousado (respeite os limites, sem ultrapassar o bom senso).",
        "Passe 5 minutos em um quarto isolado com alguém da roda (sem fazer nada que seja desconfortável).",
        "Tire uma peça de roupa e jogue para alguém da roda.",
        "Realize uma dança provocante e sensual para alguém da roda com toque físico.",
        "Troque de roupa com alguém da roda.",
        "Envie uma mensagem com uma confissão pessoal e picante para alguém da roda.",
        "Toque em partes do corpo de alguém de forma provocante (sempre com consentimento claro).",
        "Faça uma brincadeira que envolva mais toque físico e menos verbal.",
        "Diga algo profundamente íntimo para alguém da roda e mantenha contato visual.",
        "Passe 5 minutos se acariciando levemente com alguém da roda.",
        "Realize uma dança sensual com contato físico, mas sem ultrapassar limites.",
        "Fique 5 minutos em um 'momento íntimo' de conversa com alguém, sem se preocupar com os outros.",
        "Sente-se no colo de alguém e faça um movimento muito mais provocante por 2 minutos."
    ],
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
let dificuldade = "easy"; // Dificuldade inicial como fácil

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

// Função para escolher o próximo jogador
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

// Função para iniciar o jogo
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

// Função para resetar o jogo
function resetarJogo() {
    nomes.length = 0;
    ultimoJogador = null;
    jogoIniciado = false;
    document.getElementById("listaDeNomes").innerHTML = "";
    document.querySelector('.questions').innerHTML = "";
    alert("O jogo foi resetado!");
}

// Função para escolher o próximo jogador
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
