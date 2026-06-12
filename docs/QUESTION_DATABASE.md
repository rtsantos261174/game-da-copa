# 📊 Banco de Dados de Perguntas - Arena Trívia

## Índice

- [Visão Geral](#visão-geral)
- [Estrutura de Dados](#estrutura-de-dados)
- [Categorias](#categorias)
- [Como Adicionar Perguntas](#como-adicionar-perguntas)
- [Diretrizes de Qualidade](#diretrizes-de-qualidade)
- [Distribuição Atual](#distribuição-atual)

## 👀 Visão Geral

### Estatísticas Básicas

```
Total de Perguntas: 30
Perguntas por Partida: 10 (sorteadas aleatoriamente)
Formato: Múltipla Escolha (4 alternativas)
Seleção: Fisher-Yates Shuffle (distribuição uniforme)
```

## 🏗️ Estrutura de Dados

### Esquema JSON

```javascript
{
  q: string,              // Pergunta em português (obrigatório)
  options: string[4],     // Array com 4 alternativas (obrigatório)
  correct: number,        // Índice da resposta correta: 0-3 (obrigatório)
  desc: string            // Explicação/curiosidade (obrigatório)
}
```

### Exemplo Prático

```javascript
{
  q: "Quantas Copas do Mundo a Seleção Brasileira conquistou?",
  options: ["3 Copas", "4 Copas", "5 Copas", "6 Copas"],
  correct: 2,  // "5 Copas" está no índice 2
  desc: "O Brasil é pentacampeão (1958, 1962, 1970, 1994, 2002)."
}
```

## 📂 Categorias

As 30 perguntas são distribuídas em 5 categorias principais:

### 1️⃣ Seleção Brasileira (6 perguntas)

**Foco:** Conquistas, recordes e momentos históricos da Seleção

- ✅ Maior artilheiro (Neymar)
- ✅ Número de Copas (5)
- ✅ Técnico do Penta (Felipão)
- ✅ Maracanazo (1950)
- ✅ Gol de falta em 2002 (Ronaldinho)
- ✅ Final de 2002 (Brasil 2 x 0 Alemanha)

### 2️⃣ Craques Lendários (8 perguntas)

**Foco:** Grandes jogadores do futebol brasileiro e suas realizações

- ✅ Pelé ("Rei do Futebol")
- ✅ Garrincha (gol de bicicleta)
- ✅ Zico ("Galinho de Quintino")
- ✅ Ronaldinho Gaúcho ("O Bruxo")
- ✅ Ronaldo Fenômeno (Final 2002)
- ✅ Marta (Futebol feminino)
- ✅ Rogério Ceni (Goleiro goleador)
- ✅ Romário (Artilheiro Série A)

### 3️⃣ Clubes Históricos (8 perguntas)

**Foco:** Grandes clubes, títulos e rivalidades

- ✅ Santos (Pelé)
- ✅ Corinthians (Mundial 2000)
- ✅ Grêmio ("Imortal Tricolor")
- ✅ Flamengo (Libertadores 2019)
- ✅ São Paulo (Tricampeão)
- ✅ Vasco (Mercosul 2000)
- ✅ Botafogo (Estrela Solitária)
- ✅ Cruzeiro (ex-Palestra Itália)
- ✅ Athletico (Furacão)
- ✅ Ceará ("Vovô")

### 4️⃣ Momentos Memoráveis (5 perguntas)

**Foco:** Eventos históricos, finais épicas e viradas

- ✅ Copa Libertadores 2019 (Flamengo)
- ✅ Copa Libertadores 2020 (Palmeiras)
- ✅ Copa Mercosul 2000 (Vasco 4x3)
- ✅ Maracanã (Final 1950)
- ✅ Bola de Ouro 2007 (Kaká)

### 5️⃣ Recordes e Curiosidades (3 perguntas)

**Foco:** Números impressionantes e fatos inusitados

- ✅ Roberto Dinamite (190 gols Série A)
- ✅ Leônidas da Silva (Criador bola de bicicleta)
- ✅ Arena MRV (Novo estádio Atlético Mineiro)

## ➕ Como Adicionar Perguntas

### Passo 1: Preparar a Pergunta

```javascript
const novaPergunta = {
  q: "Qual jogador ganhou a Bola de Ouro em 2007 jogando pelo Milan?",
  options: [
    "Ronaldinho Gaúcho",
    "Kaká",
    "Ronaldo Fenômeno",
    "Adriano Imperador"
  ],
  correct: 1,  // Kaká está no índice 1
  desc: "Kaká brilhou no Milan e foi eleito Melhor do Mundo em 2007."
}
```

### Passo 2: Validar os Dados

- [ ] Pergunta é clara e sem ambiguidades?
- [ ] 4 alternativas estão corretas gramaticalmente?
- [ ] Resposta correta está no índice especificado?
- [ ] Descrição é educativa e interessante?
- [ ] Não há duplicação com perguntas existentes?

### Passo 3: Submeter

1. Abra uma [Discussion](https://github.com/rtsantos261174/game-da-copa/discussions/categories/questions)
2. Copie o template:

```markdown
## Pergunta Sugerida
"Sua pergunta aqui"

## Opções
A) Alternativa 1
B) Alternativa 2
C) Alternativa 3
D) Alternativa 4

## Resposta Correta
B) Alternativa 2

## Explicação/Curiosidade
Descreva o fato interessante aqui.

## Referência
[Link ou fonte]

## Categoria
- [ ] Seleção Brasileira
- [ ] Craques Lendários
- [ ] Clubes Históricos
- [ ] Momentos Memoráveis
- [ ] Recordes e Curiosidades
```

3. Aguarde review

## ✅ Diretrizes de Qualidade

### Critérios de Aceitação

✅ **Deve ter:**
- Pergunta em português claro e correto
- 4 alternativas bem formuladas
- Resposta correta verificada
- Fato educativo na descrição
- Fonte ou referência confiável

❌ **Não deve ter:**
- Ambiguidades ou duplas interpretações
- Erros de gramática/ortografia
- Alternativas muito óbvias
- Conteúdo ofensivo ou inapropriado
- Informações desatualizadas

### Regras de Formatação

```javascript
// ✅ BOM
{
  q: "Qual é o maior artilheiro da história da Seleção Brasileira?",
  options: ["Pelé", "Neymar Jr", "Ronaldo Fenômeno", "Romário"],
  correct: 1,
  desc: "Neymar Jr superou a marca de Pelé em 2020 nas Eliminatórias."
}

// ❌ RUIM
{
  q: "Pelé ou Neymar qual é melhor?",  // Pergunta mal formulada
  options: ["A", "B", "C", "D"],        // Alternativas vazias
  correct: 0,
  desc: ""                               // Descrição vazia
}
```

### Dicas de Qualidade

1. **Pergunta**: Use "Quem", "Qual", "Quantos", etc.
2. **Alternativas**: Devem ser plausíveis (não óbvias)
3. **Resposta**: Verificada em fontes confiáveis
4. **Descrição**: Adicione valor educativo

## 📈 Distribuição Atual

### Por Categoria

```
Seleção Brasileira    ████████░░ 20% (6 perguntas)
Craques Lendários     ██████████ 27% (8 perguntas)
Clubes Históricos     ██████████ 27% (8 perguntas)
Momentos Memoráveis   ██████░░░░ 17% (5 perguntas)
Recordes & Curios.    █████░░░░░ 10% (3 perguntas)
                      Total: 30 perguntas
```

### Por Dificuldade

```
Fácil (Conhecimento geral)    ██████████░░ 40% (12)
Médio (Conhecimento bom)      ████████░░░░ 33% (10)
Difícil (Especializado)       ██████░░░░░░ 27% (8)
```

## 🎯 Roadmap de Expansão

### v2.0 (Meta: 100 perguntas)

- [ ] +30 perguntas sobre Seleção Feminina
- [ ] +20 perguntas sobre Campeonato Brasileiro
- [ ] +20 perguntas sobre Copa Libertadores

### v3.0 (Meta: 200 perguntas)

- [ ] Perguntas com imagens
- [ ] Perguntas com vídeos
- [ ] Perguntas tipo verdadeiro/falso
- [ ] Perguntas de sequência (colocar em ordem)

---

**Última atualização**: 2026-06-12
**Status**: 30/100 perguntas (v1.0)
**Contribuições**: Bem-vindas! 🎉