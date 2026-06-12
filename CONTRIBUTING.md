# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o **Arena Trívia**! Este documento fornece diretrizes e instruções para contribuir ao projeto.

## 📝 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Melhorias](#sugerir-melhorias)
- [Sugerir Novas Perguntas](#sugerir-novas-perguntas)
- [Pull Requests](#pull-requests)
- [Guia de Estilo](#guia-de-estilo)
- [Processo de Revisão](#processo-de-revisão)

## 📋 Código de Conduta

Este projeto adere ao [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar, você concorda em seguir seus termos.

## 💡 Como Contribuir

### Formas de Contribuir

1. **Reportar Bugs** - Encontrou um problema? Abra uma issue!
2. **Sugerir Melhorias** - Tem uma ideia? Compartilhe conosco!
3. **Adicionar Perguntas** - Conhece fatos sobre futebol? Contribua com novas questões!
4. **Melhorar Documentação** - Quer melhorar os docs? Faça um PR!
5. **Corrigir Código** - Encontrou um bug ou pode otimizar? Abra um PR!
6. **Traduzir** - Quer adaptar para outro idioma? Vamos lá!

## 🐛 Reportar Bugs

### Antes de Reportar

- Verifique se o bug já foi reportado em [Issues](https://github.com/rtsantos261174/game-da-copa/issues)
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Teste em outro navegador
- Abra o console (F12) e verifique erros

### Como Reportar um Bug

1. Acesse [Issues](https://github.com/rtsantos261174/game-da-copa/issues)
2. Clique em **New Issue**
3. Selecione o template **Bug Report**
4. Preencha as seções:

**Exemplo:**
```markdown
## Descrição
O áudio não toca quando clico em uma opção.

## Como Reproduzir
1. Abra o jogo
2. Clique em "ENTRAR EM CAMPO"
3. Selecione uma resposta
4. O som de acerto não toca

## Comportamento Esperado
Deve tocar um bipe alegre.

## Ambiente
- Navegador: Chrome 120
- Sistema: Windows 11
- HTTPS: Sim
- Som ativo: Sim

## Screenshots
[Anexe prints se relevante]
```

## 💬 Sugerir Melhorias

1. Acesse [Discussions](https://github.com/rtsantos261174/game-da-copa/discussions)
2. Clique em **New Discussion**
3. Categoria: **Ideas**
4. Descreva sua ideia claramente:

```markdown
## Título
Adicionar modo de dificuldade

## Descrição
Seria legal ter 3 níveis: Fácil, Normal e Difícil.

## Benefícios
- Mais desafio para jogadores experientes
- Melhor onboarding para iniciantes
- Maior replay value

## Exemplo
[Descreva como funcionaria]
```

## ❓ Sugerir Novas Perguntas

Nossas perguntas são a alma do jogo! Se conhece histórias incríveis sobre futebol:

1. Acesse [Discussions → Questions](https://github.com/rtsantos261174/game-da-copa/discussions/categories/questions)
2. Crie uma nova discussão com:

```markdown
## Pergunta Sugerida
"Qual jogador brasileiro obteve a Bola de Ouro em 2007?"

## Opções
A) Ronaldinho Gaúcho
B) Kaká
C) Ronaldo Fenômeno
D) Adriano Imperador

## Resposta Correta
B) Kaká

## Explicação/Curiosidade
Kaká brilhou intensamente no Milan, ganhando a Champions League e sendo eleito Melhor do Mundo pela FIFA em 2007.

## Referência
[Link ou fonte]

## Categoria
[ ] Seleção Brasileira
[ ] Craques Legendários
[ ] Clubes Históricos
[ ] Momentos Memoráveis
[ ] Recordes
```

## 🔧 Pull Requests

### Antes de Começar

1. **Fork o repositório**
```bash
git clone https://github.com/SEU_USERNAME/game-da-copa.git
cd game-da-copa
```

2. **Crie uma branch**
```bash
git checkout -b feature/sua-feature
# ou
git checkout -b fix/seu-bug
```

3. **Faça suas mudanças**
   - Siga o [Guia de Estilo](#guia-de-estilo)
   - Teste no navegador
   - Verifique o console para erros

4. **Commit e Push**
```bash
git add .
git commit -m "feat: Descrição clara da mudança"
git push origin feature/sua-feature
```

5. **Abra um Pull Request**
   - Acesse seu fork
   - Clique em **Compare & pull request**
   - Preencha o template:

```markdown
## Descrição
Descreva o que sua PR faz em detalhes.

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Alterações
- Adicionado suporte a X
- Corrigido bug em Y
- Melhorado performance de Z

## Como Testar
1. Abra em http://localhost:8000
2. Clique em [X]
3. Verifique se [Y] funciona

## Checklist
- [ ] Testei no Chrome
- [ ] Testei no Firefox
- [ ] Testei no Safari
- [ ] Testei no mobile
- [ ] Sem erros no console
- [ ] Documentação atualizada
- [ ] Código segue o guia de estilo
```

## 📐 Guia de Estilo

### JavaScript

```javascript
// ✅ BOM: Use nomes descritivos
function calculatePlayerScore(answersRecord) {
  return answersRecord.filter(answer => answer).length;
}

// ❌ RUIM: Nomes vago
function calc(arr) {
  return arr.filter(x => x).length;
}

// ✅ BOM: Comentários para lógica complexa
function shuffleArray(array) {
  // Fisher-Yates algoritmo
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ✅ BOM: const por padrão, let para loops
const QUESTION_POOL = [...];
let gameState = {};
for (let i = 0; i < 10; i++) { }

// ✅ BOM: Arrow functions para callbacks
buttons.forEach(btn => btn.addEventListener('click', () => {}));

// ✅ BOM: Template literals
const message = `Pergunta ${index + 1} de 10`;
```

### HTML

```html
<!-- ✅ BOM: IDs para JS, classes para CSS -->
<div id="feedback-panel" class="feedback rounded-lg">
  <p id="feedback-title" class="text-bold">Correto!</p>
</div>

<!-- ✅ BOM: Elementos semânticos -->
<main class="quiz-container">
  <section class="questions-list">
    <article class="question-card"></article>
  </section>
</main>

<!-- ✅ BOM: Atributos acessíveis -->
<button 
  id="btn-sound" 
  onclick="toggleMute()" 
  title="Ativar/Desativar Som"
  aria-label="Controle de volume"
>
  <i class="fa-solid fa-volume-high" aria-hidden="true"></i>
</button>
```

### CSS/Tailwind

```css
/* ✅ BOM: Classes semânticas -->
.btn-primary {
  @apply bg-gradient-to-r from-yellow-400 to-amber-500;
  @apply hover:from-yellow-300 hover:to-amber-400;
  @apply transition-all duration-300;
}

/* ✅ BOM: Breakpoints responsivos -->
@media (max-width: 768px) {
  .quiz-grid {
    @apply grid-cols-1;
  }
}
```

## 🔄 Processo de Revisão

### O que Esperamos

✅ **Será Aceito:**
- PR bem descrito com título claro
- Código testado em múltiplos navegadores
- Segue o guia de estilo
- Sem erros no console
- Documentação atualizada (se necessário)
- Commit messages claras

❌ **Será Rejeitado:**
- Código sem testes
- Não segue o guia de estilo
- Sem descrição clara
- Breaking changes sem discussão
- Código com erros no console

### Timeline

- **24h**: Primeira review
- **48h**: Feedback ou aprovação
- **1 semana**: Merge se aprovado

### Próximos Passos

1. Você recebe comentários (se necessário)
2. Faça as mudanças solicitadas
3. Responda aos comentários
4. Aguarde re-review
5. PR é mergeado! 🎉

## 📞 Perguntas?

Abra uma [Discussion](https://github.com/rtsantos261174/game-da-copa/discussions) ou crie uma [Issue](https://github.com/rtsantos261174/game-da-copa/issues) com seu dúvida.

---

**Obrigado por contribuir! Você é incrível!** ⚽🏆