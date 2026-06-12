# 🏗️ Documentação Técnica - Arena Trívia

## Arquitetura da Aplicação

### Visão Geral

Arena Trívia é uma Single Page Application (SPA) desenvolvida com HTML5, CSS3 e JavaScript vanilla. A arquitetura segue o padrão MVC (Model-View-Controller) simplificado:

```
┌─────────────────────────────────────────────────────────┐
│         INTERFACE HTML (VIEW - Camada de Apresentação)  │
├─────────────────────────────────────────────────────────┤
│              CSS3 + Tailwind (Estilo Visual)             │
├─────────────────────────────────────────────────────────┤
│  JavaScript ES6+ (CONTROLLER - Lógica de Negócio)      │
│  ├── GameState (MODEL - Estado Centralizado)           │
│  ├── Event Handlers (Interação do Usuário)             │
│  ├── Audio System (Síntese de Som)                     │
│  ├── Visual Feedback (Animações)                       │
│  └── DOM Manipulation (Atualização da UI)              │
├─────────────────────────────────────────────────────────┤
│  APIs Web                                               │
│  ├── Web Audio API (Áudio)                            │
│  ├── Canvas API (Animações)                           │
│  └── DOM API (Estrutura)                              │
└─────────────────────────────────────────────────────────┘
```

## Fluxo de Estados

### Máquina de Estados Principais

```
    ┌─────────────────────┐
    │  APLICAÇÃO INICIA   │
    └──────────┬──────────┘
             ↓
    ┌─────────────────────────────┐
    │  TELA DE REGISTRO           │ ← Padrão: Visível
    │  [Input Nome][Botão Entrar] │
    └──────────┬──────────────────┘
             ↓
    ┌─────────────────────────────┐
    │  CARREGAMENTO               │ → shuffleArray() de 10 perguntas
    │  [Mostrar Loading...]       │ → Embaralhar opções
    └──────────┬──────────────────┘
             ↓
    ┌─────────────────────────────┐
    │  QUIZ ATIVO                 │ ← Loop: Pergunta 1-10
    │  [Pergunta][4 Opções]       │ → selectOption()
    │  [Feedback Oculto]          │ → Toca som
    └──────────┬──────────────────┘ → Atualiza score/placar
             ↓                       → Mostra feedback
    ┌──────────────────────────────────┐
    │  VERIFICAÇÃO: Pergunta < 10?     │
    └──────────┬──────────┬────────────┘
               │Sim       │Não
               ↓          ↓
     (carrega próxima)   ┌──────────────────────┐
                          │  TELA DE RESULTADOS │
                          │  [Score][Avaliação] │
                          │  [Novo Jogo][Mudar] │
                          └──────────┬───────────┘
                                   ↓
                    ┌──────────────────────────┐
                    │ Novo Jogo ou Mudar?      │
                    └──────────┬──────┬────────┘
                               │      │
                          Novo │      │ Mudar
                               ↓      ↓
                         [CARREGAMENTO] [REGISTRO]
```

## Estado Centralizado (GameState)

```javascript
const gameState = {
  // Identificação do Jogador
  playerName: string,                 // "Pelé do Quiz"
  
  // Controle de Pergunta
  currentQuestions: Question[],       // 10 perguntas selecionadas
  currentIndex: number,               // 0-9 (pergunta atual)
  
  // Pontuação
  score: number,                      // 0-10 (acertos)
  answersRecord: boolean[],           // [true, false, true, ...]
  
  // Interação
  answered: boolean,                  // true se respondeu à pergunta
  soundMuted: boolean                 // true se áudio desativado
};
```

### Estrutura de Pergunta

```javascript
type Question = {
  q: string,              // "Quantas Copas o Brasil ganhou?"
  options: string[4],     // ["3", "4", "5", "6"]
  correct: number,        // 2 (índice da resposta correta)
  desc: string            // "O Brasil é pentacampeão (1958, 1962...)"
}
```

## Fluxo de Dados

### 1. Início da Partida

```javascript
startGame(event)
  ├─→ Valida input de nome
  ├─→ gameState.playerName = "Rodrigo"
  ├─→ initAudio() → cria novo AudioContext
  ├─→ Alterna visibilidade: register hidden, quiz visible
  └─→ restartGame(false)

restartGame(false)
  ├─→ gameState.currentIndex = 0
  ├─→ gameState.score = 0
  ├─→ gameState.answersRecord = []
  ├─→ shuffledPool = shuffleArray(QUESTION_POOL)
  ├─→ gameState.currentQuestions = pool.slice(0, 10)
  ├─→ Para cada pergunta:
  │   ├─→ Embaralha options
  │   ├─→ Recalcula índice correct
  │   └─→ Adiciona à currentQuestions
  ├─→ Reseta indicadores visuais (10 bolinhas)
  ├─→ playSfx('whistle')
  └─→ loadQuestion()
```

### 2. Carregamento da Pergunta

```javascript
loadQuestion()
  ├─→ currentQ = gameState.currentQuestions[currentIndex]
  ├─→ gameState.answered = false
  ├─→ Oculta feedback panel e btn-next
  ├─→ Atualiza progress-bar-fill
  │   └─→ width = (currentIndex / 10) * 100%
  ├─→ display-question-number.text = "Pergunta X de 10"
  ├─→ display-question-text.text = currentQ.q
  ├─→ Limpa options-container
  └─→ Para cada opção:
      ├─→ Cria button
      ├─→ Adiciona onclick → selectOption(idx)
      ├─→ Append ao container
      └─→ Renderiza Label A/B/C/D
```

### 3. Seleção de Resposta

```javascript
selectOption(selectedIdx)
  ├─→ if (gameState.answered) return; // Previne clique duplo
  ├─→ gameState.answered = true
  ├─→ currentQ = gameState.currentQuestions[currentIndex]
  ├─→ isCorrect = (selectedIdx === currentQ.correct)
  ├─→ gameState.answersRecord.push(isCorrect)
  │
  ├─→ if (isCorrect)
  │   ├─→ gameState.score++
  │   ├─→ playSfx('correct')
  │   ├─→ selectedBtn.class += "bg-emerald-500 border-emerald-500"
  │   ├─→ dot-X → classe com bola giratória e luz
  │   ├─→ feedbackPanel.class = "bg-emerald-500/10 border-emerald-500"
  │   ├─→ feedback-icon.innerHTML = "<i class='fa-solid fa-circle-check'"
  │   ├─→ feedback-title = "Na gaveta! Você acertou!"
  │   └─→ feedback-desc = currentQ.desc
  │
  ├─→ else (isCorrect === false)
  │   ├─→ playSfx('incorrect')
  │   ├─→ selectedBtn.class += "bg-red-500 border-red-500"
  │   ├─→ correctBtn.class += "bg-emerald-500 border-emerald-500"
  │   ├─→ dot-X → classe com X vermelho
  │   ├─→ feedbackPanel.class = "bg-red-500/10 border-red-500"
  │   ├─→ feedback-icon.innerHTML = "<i class='fa-solid fa-circle-xmark'"
  │   ├─→ feedback-title = "Passe errado! A resposta correta era..."
  │   └─→ feedback-desc = currentQ.desc
  │
  ├─→ Desativa onclick em todos botões
  ├─→ Opacidade 40% para botões não selecionados (exceto correto)
  ├─→ Mostra btn-next (flex)
  └─→ btn-next.scrollIntoView()
```

### 4. Próxima Pergunta

```javascript
nextQuestion()
  ├─→ gameState.currentIndex++
  ├─→ if (gameState.currentIndex < 10)
  │   └─→ loadQuestion()
  └─→ else
      └─→ showResults()
```

### 5. Tela de Resultados

```javascript
showResults()
  ├─→ Oculta quiz, mostra results
  ├─→ result-score.text = gameState.score
  ├─→ Calcula avaliação:
  │   ├─→ score === 10 → evaluation = "Perfeito...", emoji = 🏆
  │   ├─→ score >= 8 → evaluation = "Craque...", emoji = 🎖️
  │   ├─→ score >= 5 → evaluation = "Bom...", emoji = 🥈
  │   ├─→ score >= 3 → evaluation = "Regular...", emoji = 🏃
  │   └─→ score < 3 → evaluation = "Fraco...", emoji = 🩼
  ├─→ result-badge.textContent = emoji
  ├─→ Aplica classes de cor e brilho
  ├─→ result-evaluation.text = evaluation
  ├─→ result-percent.text = "Precisão: X%"
  ├─→ if (score >= 8)
  │   └─→ startConfetti()
  └─→ playSfx('whistle')
```

## Sistema de Áudio

### Web Audio API Integration

```javascript
// Contexto Único
let audioCtx = null;

initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// Síntese de Áudio
playSfx(type) {
  if (gameState.soundMuted) return;
  
  try {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    // Cria oscilador → conecta ao gain → conecta à saída
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    // Configura parâmetros específicos do tipo de som
    // Inicia/para o oscilador
  } catch (err) {
    console.warn("Audio falhou:", err);
  }
}
```

### Tipos de Som Implementados

#### 1. Acerto (Correto)
```javascript
type: 'correct'
wave: sine
frequency: 440Hz → 880Hz (ascendente)
duration: 300ms
envelope: Linear attack, exponential decay
amplitude: 0.1 → 0.01
```

#### 2. Erro (Incorreto)
```javascript
type: 'incorrect'
wave: sawtooth (timbre mais rico)
frequency: 220Hz → 110Hz (descendente)
duration: 300ms
amplitude: 0.15 → 0.01
```

#### 3. Apito (Whistle)
```javascript
type: 'whistle'
wave: triangle
frequency: 2500Hz com modulação
modulation: 45Hz (efeito de trilo)
duration: 2x 150ms (dois sopros)
amplitude: 0.08 → 0.001
```

## Sistema de Animações

### CSS Animations

```css
/* Rotação de bola acertada */
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.spin-soccer {
  animation: spin-slow 3s linear infinite;
}

/* Confete caindo */
/* Implementado via Canvas API */
```

### Canvas Animation (Confete)

```javascript
startConfetti() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Cria 150 partículas
  particles = [
    {
      x: random(0, width),
      y: random(-height, 0),
      r: random(3, 7),
      d: random(0, height),    // densidade
      color: colors[random],
      tilt: random(-5, 5),
      tiltAngleIncremental: random(0.02, 0.09),
      tiltAngle: 0
    },
    // ... 150x
  ]
  
  // Loop de animação
  setInterval(() => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.y += (Math.cos(p.d) + 3 + p.r/2) / 2;  // Gravidade
      p.x += Math.sin(p.tiltAngle);              // Vento
      p.tilt = Math.sin(p.tiltAngle) * 15;       // Rotação
      
      // Desenha linha (confete é uma linha)
      ctx.lineWidth = p.r;
      ctx.moveTo(p.x + p.tilt + p.r/2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/2);
      ctx.stroke();
      
      // Recicla partícula quando sai da tela
      if (p.y > height) {
        particles[i] = newParticle();
      }
    });
  }, 20); // 50 FPS
}
```

## Algoritmos Principais

### Fisher-Yates Shuffle

```javascript
function shuffleArray(array) {
  let shuffled = [...array];  // Cópia para não mutar original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];  // Troca
  }
  return shuffled;  // Retorna nova array embaralhada
}
```

**Complexidade**: O(n)
**Garante**: Distribuição uniforme

### Seleção de 10 Perguntas

```javascript
const shuffledPool = shuffleArray(QUESTION_POOL);  // 30 → embaralhadas
const selected = shuffledPool.slice(0, 10);        // Pega primeiras 10

// Também embaralha opções de cada uma
selected.forEach(q => {
  const correctAnswer = q.options[q.correct];
  q.options = shuffleArray(q.options);
  q.correct = q.options.indexOf(correctAnswer);
});
```

## Performance Considerations

### Otimizações Implementadas

1. **DOM Caching**: Elementos reutilizados são cacheados
2. **Event Delegation**: Não usado (poucos botões)
3. **Debouncing**: Audio Context resume é idempotente
4. **Canvas Optimization**: Confete para quando sair da tela
5. **Memória**: gameState é global e persistente

### Melhorias Futuras

- [ ] Lazy loading de sons
- [ ] Compressão de imagens (se adicionadas)
- [ ] Service Worker para offline mode
- [ ] Minificação de JS/CSS

## Compatibilidade

### Navegadores Suportados

| Navegador | Versão Mínima | Status     |
|-----------|---------------|------------|
| Chrome    | 90+           | ✅ Total   |
| Firefox   | 88+           | ✅ Total   |
| Safari    | 14+           | ✅ Total   |
| Edge      | 90+           | ✅ Total   |
| Opera     | 76+           | ✅ Total   |
| IE 11     | -             | ❌ Não     |

### APIs Requeridas

- ✅ ES6 (Classes, Arrow Functions, const/let)
- ✅ Web Audio API
- ✅ Canvas 2D
- ✅ Fetch API (se adicionar dados externos)
- ✅ LocalStorage (planejado para v3)

## Estrutura de Arquivos Recomendada

```
game-da-copa/
├── index.html                 # Arquivo principal (SPA)
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── LICENSE
├── ARCHITECTURE.md
└── docs/
    ├── GAME_MECHANICS.md      # Regras e fluxo do jogo
    ├── QUESTION_DATABASE.md   # Schema de perguntas
    ├── API_REFERENCE.md       # Referência de funções JS
    ├── AUDIO_SYSTEM.md        # Sistema de áudio
    └── STYLING_GUIDE.md       # Cores, fonts, componentes
```

## Segurança

### Considerações Atuais

- ✅ Sem chamadas backend (offline first)
- ✅ Sem armazenamento de dados sensíveis
- ✅ Sem autenticação requerida (v1)
- ✅ HTML sanitizado (sem templates dinâmicos)

### Futuro (v3+)

- [ ] CORS para API backend
- [ ] JWT para autenticação
- [ ] Rate limiting
- [ ] Input validation

---

**Última atualização**: 2026-06-12
**Versão**: 1.0
**Autor**: Rodrigo Torres Santos