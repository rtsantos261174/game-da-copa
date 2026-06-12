# 📡 Referência da API JavaScript - Arena Trívia

## Índice

- [Funções Públicas](#funções-públicas)
- [Funções Internas](#funções-internas)
- [Objetos Globais](#objetos-globais)
- [Tipos e Interfaces](#tipos-e-interfaces)
- [Exemplos de Uso](#exemplos-de-uso)

## 🎮 Funções Públicas

Essas funções podem ser chamadas diretamente do console ou de outros scripts.

---

### `startGame(event)`

**Descrição:** Inicia uma nova partida com o nome do jogador.

**Parâmetros:**
```javascript
event: Event  // Evento do formulário (onsubmit)
```

**Retorno:** `void`

**Comportamento:**
```javascript
1. Valida se o campo de nome foi preenchido
2. Armazena o nome em gameState.playerName
3. Inicializa o Web Audio Context
4. Alterna visibilidade das telas
5. Chama restartGame(false)
```

**Exemplo:**
```html
<form onsubmit="startGame(event)">
  <input type="text" id="player-name" required>
  <button type="submit">Iniciar</button>
</form>
```

---

### `restartGame(isFullReset)`

**Descrição:** Reseta o estado e carrega nova seleção de 10 perguntas.

**Parâmetros:**
```javascript
isFullReset: boolean  // Se deve resetar completamente (padrão: false)
```

**Retorno:** `void`

**Comportamento:**
```javascript
1. Reseta índice, score e histórico de respostas
2. Embaralha o pool de 30 perguntas
3. Seleciona as 10 primeiras
4. Para cada pergunta, embaralha as opções
5. Recalcula o índice da resposta correta
6. Limpa indicadores visuais (10 bolinhas)
7. Toca som de apito
8. Carrega primeira pergunta com loadQuestion()
```

**Exemplo:**
```javascript
// Novo jogo (mantém jogador)
restartGame(true);

// Próximo jogo (mantém jogador)
restartGame(false);
```

---

### `loadQuestion()`

**Descrição:** Carrega e renderiza a pergunta atual na interface.

**Parâmetros:** Nenhum

**Retorno:** `void`

**Comportamento:**
```javascript
1. Obtém pergunta do índice atual
2. Reseta flag answered para false
3. Atualiza barra de progresso
4. Atualiza número da pergunta
5. Renderiza texto da pergunta
6. Cria 4 botões com alternativas
7. Oculta painel de feedback e botão next
```

**Efeitos Colaterais:**
- Modifica DOM (atualiza múltiplos elementos)
- Cria novos elementos (botões de alternativas)

---

### `selectOption(selectedIdx)`

**Descrição:** Processa a seleção de resposta do jogador.

**Parâmetros:**
```javascript
selectedIdx: number  // Índice da alternativa selecionada (0-3)
```

**Retorno:** `void`

**Comportamento:**
```javascript
1. Valida se já respondeu (previne cliques múltiplos)
2. Marca como respondido
3. Verifica se resposta está correta
4. Adiciona resultado ao histórico
5. Reproduz som apropriado
6. Estiliza botões (verde = correto, vermelho = erro)
7. Atualiza bolinha de progresso
8. Exibe painel de feedback com explicação
9. Incrementa score se correto
10. Mostra botão "PRÓXIMA PERGUNTA"
```

**Exemplo:**
```javascript
// Responder a alternativa C (índice 2)
selectOption(2);
```

---

### `nextQuestion()`

**Descrição:** Avança para a próxima pergunta ou mostra resultados.

**Parâmetros:** Nenhum

**Retorno:** `void`

**Comportamento:**
```javascript
1. Incrementa currentIndex
2. Se currentIndex < 10:
   - Chama loadQuestion()
3. Senão:
   - Chama showResults()
```

---

### `showResults()`

**Descrição:** Exibe tela final com resultado e avaliação.

**Parâmetros:** Nenhum

**Retorno:** `void`

**Comportamento:**
```javascript
1. Oculta quiz, exibe tela de resultados
2. Exibe score final (X/10)
3. Calcula avaliação baseada em score
4. Seleciona emoji e mensagem personalizada
5. Aplica cores e efeitos visuais
6. Se score >= 8: ativa confete
7. Toca som de apito
```

**Exemplo de Saída:**
```javascript
Score: 8/10
Mensagem: "Craque de Seleção!"
Emoji: 🎖️
Cor: Verde
Confete: ✓ Ativo
```

---

### `changePlayer()`

**Descrição:** Retorna à tela de registro de jogador.

**Parâmetros:** Nenhum

**Retorno:** `void`

**Comportamento:**
```javascript
1. Oculta tela de resultados
2. Oculta tela de quiz
3. Exibe tela de registro
4. Limpa campo de entrada de nome
5. Reseta gameState
```

---

### `playSfx(type)`

**Descrição:** Sintetiza e toca efeitos sonoros via Web Audio API.

**Parâmetros:**
```javascript
type: 'correct' | 'incorrect' | 'whistle'  // Tipo de som
```

**Retorno:** `void`

**Comportamento:**
```javascript
1. Valida se soundMuted está ativo
2. Inicializa Audio Context se necessário
3. Resume context se suspenso
4. Cria oscilador com parâmetros específicos
5. Aplica envelope ADSR (Attack, Decay, Sustain, Release)
6. Toca som
```

**Tipos de Som:**

| Tipo | Onda | Frequência | Duração | Efeito |
|------|------|-----------|---------|--------|
| `correct` | sine | 440→880Hz | 300ms | Ascendente alegre |
| `incorrect` | sawtooth | 220→110Hz | 300ms | Descendente triste |
| `whistle` | triangle | 2500Hz mod | 150ms x2 | Apito com trilo |

**Exemplo:**
```javascript
playSfx('correct');     // Som de acerto
playSfx('incorrect');   // Som de erro
playSfx('whistle');     // Apito do jogo
```

---

### `toggleMute()`

**Descrição:** Alterna mute de áudio.

**Parâmetros:** Nenhum

**Retorno:** `void`

**Comportamento:**
```javascript
1. Inverte flag soundMuted
2. Muda ícone do botão (volume-high ↔ volume-xmark)
3. Alterna cores do botão (verde ↔ vermelho)
4. Se unmute: toca som de confirmação
```

---

### `startConfetti()`

**Descrição:** Inicia animação de confete de vitória.

**Parâmetros:** Nenhum

**Retorno:** `void`

**Comportamento:**
```javascript
1. Obtém canvas de confete
2. Define tamanho = viewport
3. Cria 150 partículas com propriedades aleatórias
4. Inicia loop de animação (50 FPS)
5. Desenha partículas caindo com movimento sinusoidal
6. Recicla partículas ao sair da tela
7. Para quando tela de resultados é fechada
```

---

### `shuffleArray(array)`

**Descrição:** Embaralha array usando algoritmo Fisher-Yates.

**Parâmetros:**
```javascript
array: any[]  // Array a embaralhar
```

**Retorno:** `any[]`  // Novo array embaralhado

**Algoritmo:** Durstenfeld Fisher-Yates O(n)

**Exemplo:**
```javascript
const numeros = [1, 2, 3, 4, 5];
const embaralhado = shuffleArray(numeros);
// Exemplo: [3, 1, 4, 5, 2]
```

---

### `showInfoModal()`

**Descrição:** Exibe modal com instruções do jogo.

**Parâmetros:** Nenhum

**Retorno:** `void`

**Comportamento:**
```javascript
1. Remove classe 'hidden'
2. Adiciona classe 'flex'
3. Torna modal visível com efeito de backdrop
```

---

### `hideInfoModal()`

**Descrição:** Oculta modal de instruções.

**Parâmetros:** Nenhum

**Retorno:** `void`

**Comportamento:**
```javascript
1. Adiciona classe 'hidden'
2. Remove classe 'flex'
3. Torna modal invisível
```

---

## 🔧 Funções Internas

Essas funções são usadas internamente e não devem ser chamadas diretamente.

### `initAudio()`

**Descrição:** Inicializa Web Audio Context (chamada automaticamente).

---

## 🌐 Objetos Globais

### `gameState`

**Descrição:** Objeto que armazena o estado global do jogo.

```javascript
const gameState = {
  playerName: string,         // Nome do jogador
  currentQuestions: Question[],// 10 perguntas selecionadas
  currentIndex: number,       // Índice pergunta atual (0-9)
  score: number,              // Número de acertos (0-10)
  answersRecord: boolean[],   // Histórico de respostas
  answered: boolean,          // Se respondeu a pergunta atual
  soundMuted: boolean         // Se áudio está mutado
};
```

### `QUESTION_POOL`

**Descrição:** Array com 30 perguntas disponíveis.

```javascript
const QUESTION_POOL: Question[] = [...];
```

### `audioCtx`

**Descrição:** Contexto de áudio global (pode ser null inicialmente).

```javascript
let audioCtx: AudioContext | null = null;
```

---

## 📝 Tipos e Interfaces

### `Question`

```typescript
interface Question {
  q: string;              // Texto da pergunta
  options: string[4];     // 4 alternativas
  correct: number;        // Índice da correta (0-3)
  desc: string;           // Explicação/curiosidade
}
```

### `GameState`

```typescript
interface GameState {
  playerName: string;
  currentQuestions: Question[];
  currentIndex: number;
  score: number;
  answersRecord: boolean[];
  answered: boolean;
  soundMuted: boolean;
}
```

---

## 💡 Exemplos de Uso

### Exemplo 1: Fluxo Completo

```javascript
// 1. Usuário entra com nome
startGame(new Event('submit'));

// 2. Sistema carrega perguntas
// (automático via restartGame)

// 3. Jogador vê primeira pergunta
// (automático via loadQuestion)

// 4. Jogador clica em uma resposta
selectOption(1);  // Seleciona alternativa B

// 5. Feedback é exibido imediatamente
// (automático)

// 6. Jogador clica "Próxima"
nextQuestion();

// 7-11. Repetir para outras perguntas

// 12. Após 10 perguntas, resultados são exibidos
// (automático via showResults)
```

### Exemplo 2: Debug no Console

```javascript
// Ver estado atual
console.log(gameState);

// Ver perguntas carregadas
console.log(gameState.currentQuestions);

// Ver pergunta atual
console.log(gameState.currentQuestions[gameState.currentIndex]);

// Mutar áudio
toggleMute();

// Mudar para próxima pergunta forçadamente
gameState.currentIndex++;
loadQuestion();
```

### Exemplo 3: Manipular Pontuação

```javascript
// Adicionar ponto manualmente
gameState.score++;

// Registrar resposta correta
gameState.answersRecord.push(true);

// Ver pontuação atual
console.log(`${gameState.score}/10`);
```

---

**Última atualização**: 2026-06-12
**Versão da API**: 1.0
**Status**: Estável