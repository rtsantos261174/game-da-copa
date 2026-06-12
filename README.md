# 🏆 Arena Trívia - Super Quiz do Futebol Brasileiro

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)](/)
[![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)](/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](/)

> 🎮 O maior quiz interativo e imersivo sobre a história e glórias do futebol brasileiro. Teste seu conhecimento em 10 desafiadoras perguntas sobre craques lendários, conquistas épicas e momentos inesquecíveis do nosso futebol.

![Arena Trívia Banner](https://img.shields.io/badge/Arena%20Trívia-Futebol%20Brasileiro-brightgreen)

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Características](#-características)
- [Como Jogar](#-como-jogar)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação e Uso](#-instalação-e-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API JavaScript](#-api-javascript)
- [Troubleshooting](#-troubleshooting)
- [Roadmap](#-roadmap)
- [Contribuições](#-contribuições)
- [Licença](#-licença)

## 🎯 Visão Geral

**Arena Trívia** é uma aplicação web interativa desenvolvida em HTML5, CSS3 e JavaScript puro (vanilla), sem dependências externas além do Tailwind CSS e Font Awesome.

O projeto oferece uma experiência de quiz gamificada com:
- ⚽ 10 perguntas sorteadas aleatoriamente de um banco de 30
- 🎨 Design moderno com tema futebolístico (cores verde e amarelo)
- 🎵 Efeitos sonoros personalizados via Web Audio API
- ✨ Animações suaves e feedback visual imediato
- 🎊 Confete de vitória para performances perfeitas

## ✨ Características

### 🎮 Gameplay
- **Registro Dinâmico**: Insira seu nome ou apelido de campo
- **10 Perguntas Aleatórias**: Cada jogo seleciona questões diferentes
- **Opções Embaralhadas**: As respostas mudam de posição a cada partida
- **Feedback Educativo**: Curiosidades e fatos históricos após cada resposta
- **Placar Visual**: 10 bolinhas mostram acertos (verde) e erros (vermelho)
- **Barra de Progresso**: Acompanhamento em tempo real do desempenho

### 🔊 Áudio
- Bipe alegre para acertos (tom ascendente)
- Bipe triste para erros (tom descendente)
- Apito de juiz para início/fim de partida
- Controle on/off de som com botão dedicado

### 🎨 Interface
- Tema dark mode com gradientes verde/amarelo
- Responsivo para desktop e mobile
- Tipografia esportiva (Montserrat)
- Ícones Font Awesome integrados
- Transições suaves (cubic-bezier)

### 🏆 Sistema de Avaliação
- **Perfeito (10/10)**: 🏆 "Você jogou como Pelé"
- **Craque (8-9)**: 🎖️ "Craque de Seleção"
- **Bom (5-7)**: 🥈 "Titular Absoluto"
- **Regular (3-4)**: 🏃 "Reserva de Luxo"
- **Fraco (0-2)**: 🩼 "Perna de Pau"

## 🕹️ Como Jogar

1. **Abra a aplicação** no seu navegador
2. **Digite seu nome** ou apelido no campo de entrada
3. **Clique em "ENTRAR EM CAMPO"** para iniciar
4. **Leia a pergunta** cuidadosamente
5. **Escolha uma das 4 alternativas** (A, B, C ou D)
6. **Receba feedback imediato** com a resposta correta e um fato interessante
7. **Avance para a próxima pergunta** com o botão "PRÓXIMA PERGUNTA"
8. **Veja seu resultado final** com avaliação personalizada
9. **Jogue novamente** ou **mude de jogador**

### ⌨️ Controles
- **Clique nas alternativas**: Seleciona a resposta
- **Botão Som** (canto superior): Ativa/desativa efeitos sonoros
- **Botão Info** (canto superior): Abre guia do jogo
- **Novo Jogo**: Reinicia com 10 novas perguntas
- **Mudar Jogador**: Volta à tela de registro

## 🔧 Tecnologias Utilizadas

### Frontend Framework & Styling
- **Tailwind CSS v3** - Utility-first CSS framework
- **Google Fonts** - Inter (corpo) e Montserrat (títulos)
- **Font Awesome v6.4.0** - Ícones vetoriais

### Linguagens
- **HTML5** - Estrutura semântica
- **CSS3** - Animações e gradientes
- **JavaScript (ES6+)** - Lógica de jogo, áudio e DOM manipulation

### APIs Web
- **Web Audio API** - Síntese de efeitos sonoros
- **Canvas API** - Animação de confete
- **Local DOM Methods** - Manipulação do DOM

### Recursos Externos
- CDN Tailwind CSS: `cdn.tailwindcss.com`
- CDN Font Awesome: `cdnjs.cloudflare.com/ajax/libs/font-awesome`
- Google Fonts: `fonts.googleapis.com`

## 🚀 Instalação e Uso

### Requisitos
- Navegador moderno com suporte a ES6, Web Audio API e Canvas
- Conexão com internet (para CDNs)

### Instalação Local

1. **Clone o repositório:**
```bash
git clone https://github.com/rtsantos261174/game-da-copa.git
cd game-da-copa
```

2. **Abra no navegador:**
```bash
# Opção 1: Abrir diretamente
open index.html

# Opção 2: Com servidor local (Python)
python -m http.server 8000
# Acesse: http://localhost:8000

# Opção 3: Com servidor local (Node.js)
npx http-server
# Acesse: http://localhost:8080
```

### Deploy Online

**GitHub Pages:**
```bash
# Já está habilitado no repositório!
# Acesse: https://rtsantos261174.github.io/game-da-copa/
```

**Netlify/Vercel:**
- Repositório conectado
- Deploy automático a cada push

## 📁 Estrutura do Projeto

```
game-da-copa/
├── README.md                    # Este arquivo
├── CONTRIBUTING.md              # Guia de contribuições
├── CODE_OF_CONDUCT.md           # Código de conduta
├── LICENSE                      # Licença MIT
├── ARCHITECTURE.md              # Documentação técnica
├── index.html                   # Arquivo principal da aplicação
└── docs/
    ├── GAME_MECHANICS.md        # Mecânicas do jogo
    ├── QUESTION_DATABASE.md     # Banco de dados de perguntas
    ├── API_REFERENCE.md         # Referência da API JS
    ├── AUDIO_SYSTEM.md          # Sistema de áudio
    └── STYLING_GUIDE.md         # Guia de estilo e temas
```

## 🐛 Troubleshooting

### Problemas Comuns

**❌ Áudio não funciona**
- Verificar se navegador tem suporte a Web Audio API
- Verificar se Som está ativo (botão no canto superior)
- Testar em outro navegador

**❌ Canvas de confete não renderiza**
- Verificar console do navegador (F12)
- Limpar cache (Ctrl+Shift+Del)
- Tentar em navegador diferente

**❌ Página carrega lentamente**
- Verificar conexão com internet
- CDNs podem estar lentos

**❌ Responsividade ruim no mobile**
- Testar em diferentes tamanhos de tela
- Usar DevTools do navegador (F12)

## 📈 Roadmap

### v2.0 - Expansão de Conteúdo
- [ ] Adicionar 70+ novas perguntas
- [ ] Criar categorias filtráveis (Seleção, Clubes, Craques, etc)
- [ ] Modo de Dificuldade (Fácil, Normal, Difícil)
- [ ] Modo Campeonato (múltiplas rodadas)

### v2.1 - Features Sociais
- [ ] Leaderboard global
- [ ] Compartilhamento de resultados (Twitter, WhatsApp)
- [ ] Sistema de badges e conquistas
- [ ] Desafios com amigos

### v3.0 - Backend & Persistência
- [ ] Banco de dados de usuários
- [ ] Autenticação e perfil
- [ ] Histórico de partidas
- [ ] Sincronização multiplataforma

## 🤝 Contribuições

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre como:
- Reportar bugs
- Sugerir novas perguntas
- Melhorar documentação
- Enviar pull requests

## 📜 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Rodrigo Torres Santos**
- GitHub: [@rtsantos261174](https://github.com/rtsantos261174)
- Projeto: Arena Trívia - Super Quiz do Futebol Brasileiro

---

**Desenvolvido com ❤️ para craques e torcedores do futebol brasileiro.**

*Última atualização: 2026-06-12*