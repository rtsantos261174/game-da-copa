// Banco de Dados contendo 30 perguntas sobre o futebol brasileiro
const QUESTION_POOL = [
    {
        q: "Quem é o maior artilheiro da história da Seleção Brasileira masculina de acordo com os critérios oficiais da FIFA?",
        options: ["Pelé", "Neymar Jr", "Ronaldo Fenômeno", "Romário"],
        correct: 1,
        desc: "Neymar Jr superou a marca de Pelé nas Eliminatórias, tornando-se o maior artilheiro oficial da Seleção de acordo com os registros oficiais da FIFA."
    },
    {
        q: "Qual clube do futebol brasileiro faturou o primeiríssimo Mundial de Clubes organizado diretamente pela FIFA em 2000?",
        options: ["Palmeiras", "São Paulo", "Vasco da Gama", "Corinthians"],
        correct: 3,
        desc: "O Corinthians foi o grande vencedor do torneio disputado no Brasil em 2000, superando o Vasco na final por pênaltis."
    },
    {
        q: "Quantas Copas do Mundo a Seleção Brasileira de Futebol Masculino conquistou em toda a sua rica história?",
        options: ["3 Copas", "4 Copas", "5 Copas", "6 Copas"],
        correct: 2,
        desc: "O Brasil é a única seleção nacional pentacampeã do mundo (1958, 1962, 1970, 1994 e 2002)."
    },
    {
        q: "Quem é mundialmente e eternamente venerado com a coroa e o título de 'Rei do Futebol'?",
        options: ["Zico", "Garrincha", "Pelé", "Ronaldinho Gaúcho"],
        correct: 2,
        desc: "Pelé (Edson Arantes do Nascimento) conquistou 3 Copas do Mundo e marcou mais de 1200 gols, sendo eternizado como o maior jogador de todos os tempos."
    },
    {
        q: "Qual prestigiado clube do Rio Grande do Sul possui a alcunha clássica de 'Imortal Tricolor'?",
        options: ["Internacional", "Juventude", "Caxias", "Grêmio"],
        correct: 3,
        desc: "O Grêmio Foot-Ball Porto Alegrense é conhecido nacionalmente como o 'Imortal Tricolor' devido à sua raça histórica e viradas épicas."
    },
    {
        q: "Quem foi o técnico comandante que orquestrou a conquista do pentacampeonato da Seleção em 2002 na Ásia?",
        options: ["Mário Jorge Lobo Zagallo", "Luiz Felipe Scolari (Felipão)", "Carlos Alberto Parreira", "Telê Santana"],
        correct: 1,
        desc: "Luiz Felipe Scolari, o Felipão, liderou a histórica 'Família Scolari' rumo à inesquecível taça da Copa do Mundo de 2002."
    },
    {
        q: "Qual grandioso estádio brasileiro foi palco da dolorosa final da Copa do Mundo de 1950, o famoso Maracanazo?",
        options: ["Maracanã", "Pacaembu", "Mineirão", "Morumbi"],
        correct: 0,
        desc: "O icônico Maracanã sediou o evento em que o Uruguai superou o Brasil diante de quase 200.000 torcedores no Rio de Janeiro."
    },
    {
        q: "Qual artilheiro da Copa de 1938 ficou mundialmente imortalizado como o criador ou grande popularizador do gol de bicicleta?",
        options: ["Leônidas da Silva", "Ademir de Menezes", "Arthur Friedenreich", "Garrincha"],
        correct: 0,
        desc: "Leônidas da Silva, conhecido também como 'Diamante Negro', foi um dos maiores craques da história do futebol mundial pré-anos 50."
    },
    {
        q: "Qual brilhante meio-campista e ídolo máximo da história do Flamengo é apelidado de 'Galinho de Quintino'?",
        options: ["Zico", "Júnior", "Adílio", "Petkovic"],
        correct: 0,
        desc: "Zico ganhou esse carinhoso apelido por ter nascido e crescido no bairro de Quintino, no Rio de Janeiro, brilhando no Flamengo e na Seleção."
    },
    {
        q: "Qual equipe faturou a dramática Copa Libertadores de 2019 com uma épica virada nos minutos finais contra o River Plate?",
        options: ["Palmeiras", "Grêmio", "Flamengo", "São Paulo"],
        correct: 2,
        desc: "O Flamengo venceu o River Plate por 2 a 1 com dois gols espetaculares de Gabriel Barbosa (Gabigol) no final do segundo tempo."
    },
    {
        q: "Qual jogador brasileiro obteve a prestigiosa honraria de melhor do mundo (Bola de Ouro) jogando pelo Milan em 2007?",
        options: ["Ronaldinho Gaúcho", "Kaká", "Ronaldo Fenômeno", "Adriano Imperador"],
        correct: 1,
        desc: "Kaká brilhou intensamente no Milan, faturando a Champions League e sendo eleito o Melhor Jogador do Mundo da FIFA em 2007."
    },
    {
        q: "Quem detém a marca histórica de maior artilheiro em todas as edições do Campeonato Brasileiro (Série A)?",
        options: ["Romário", "Roberto Dinamite", "Pelé", "Fred"],
        correct: 1,
        desc: "O lendário Roberto Dinamite, maior ídolo da história do Vasco da Gama, marcou impressionantes 190 gols no Campeonato Brasileiro."
    },
    {
        q: "Qual gigante das Alterosas foi fundado originalmente sob o nome de Palestra Itália antes de se tornar conhecido mundialmente como Cruzeiro?",
        options: ["Atlético Mineiro", "América Mineiro", "Cruzeiro", "Ipatinga"],
        correct: 2,
        desc: "Fundado em 1921 como Palestra Itália, o clube mineiro alterou seu nome oficial para Cruzeiro Esporte Clube em 1942 por razões patrióticas durante a Segunda Guerra."
    },
    {
        q: "Em qual edição da Copa do Mundo Ronaldinho Gaúcho marcou aquele gol de falta histórico encobrindo o goleiro da Inglaterra?",
        options: ["Copa de 1998", "Copa de 2002", "Copa de 2006", "Copa de 2010"],
        correct: 1,
        desc: "Na Copa de 2002, Ronaldinho desferiu uma falta monumental que encobriu o goleiro David Seaman, classificando o Brasil nas quartas de final."
    },
    {
        q: "Qual clássico representa a maior e mais fervorosa rivalidade de clubes do Rio Grande do Sul?",
        options: ["Clássico das Multidões", "Gre-Nal", "San-Sans", "Derby Campineiro"],
        correct: 1,
        desc: "O Gre-Nal, disputado há mais de um século entre Grêmio e Internacional, é um dos clássicos regionais mais disputados do mundo."
    },
    {
        q: "Qual lendário centroavante foi eleito o melhor jogador do torneio da Copa do Mundo de 1994, guiando o Brasil ao tetra?",
        options: ["Bebeto", "Romário", "Müller", "Ronaldo Fenômeno"],
        correct: 1,
        desc: "O 'Baixinho' Romário fez uma Copa impecável nos EUA, decidindo partidas essenciais e quebrando o tabu de 24 anos sem títulos."
    },
    {
        q: "Qual clube do Nordeste detém carinhosamente a alcunha de 'Vovô' por ser a agremiação em atividade contínua mais antiga de seu estado?",
        options: ["Ceará SC", "Bahia", "Fortaleza", "Sport Recife"],
        correct: 0,
        desc: "O Ceará Sporting Club é carinhosamente apelidado de 'Vovô', pois foi fundado em 1914, sendo o mais antigo do futebol cearense."
    },
    {
        q: "Quem é a maior jogadora da história do futebol feminino do Brasil, detentora de incríveis 6 prêmios de Melhor do Mundo?",
        options: ["Cristiane", "Formiga", "Marta", "Andressa Alves"],
        correct: 2,
        desc: "Marta Vieira da Silva é amplamente considerada a maior jogadora de todos os tempos, quebrando recordes mundiais masculinos e femininos."
    },
    {
        q: "Qual clube paulista faturou o histórico Tricampeonato Mundial de forma invicta e consecutiva nos anos de 1992, 1993 e 2005?",
        options: ["Santos", "Palmeiras", "Corinthians", "São Paulo"],
        correct: 3,
        desc: "O São Paulo Futebol Clube conquistou seus três mundiais vencendo o Barcelona (1992), Milan (1993) e Liverpool (2005)."
    },
    {
        q: "Em qual clássica equipe brasileira Pelé iniciou, jogou por quase duas décadas e se consagrou mundialmente para a história?",
        options: ["Santos FC", "Vasco da Gama", "Fluminense", "Flamengo"],
        correct: 0,
        desc: "Pelé defendeu o glorioso Santos FC de 1956 a 1974, onde faturou duas Copas Libertadores, dois Mundiais e uma dezena de campeonatos estaduais."
    },
    {
        q: "Qual goleiro brasileiro marcou mais de 100 gols na carreira cobrando fantásticos pênaltis e cobranças de falta?",
        options: ["Rogério Ceni", "Marcos", "Dida", "Taffarel"],
        correct: 0,
        desc: "Rogério Ceni, ídolo supremo do São Paulo, encerrou sua carreira lendária com 131 gols anotados, o goleiro mais goleador da história do futebol."
    },
    {
        q: "Qual famoso jogador da seleção brasileira ficou eternamente conhecido pelo emblemático apelido de 'O Animal' nos anos 90?",
        options: ["Edmundo", "Evair", "Romário", "Túlio Maravilha"],
        correct: 0,
        desc: "Edmundo recebeu esse carismático apelido do narrador Osmar Santos por sua raça indomável e qualidade extraordinária em campo."
    },
    {
        q: "Qual foi a grande seleção derrotada pelo Brasil na finalíssima de Tóquio, selando o Pentacampeonato em 2002?",
        options: ["Alemanha", "França", "Itália", "Inglaterra"],
        correct: 0,
        desc: "O Brasil superou a Alemanha por 2 a 0, gols marcados pelo imparável Ronaldo Fenômeno após falha do goleiro Oliver Kahn."
    },
    {
        q: "Em 2023, o Atlético Mineiro inaugurou oficialmente sua moderna e grandiosa casa própria. Qual é o nome oficial desse estádio?",
        options: ["Allianz Parque", "Arena MRV", "Neo Química Arena", "Estádio Beira-Rio"],
        correct: 1,
        desc: "A Arena MRV é a nova casa tecnológica e caldeirão oficial do Clube Atlético Mineiro, localizada em Belo Horizonte."
    },
    {
        q: "Qual jogador fez o gol heróico nos minutos finais de acréscimo que deu a Copa Libertadores de 2020 ao Palmeiras contra o Santos?",
        options: ["Breno Lopes", "Dudu", "Raphael Veiga", "Rony"],
        correct: 0,
        desc: "Breno Lopes saltou nos acréscimos do segundo tempo no Maracanã para cabecear certeiro, dando o bicampeonato continental ao Palmeiras."
    },
    {
        q: "Qual clube do Paraná, campeão brasileiro em 1985 e bicampeão da Sul-Americana, é comumente conhecido como 'Furacão'?",
        options: ["Paraná Clube", "Coritiba", "Athletico Paranaense", "Londrina"],
        correct: 2,
        desc: "O Club Athletico Paranaense é carinhosamente chamado de 'Furacão', em alusão ao seu time fortíssimo que atropelava adversários nos anos 40."
    },
    {
        q: "Qual lendário jogador comandou o Vasco da Gama na impressionante virada por 4 a 3 na final da Copa Mercosul 2000 contra o Palmeiras?",
        options: ["Romário", "Edmundo", "Juninho Paulista", "Viola"],
        correct: 0,
        desc: "O Vasco perdia por 3 a 0 no primeiro tempo. Sob a batuta de Romário, autor de três gols, o Cruzmaltino virou o jogo de forma mágica."
    },
    {
        q: "Quem é carinhosamente apelidado como 'O Bruxo' por sua extrema habilidade plástica, dribles lúdicos e sorrisos emblemáticos?",
        options: ["Neymar Jr", "Ronaldinho Gaúcho", "Garrincha", "Denílson"],
        correct: 1,
        desc: "Ronaldinho Gaúcho é 'O Bruxo' pelas jogadas que pareciam feitiçaria pura no gramado, maravilhando fãs de futebol no mundo todo."
    },
    {
        q: "Qual tradicional clube do Rio de Janeiro exibe orgulhosamente uma única Estrela Solitária brilhando em seu escudo oficial?",
        options: ["Fluminense", "Vasco", "Botafogo", "Bangu"],
        correct: 2,
        desc: "A Estrela de Cinco Pontas (Estrela Solitária) representa a Estrela D'Alva no escudo clássico do Botafogo de Futebol e Regatas."
    },
    {
        q: "Quem foi o lendário capitão e responsável por erguer a icônica Taça Jules Rimet na conquista do Tri em 1970?",
        options: ["Gerson", "Tostão", "Pelé", "Carlos Alberto Torres"],
        correct: 3,
        desc: "O lateral-direito Carlos Alberto Torres foi o eterno 'Capita' do esquadrão tricampeão de 1970 no México, famoso também pelo gol antológico na grande final."
    }
];

let gameState = {
    playerName: "",
    currentQuestions: [],
    currentIndex: 0,
    score: 0,
    answersRecord: [],
    answered: false,
    soundMuted: false
};

let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSfx(type) {
    if (gameState.soundMuted) return;
    try {
        initAudio();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        if (type === 'correct') {
            let osc = audioCtx.createOscillator();
            let gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.frequency.setValueAtTime(440, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.3);

        } else if (type === 'incorrect') {
            let osc = audioCtx.createOscillator();
            let gain = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.frequency.setValueAtTime(220, audioCtx.currentTime);
            osc.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            
            osc.start();
            osc.stop(audioCtx.currentTime + 0.3);

        } else if (type === 'whistle') {
            let now = audioCtx.currentTime;
            [0, 0.18].forEach(delay => {
                let osc = audioCtx.createOscillator();
                let gain = audioCtx.createGain();
                osc.type = 'triangle';
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                
                let mod = audioCtx.createOscillator();
                let modGain = audioCtx.createGain();
                mod.frequency.value = 45; 
                modGain.gain.value = 150;
                
                mod.connect(modGain);
                modGain.connect(osc.frequency);
                
                osc.frequency.value = 2500;
                gain.gain.setValueAtTime(0.08, now + delay);
                gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.13);
                
                mod.start(now + delay);
                osc.start(now + delay);
                mod.stop(now + delay + 0.15);
                osc.stop(now + delay + 0.15);
            });
        }
    } catch (err) {
        console.warn("Audio Context falhou:", err);
    }
}

function toggleMute() {
    gameState.soundMuted = !gameState.soundMuted;
    const icon = document.getElementById('sound-icon');
    const btn = document.getElementById('btn-sound');
    if (gameState.soundMuted) {
        icon.className = "fa-solid fa-volume-xmark";
        btn.classList.add('bg-red-500/10', 'text-red-400');
        btn.classList.remove('text-emerald-300');
    } else {
        icon.className = "fa-solid fa-volume-high";
        btn.classList.remove('bg-red-500/10', 'text-red-400');
        btn.classList.add('text-emerald-300');
        playSfx('correct');
    }
}

function showInfoModal() {
    document.getElementById('modal-info').classList.remove('hidden');
    document.getElementById('modal-info').classList.add('flex');
}

function hideInfoModal() {
    document.getElementById('modal-info').classList.add('hidden');
    document.getElementById('modal-info').classList.remove('flex');
}

function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startGame(event) {
    event.preventDefault();
    const nameInput = document.getElementById('player-name').value.trim();
    if (!nameInput) return;

    initAudio();

    gameState.playerName = nameInput;
    document.getElementById('display-player-name').textContent = nameInput;

    document.getElementById('screen-register').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');

    restartGame(false);
}

function restartGame(isFullReset = false) {
    gameState.currentIndex = 0;
    gameState.score = 0;
    gameState.answersRecord = [];
    gameState.answered = false;

    const shuffledPool = shuffleArray(QUESTION_POOL);
    gameState.currentQuestions = shuffledPool.slice(0, 10).map(q => {
        const originalOptions = q.options;
        const correctText = originalOptions[q.correct];
        const shuffledOptions = shuffleArray(originalOptions);
        const newCorrectIndex = shuffledOptions.indexOf(correctText);
        return {
            q: q.q,
            options: shuffledOptions,
            correct: newCorrectIndex,
            desc: q.desc
        };
    });

    for (let i = 0; i < 10; i++) {
        const element = document.getElementById(`dot-${i}`);
        element.className = "aspect-square bg-emerald-900/40 rounded-full border border-emerald-800 flex items-center justify-center text-[10px] text-emerald-700 transition-all duration-300 font-bold";
        element.innerHTML = i + 1;
    }

    document.getElementById('screen-results').classList.add('hidden');
    document.getElementById('screen-quiz').classList.remove('hidden');

    playSfx('whistle');
    loadQuestion();
}

function loadQuestion() {
    gameState.answered = false;
    const currentQ = gameState.currentQuestions[gameState.currentIndex];

    document.getElementById('btn-next').classList.add('hidden');
    document.getElementById('btn-next').classList.remove('flex');
    document.getElementById('feedback-panel').classList.add('hidden');

    const progressPercent = ((gameState.currentIndex) / 10) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progressPercent === 0 ? 5 : progressPercent}%`;

    document.getElementById('display-question-number').textContent = `Pergunta ${gameState.currentIndex + 1} de 10`;
    document.getElementById('display-question-text').textContent = currentQ.q;

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    currentQ.options.forEach((opt, idx) => {
        const letters = ['A', 'B', 'C', 'D'];
        const button = document.createElement('button');
        button.className = "group w-full bg-white/5 hover:bg-white/10 text-left p-4 rounded-2xl border border-white/10 hover:border-white/20 transition-all active:scale-[0.98] flex items-center gap-3.5 cursor-pointer text-emerald-100";
        button.setAttribute('onclick', `selectOption(${idx})`);
        button.id = `opt-btn-${idx}`;
        
        button.innerHTML = `
            <span class="w-8 h-8 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center font-sport font-black text-xs text-yellow-400 group-hover:bg-yellow-400 group-hover:text-emerald-950 group-hover:border-yellow-400 transition-all">
                ${letters[idx]}
            </span>
            <span class="font-medium flex-1 text-sm md:text-base leading-tight">${opt}</span>
        `;
        container.appendChild(button);
    });
}

function selectOption(selectedIdx) {
    if (gameState.answered) return;
    gameState.answered = true;

    const currentQ = gameState.currentQuestions[gameState.currentIndex];
    const isCorrect = (selectedIdx === currentQ.correct);
    
    gameState.answersRecord.push(isCorrect);

    const selectedBtn = document.getElementById(`opt-btn-${selectedIdx}`);
    const correctBtn = document.getElementById(`opt-btn-${currentQ.correct}`);
    const feedbackPanel = document.getElementById('feedback-panel');
    const dotIndicator = document.getElementById(`dot-${gameState.currentIndex}`);

    for (let i = 0; i < currentQ.options.length; i++) {
        const btn = document.getElementById(`opt-btn-${i}`);
        btn.removeAttribute('onclick');
        btn.classList.add('cursor-default');
        if (i !== selectedIdx && i !== currentQ.correct) {
            btn.classList.add('opacity-40');
        }
    }

    if (isCorrect) {
        gameState.score++;
        playSfx('correct');

        selectedBtn.classList.remove('bg-white/5', 'border-white/10');
        selectedBtn.classList.add('bg-emerald-500/10', 'border-emerald-500', 'text-emerald-300', 'neon-glow');
        selectedBtn.querySelector('span').classList.add('bg-emerald-500', 'text-white', 'border-emerald-500');

        dotIndicator.className = "aspect-square bg-emerald-500 rounded-full border border-emerald-400 flex items-center justify-center text-xs text-white spin-soccer shadow-lg neon-glow";
        dotIndicator.innerHTML = '<i class="fa-solid fa-soccer-ball"></i>';

        feedbackPanel.className = "rounded-2xl p-4 mb-6 border bg-emerald-500/10 border-emerald-500 text-emerald-200 block";
        document.getElementById('feedback-icon').innerHTML = '<i class="fa-solid fa-circle-check text-emerald-400 text-3xl"></i>';
        document.getElementById('feedback-title').textContent = "Na gaveta! Você acertou!";
        document.getElementById('feedback-desc').textContent = currentQ.desc;
    } else {
        playSfx('incorrect');

        selectedBtn.classList.remove('bg-white/5', 'border-white/10');
        selectedBtn.classList.add('bg-red-500/10', 'border-red-500', 'text-red-300');
        selectedBtn.querySelector('span').classList.add('bg-red-500', 'text-white', 'border-red-500');

        correctBtn.classList.remove('bg-white/5', 'border-white/10');
        correctBtn.classList.add('bg-emerald-500/10', 'border-emerald-500', 'text-emerald-300');
        correctBtn.querySelector('span').classList.add('bg-emerald-500', 'text-white', 'border-emerald-500');

        dotIndicator.className = "aspect-square bg-red-500/35 rounded-full border border-red-500 flex items-center justify-center text-xs text-red-200 shadow-md";
        dotIndicator.innerHTML = '<i class="fa-solid fa-xmark"></i>';

        feedbackPanel.className = "rounded-2xl p-4 mb-6 border bg-red-500/10 border-red-500 text-red-200 block";
        document.getElementById('feedback-icon').innerHTML = '<i class="fa-solid fa-circle-xmark text-red-400 text-3xl"></i>';
        document.getElementById('feedback-title').textContent = "Passe errado! A resposta correta era outra.";
        document.getElementById('feedback-desc').textContent = currentQ.desc;
    }

    const btnNext = document.getElementById('btn-next');
    btnNext.classList.remove('hidden');
    btnNext.classList.add('flex');
    btnNext.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
    gameState.currentIndex++;

    if (gameState.currentIndex < 10) {
        loadQuestion();
    } else {
        showResults();
    }
}

function changePlayer() {
    document.getElementById('screen-results').classList.add('hidden');
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-register').classList.remove('hidden');
    document.getElementById('player-name').value = '';
}

function showResults() {
    document.getElementById('screen-quiz').classList.add('hidden');
    document.getElementById('screen-results').classList.remove('hidden');

    document.getElementById('result-score').textContent = gameState.score;

    let evaluation = "";
    let emoji = "⚽";
    let colorClass = "";
    let bgClass = "";

    if (gameState.score === 10) {
        evaluation = "Perfeito! Você jogou como o Pelé. Dominou todas as jogadas e levantou o caneco do Hexa!";
        emoji = "🏆";
        colorClass = "text-yellow-400";
        bgClass = "from-yellow-400/30 to-amber-500/30";
        startConfetti();
    } else if (gameState.score >= 8) {
        evaluation = "Craque de Seleção! Você tem uma visão de jogo invejável e conhece os mínimos detalhes.";
        emoji = "🎖️";
        colorClass = "text-emerald-400";
        bgClass = "from-emerald-500/30 to-green-600/30";
        startConfetti();
    } else if (gameState.score >= 5) {
        evaluation = "Titular Absoluto! Fez uma ótima partida, mas ainda dá para ajustar a mira nas próximas.";
        emoji = "🥈";
        colorClass = "text-yellow-300";
        bgClass = "from-yellow-500/20 to-emerald-500/20";
    } else if (gameState.score >= 3) {
        evaluation = "Reserva de Luxo! Precisa treinar um pouco mais os fundamentos para assumir a titularidade.";
        emoji = "🏃‍♂️";
        colorClass = "text-orange-400";
        bgClass = "from-orange-500/20 to-amber-500/20";
    } else {
        evaluation = "Perna de Pau! Levou cartão vermelho no quiz. Chute de bico e volte a estudar a história da bola!";
        emoji = "🩼";
        colorClass = "text-red-400";
        bgClass = "from-red-500/20 to-red-800/20";
    }

    document.getElementById('result-congrats').textContent = `${gameState.playerName}, seu rendimento final foi:`;
    document.getElementById('result-evaluation').textContent = evaluation;
    document.getElementById('result-percent').textContent = `Precisão de acertos: ${gameState.score * 10}%`;
    
    const resultBadge = document.getElementById('result-badge');
    resultBadge.textContent = emoji;
    resultBadge.className = `w-full h-full rounded-full bg-emerald-950/80 border-4 flex items-center justify-center shadow-xl relative z-10 text-5xl ${colorClass} border-current`;
    
    const resultBadgeBg = document.getElementById('result-badge-bg');
    resultBadgeBg.className = `absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse bg-gradient-to-tr ${bgClass}`;

    playSfx('whistle');
}

let confettiInterval = null;
function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ['#facc15', '#22c55e', '#3b82f6', '#ffffff'];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 4 + 3,
            d: Math.random() * canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 5,
            tiltAngleIncremental: Math.random() * 0.07 + 0.02,
            tiltAngle: 0
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (document.getElementById('screen-results').classList.contains('hidden')) {
            clearInterval(confettiInterval);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        particles.forEach((p, index) => {
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.tiltAngle);
            p.tilt = Math.sin(p.tiltAngle - index / 3) * 15;

            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
            ctx.stroke();

            if (p.y > canvas.height) {
                particles[index] = {
                    x: Math.random() * canvas.width,
                    y: -20,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt,
                    tiltAngleIncremental: p.tiltAngleIncremental,
                    tiltAngle: p.tiltAngle
                };
            }
        });
    }

    if (confettiInterval) clearInterval(confettiInterval);
    confettiInterval = setInterval(draw, 20);
}

window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
