# 🎮 Mecânicas do Jogo - Arena Trívia

## Índice

- [Objetivo do Jogo](#objetivo-do-jogo)
- [Regras Fundamentais](#regras-fundamentais)
- [Fluxo da Partida](#fluxo-da-partida)
- [Sistema de Pontuação](#sistema-de-pontuação)
- [Feedback Visual](#feedback-visual)
- [Sistema de Avaliação](#sistema-de-avaliação)
- [Configurações e Opções](#configurações-e-opções)

## 🎯 Objetivo do Jogo

O jogador deve responder corretamente o máximo de perguntas possível sobre a história e curiosidades do futebol brasileiro em um quiz com 10 questões.

**Meta**: Alcançar a pontuação máxima de 10 acertos!

## 📋 Regras Fundamentais

### Participação
1. ✅ Registre seu nome ou apelido (máx. 15 caracteres)
2. ✅ Clique em "ENTRAR EM CAMPO" para iniciar
3. ✅ Você terá 10 perguntas selecionadas aleatoriamente
4. ✅ Cada pergunta apresenta 4 alternativas (A, B, C, D)

### Respondendo
1. ✅ Leia a pergunta atentamente
2. ✅ Clique em uma das 4 alternativas para responder
3. ✅ Você pode responder apenas UMA VEZ por pergunta
4. ✅ Não é possível voltar à pergunta anterior
5. ✅ Após responder, o feedback é imediato

### Progressão
1. ✅ Após cada resposta, clique "PRÓXIMA PERGUNTA"
2. ✅ Você verá sua performance em tempo real (10 bolinhas)
3. ✅ Após 10 perguntas, chegará à tela de resultados
4. ✅ Pode jogar novamente ou mudar de jogador

## 🎲 Fluxo da Partida

### Fase 1: Registro
```
┌─────────────────────────────────┐
│  TELA DE REGISTRO               │
├─────────────────────────────────┤
│  [Input: Digite seu nome]       │
│  [Botão: ENTRAR EM CAMPO]       │
└──────────────┬──────────────────┘
               │
         (Validação)
               │
        ┌──────▼──────┐
        │   Nome OK?  │
        └──────┬──────┘
          Sim  │  Não
              │└──→ Mensagem de erro (mantém na tela)
              ▼
      [FASE 2: SORTEIO]
```

### Fase 2: Sorteio de Perguntas

```javascript
1. Embaralha pool de 30 perguntas
2. Seleciona as primeiras 10
3. Para cada pergunta:
   - Embaralha as 4 opções de resposta
   - Recalcula o índice da resposta correta
4. Exibe primeira pergunta
```

### Fase 3: Respondendo

```
┌─────────────────────────────────────────┐
│  [Pergunta X de 10]                     │
├─────────────────────────────────────────┤
│  "Qual é a pergunta?"                   │
│                                         │
│  ☐ A) Alternativa 1                    │
│  ☐ B) Alternativa 2                    │
│  ☐ C) Alternativa 3                    │
│  ☐ D) Alternativa 4                    │
│                                         │
│  [Clica em uma opção]                  │
└──────────────┬──────────────────────────┘
               │
      ┌────────▼────────┐
      │  Validação      │
      └────────┬────────┘
               │
        ┌──────┴──────┐
        │  Correto?   │
        ├──────┬──────┤
   Sim  │      │      │  Não
        │      │      │
        ▼      ▼      ▼
      ✅    🔊    ❌
   Acerto  Som  Erro
      │            │
      └────┬───────┘
           │
    [Mostra Feedback]
           │
    [Mostra Próxima Pergunta]
```

### Fase 4: Feedback

Após clicar em uma resposta:

**Se Correto (✅):**
- ✅ Bipe alegre (som ascendente)
- 🟢 Botão fica verde com glow
- ⚽ Bolinha no topo fica com bola giratória (verde)
- 📝 Painel verde mostra fato educativo
- 🔼 Score aumenta em 1

**Se Incorreto (❌):**
- ❌ Bipe triste (som descendente)
- 🔴 Botão clicado fica vermelho
- 🟢 Resposta correta se destaca em verde
- ❌ Bolinha no topo fica vermelha com X
- 📝 Painel vermelho mostra a resposta correta e fato
- 🔼 Score permanece igual

### Fase 5: Resultados

```
┌─────────────────────────────────┐
│  FIM DE JOGO!                   │
├─────────────────────────────────┤
│  [Emoji da Avaliação]           │
│  Pontuação Final: X/10          │
│  [Mensagem Personalizada]       │
│  Precisão: X%                   │
├─────────────────────────────────┤
│  [NOVO JOGO] [MUDAR JOGADOR]    │
└─────────────────────────────────┘
```

## 📊 Sistema de Pontuação

### Cálculo

```
Score = Número de Respostas Corretas
Máximo Possível = 10
Porcentagem = (Score / 10) * 100%
```

### Exemplos

| Score | Porcentagem | Avaliação          | Emoji |
|-------|-------------|--------------------|---------|
| 10    | 100%        | Perfeito!          | 🏆    |
| 9     | 90%         | Craque de Seleção  | 🎖️    |
| 8     | 80%         | Craque de Seleção  | 🎖️    |
| 7     | 70%         | Titular Absoluto   | 🥈    |
| 6     | 60%         | Titular Absoluto   | 🥈    |
| 5     | 50%         | Titular Absoluto   | 🥈    |
| 4     | 40%         | Reserva de Luxo    | 🏃    |
| 3     | 30%         | Reserva de Luxo    | 🏃    |
| 2     | 20%         | Perna de Pau       | 🩼    |
| 1     | 10%         | Perna de Pau       | 🩼    |
| 0     | 0%          | Perna de Pau       | 🩼    |

## 🎨 Feedback Visual

### Indicadores Visuais

#### 1. Barra de Progresso
- **Localização**: Topo do painel de pergunta
- **Cor**: Gradiente amarelo → verde
- **Comportamento**: Preenche de 0-100% conforme avança
- **Atualização**: Após clique em nova pergunta

#### 2. Placar de 10 Bolinhas
- **Localização**: Topo direito (ao lado do nome do jogador)
- **Representação**: 10 círculos numerados de 1-10
- **Estados**:
  - ⚫ Cinza (não respondido ainda)
  - 🟢 Verde com ⚽ girando (acerto)
  - 🔴 Vermelho com ❌ (erro)

#### 3. Painel de Feedback
- **Localização**: Abaixo das 4 opções
- **Cores**:
  - Verde (fundo/borda) = Resposta correta
  - Vermelho (fundo/borda) = Resposta incorreta
- **Conteúdo**: Ícone + Título + Descrição

### Animações

```css
/* Rotação da bola acertada */
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/* Duração: 3 segundos, contínua */

/* Brilho neon */
box-shadow: 0 0 15px rgba(34, 197, 94, 0.4);
```

## 🏆 Sistema de Avaliação

### Critérios

**10/10 - Perfeito! 🏆**
- Mensagem: "Você jogou como o Pelé. Dominou todas as jogadas!"
- Efeito: Confete cai pela tela
- Emoji animado: 🏆
- Cor: Amarelo/Ouro

**8-9/10 - Craque de Seleção 🎖️**
- Mensagem: "Você tem visão de jogo invejável!"
- Efeito: Confete cai pela tela
- Emoji: 🎖️
- Cor: Verde esmeralda

**5-7/10 - Titular Absoluto 🥈**
- Mensagem: "Fez ótima partida, mas pode melhorar!"
- Efeito: Sem confete
- Emoji: 🥈
- Cor: Amarelo claro

**3-4/10 - Reserva de Luxo 🏃**
- Mensagem: "Precisa treinar um pouco mais!"
- Efeito: Sem confete
- Emoji: 🏃
- Cor: Laranja

**0-2/10 - Perna de Pau 🩼**
- Mensagem: "Levou cartão vermelho! Volte a estudar!"
- Efeito: Sem confete
- Emoji: 🩼
- Cor: Vermelho

## ⚙️ Configurações e Opções

### Controle de Som

**Botão Sound Toggle** (Canto superior esquerdo)
- Estado ATIVO: Ícone 🔊 (amarelo/verde)
- Estado MUTE: Ícone 🔇 (vermelho)
- Clique: Alterna entre ativo/mute
- Sons afetados:
  - Bipe de acerto
  - Bipe de erro
  - Apito de início/fim

### Modal de Ajuda

**Botão Info** (Canto superior direito)
- Abre modal com instruções
- Mostra:
  - Como funciona o jogo
  - O que significa cada indicador
  - Dicas para melhorar
- Botão para fechar

### Novo Jogo

**Comportamento:**
- Mantém o mesmo jogador
- Sorteia 10 NOVAS perguntas
- Reseta score para 0
- Limpa histórico de respostas
- Toca apito de início

### Mudar Jogador

**Comportamento:**
- Volta à tela de registro
- Limpa campo de entrada
- Reseta todo o estado
- Aguarda novo nome

## 🎪 Confete de Vitória

**Ativação:**
- Score = 10 (100%)
- Score >= 8 (80%+)

**Comportamento:**
- 150 partículas coloridas
- Cores: Amarelo, verde, azul, branco
- Caem com movimento sinusoidal (simulando vento)
- Rotação aleatória
- Para quando sair da tela de resultados

**Técnica:**
- Canvas 2D
- 50 FPS (20ms por frame)
- Parâmetros aleatórios por partícula

---

**Última atualização**: 2026-06-12
**Versão**: 1.0