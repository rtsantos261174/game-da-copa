# 🎨 Guia de Estilo - Arena Trívia

## Índice

- [Paleta de Cores](#paleta-de-cores)
- [Tipografia](#tipografia)
- [Componentes](#componentes)
- [Responsive Design](#responsive-design)
- [Acessibilidade](#acessibilidade)
- [Temas Customizados](#temas-customizados)

## 🎭 Paleta de Cores

### Cores Primárias (Tema Futebolístico)

```css
/* Verde - Cor principal */
--color-primary-emerald: #22c55e;      /* Bright Green */
--color-primary-dark: #0e3e2b;         /* Dark Green (background) */
--color-primary-light: #d1fae5;        /* Light Green */

/* Amarelo - Acentuação */
--color-accent-yellow: #facc15;        /* Golden Yellow */
--color-accent-amber: #f59e0b;         /* Warm Amber */

/* Neutros */
--color-white: #ffffff;                /* Pure White */
--color-black: #000000;                /* Pure Black */
```

### Cores Secundárias

```css
/* Feedback */
--color-success: #10b981;              /* Bright Green (Acerto) */
--color-error: #ef4444;                /* Bright Red (Erro) */
--color-info: #3b82f6;                 /* Blue (Info) */
--color-warning: #f59e0b;              /* Orange (Warning) */

/* Gradientes */
--gradient-main: linear-gradient(
  to right,
  #facc15,           /* Amarelo */
  #22c55e,           /* Verde */
  #d1fae5            /* Verde claro */
);

--gradient-dark: radial-gradient(
  circle at center,
  #0e3e2b 0%,        /* Verde escuro */
  #051a10 100%       /* Preto/Verde muito escuro */
);
```

### Contrastes

| Fundo | Texto | WCAG AA | WCAG AAA |
|-------|-------|---------|----------|
| #0e3e2b (Verde escuro) | #ffffff (Branco) | ✅ 7.1:1 | ✅ Passa |
| #0e3e2b | #facc15 (Amarelo) | ✅ 6.8:1 | ✅ Passa |
| #ffffff | #0e3e2b | ✅ 13.5:1 | ✅ Passa |
| #ef4444 (Vermelho) | #ffffff | ✅ 4.6:1 | ✅ Passa |

## ✍️ Tipografia

### Fontes

```css
/* Corpo do Texto */
body {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;
}

/* Títulos e Cabeçalhos */
.font-sport,
h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;           /* Bold por padrão */
  letter-spacing: 0.05em;     /* Slight tracking */
}

h1, .text-3xl, .text-4xl {
  font-weight: 900;           /* Extra Bold */
}
```

### Escala Tipográfica

```css
/* H1 - Título Principal */
h1, .text-4xl {
  font-size: 2.25rem;         /* 36px */
  line-height: 1.1;
  margin-bottom: 1rem;
}

/* H2 - Título Secundário */
h2, .text-3xl {
  font-size: 1.875rem;        /* 30px */
  line-height: 1.2;
  margin-bottom: 0.875rem;
}

/* H3 - Subtítulo */
h3, .text-2xl {
  font-size: 1.5rem;          /* 24px */
  line-height: 1.3;
  margin-bottom: 0.75rem;
}

/* Body Text */
p, .text-base {
  font-size: 1rem;            /* 16px */
  line-height: 1.6;
}

/* Small Text */
small, .text-sm {
  font-size: 0.875rem;        /* 14px */
  line-height: 1.5;
}

/* Extra Small */
.text-xs {
  font-size: 0.75rem;         /* 12px */
  line-height: 1.4;
}
```

## 🧩 Componentes

### Botão Primário

```html
<button class="btn-primary">
  ENTRAR EM CAMPO
</button>
```

```css
.btn-primary {
  background: linear-gradient(
    to right,
    #facc15,           /* Amarelo */
    #fbbf24,           /* Âmbar */
    #f59e0b            /* Âmbar escuro */
  );
  color: #0e3e2b;              /* Verde escuro */
  font-weight: 900;
  padding: 1rem 1.5rem;        /* 16px 24px */
  border-radius: 1rem;         /* 16px */
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: linear-gradient(
    to right,
    #fcd34d,           /* Mais claro */
    #fbbf24,
    #f59e0b
  );
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(34, 197, 94, 0.3);
}

.btn-primary:active {
  transform: scale(0.95);
}
```

### Botão Secundário

```html
<button class="btn-secondary">
  PRÓXIMA PERGUNTA
</button>
```

```css
.btn-secondary {
  background: linear-gradient(
    to right,
    #10b981,           /* Green */
    #059669            /* Green darker */
  );
  color: #ffffff;
  font-weight: 800;
  padding: 0.875rem 2rem;      /* 14px 32px */
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: linear-gradient(
    to right,
    #34d399,
    #10b981
  );
}
```

### Card

```html
<div class="card">
  <h3>Título do Card</h3>
  <p>Conteúdo do card</p>
</div>
```

```css
.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;      /* 24px */
  padding: 1.5rem;            /* 24px */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(34, 197, 94, 0.15);
}
```

### Input

```html
<input type="text" class="input" placeholder="Seu nome">
```

```css
.input {
  background: rgba(15, 117, 89, 0.3);      /* Emerald 950/30 */
  border: 1px solid rgba(16, 185, 129, 0.3);  /* Emerald 700/30 */
  border-radius: 1.5rem;                   /* 24px */
  padding: 1rem 1rem 1rem 3rem;            /* 16px, com espaço para ícone */
  color: #ffffff;
  font-size: 1.125rem;                     /* 18px */
  font-weight: 600;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.input::placeholder {
  color: rgba(16, 185, 129, 0.5);          /* Emerald 600/50 */
}

.input:focus {
  border-color: #facc15;                   /* Amarelo */
  background: rgba(15, 117, 89, 0.5);
  box-shadow: 0 0 20px rgba(250, 204, 21, 0.2);
}
```

### Badge

```html
<span class="badge badge-success">Acertou!</span>
<span class="badge badge-error">Errou!</span>
```

```css
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;                    /* 8px 16px */
  border-radius: 9999px;                   /* Fully rounded */
  font-size: 0.875rem;                     /* 14px */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-success {
  background: rgba(16, 185, 129, 0.2);     /* Green/20 */
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.badge-error {
  background: rgba(239, 68, 68, 0.2);      /* Red/20 */
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
/* Default: Mobile (320px - 640px) */

/* Tablet (641px - 1024px) */
@media (min-width: 768px) {
  /* Aumentar tamanho de fonte */
  h1 {
    font-size: 2.25rem;  /* 36px */
  }
}

/* Desktop (1025px+) */
@media (min-width: 1280px) {
  /* Layouts mais complexos */
  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
}
```

### Tailwind Classes

```html
<!-- Grid responsivo -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>1 coluna mobile, 2 em tablet+</div>
  <div>Item 2</div>
</div>

<!-- Padding responsivo -->
<div class="p-4 md:p-6 lg:p-8">
  Padding: 16px mobile, 24px tablet, 32px desktop
</div>

<!-- Font size responsivo -->
<h1 class="text-xl md:text-2xl lg:text-4xl">
  Responsivo
</h1>
```

## ♿ Acessibilidade

### WCAG AA Compliance

```html
<!-- Usar labels -->
<label for="player-name">Nome do Jogador:</label>
<input id="player-name" type="text">

<!-- Usar aria-labels -->
<button aria-label="Ativar som">
  <i class="fa-solid fa-volume-high"></i>
</button>

<!-- Alt text para ícones -->
<i class="fa-solid fa-trophy" aria-hidden="true"></i>

<!-- Botões com contraste mínimo -->
<!-- Razão: 4.5:1 para texto normal -->
<!-- Razão: 3:1 para texto grande -->
```

### Cores Segunas

```css
/* Não usar cor APENAS para comunicar informação */

/* ❌ Ruim */
<button class="bg-red-500">Erro</button>  <!-- Sem ícone/texto -->

/* ✅ Bom */
<button class="bg-red-500">
  <i class="fa-solid fa-circle-xmark"></i>
  Erro
</button>
```

### Focus States

```css
/* Sempre adicionar focus visible */
button:focus-visible {
  outline: 2px solid #facc15;      /* Amarelo */
  outline-offset: 2px;
}

input:focus {
  border-color: #facc15;
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.1);
}
```

## 🎨 Temas Customizados

### Tema Dark (Padrão)

```css
:root {
  --bg-primary: #0e3e2b;       /* Verde escuro */
  --bg-secondary: #051a10;     /* Quase preto */
  --text-primary: #ffffff;     /* Branco */
  --text-secondary: #d1fae5;   /* Verde claro */
  --accent: #facc15;           /* Amarelo */
}
```

### Tema Light (Futuro)

```css
[data-theme="light"] {
  --bg-primary: #f9fafb;       /* Cinza claro */
  --bg-secondary: #ffffff;     /* Branco */
  --text-primary: #111827;     /* Preto */
  --text-secondary: #6b7280;   /* Cinza */
  --accent: #dc2626;           /* Vermelho (mais visível) */
}
```

### Como Usar

```html
<!-- HTML -->
<html data-theme="dark">...</html>

<!-- JavaScript -->
document.documentElement.setAttribute('data-theme', 'light');
```

---

**Última atualização**: 2026-06-12
**Versão**: 1.0
**Compatibilidade**: Todos os navegadores modernos