# 🔊 Sistema de Áudio - Arena Trívia

## Índice

- [Visão Geral](#visão-geral)
- [Web Audio API](#web-audio-api)
- [Tipos de Som](#tipos-de-som)
- [Síntese de Áudio](#síntese-de-áudio)
- [Implementação](#implementação)
- [Troubleshooting](#troubleshooting)

## 🎵 Visão Geral

### Tecnologia
- **API**: Web Audio API (compatível com navegadores modernos)
- **Síntese**: Osciladores sine, sawtooth e triangle
- **Processamento**: Envelopes ADSR personalizados
- **Latência**: ~50ms (mínima)

### Características
- ✅ Sem arquivos de áudio externos (síntese pura)
- ✅ Tamanho zero (nenhuma dependência de arquivo)
- ✅ Criação dinâmica de sons
- ✅ Compatibilidade multinavegador
- ✅ Controle de volume
- ✅ Mute/Unmute

## 🎹 Web Audio API

### Arquitetura

```
┌─────────────────────────────────┐
│   Web Audio Context             │
│   (Contexto Global de Áudio)    │
├─────────────────────────────────┤
│                                 │
│  Oscillator → GainNode → Dest  │
│  (Gerador)  (Volume)  (Saída)  │
│                                 │
└─────────────────────────────────┘
        ↓
    Caixas de Som
```

### Fluxo de Criação

```javascript
// 1. Criar contexto (global, uma única vez)
audioCtx = new AudioContext();

// 2. Criar nós
const osc = audioCtx.createOscillator();
const gain = audioCtx.createGain();

// 3. Conectar nós
osc.connect(gain);
gain.connect(audioCtx.destination);

// 4. Configurar parâmetros
osc.frequency.value = 440;  // Frequência em Hz
gain.gain.value = 0.1;      // Volume (0-1)

// 5. Iniciar e parar
osc.start();
osc.stop(audioCtx.currentTime + 1);  // 1 segundo depois
```

## 🎼 Tipos de Som

### 1. Som de Acerto (Correct)

**Características:**
- **Tipo de Onda**: Sine (smooth, puro)
- **Frequência**: 440Hz → 880Hz (uma oitava acima)
- **Duração**: 300ms
- **Envelope**: Attack rápido, Decay suave
- **Volume**: 0.1 → 0.01
- **Efeito Auditivo**: Bipe alegre, tom ascendente

**Código:**
```javascript
if (type === 'correct') {
  let osc = audioCtx.createOscillator();
  let gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  // Frequency sweep: 440Hz → 880Hz em 150ms
  osc.frequency.setValueAtTime(440, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(
    880, 
    audioCtx.currentTime + 0.15
  );
  
  // Volume envelope
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.01, 
    audioCtx.currentTime + 0.3
  );
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.3);
}
```

**Visualização:**
```
Frequência:  880Hz ─────╮
             440Hz ──────╯
             
Volume:      0.1 ──╮
             0.01 ──╯
             
Tempo:       0ms  150ms  300ms
```

### 2. Som de Erro (Incorrect)

**Características:**
- **Tipo de Onda**: Sawtooth (timbre rico)
- **Frequência**: 220Hz → 110Hz (uma oitava abaixo)
- **Duração**: 300ms (similar ao de acerto)
- **Envelope**: Attack rápido, Decay exponencial
- **Volume**: 0.15 → 0.01
- **Efeito Auditivo**: Bipe triste, tom descendente

**Código:**
```javascript
if (type === 'incorrect') {
  let osc = audioCtx.createOscillator();
  let gain = audioCtx.createGain();
  osc.type = 'sawtooth';  // Onda complexa
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  // Frequency sweep: 220Hz → 110Hz em 250ms
  osc.frequency.setValueAtTime(220, audioCtx.currentTime);
  osc.frequency.linearRampToValueAtTime(
    110, 
    audioCtx.currentTime + 0.25
  );
  
  // Volume envelope
  gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.01, 
    audioCtx.currentTime + 0.3
  );
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.3);
}
```

**Visualização:**
```
Frequência:  220Hz ──╮
             110Hz ──╯
             
Volume:      0.15 ──╮
             0.01  ──╯
             
Tempo:       0ms  250ms  300ms
```

### 3. Som de Apito (Whistle)

**Características:**
- **Tipo de Onda**: Triangle (acústico)
- **Frequência Base**: 2500Hz (agudo)
- **Modulação**: 45Hz (efeito de trilo)
- **Duração**: 2x 150ms (dois sopros)
- **Envelope**: Rápido attack/decay
- **Volume**: 0.08 → 0.001
- **Efeito Auditivo**: Apito de juiz com vibração

**Código:**
```javascript
if (type === 'whistle') {
  let now = audioCtx.currentTime;
  
  // Dois sopros de apito
  [0, 0.18].forEach(delay => {
    // Oscilador principal
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    // Oscilador modulador (para vibrato)
    let mod = audioCtx.createOscillator();
    let modGain = audioCtx.createGain();
    mod.frequency.value = 45;    // Frequência de modulação
    modGain.gain.value = 150;    // Amplitude de modulação
    
    // Conectar modulador ao OSC principal
    mod.connect(modGain);
    modGain.connect(osc.frequency);
    
    // Frequência principal (modulada)
    osc.frequency.value = 2500;
    
    // Volume envelope
    gain.gain.setValueAtTime(0.08, now + delay);
    gain.gain.exponentialRampToValueAtTime(
      0.001, 
      now + delay + 0.13
    );
    
    // Iniciar e parar
    mod.start(now + delay);
    osc.start(now + delay);
    mod.stop(now + delay + 0.15);
    osc.stop(now + delay + 0.15);
  });
}
```

**Visualização:**
```
Frequência:  2500Hz ──────────────────┐ (modulada por 45Hz)
             (com vibração de 45Hz)   │
                                      └─────
             
Volume:      0.08 ──╮      0.08 ──╮
             0.001 ─╯      0.001 ─╯
             
Tempo:       0ms  150ms  180ms 330ms
             └─ Sopro 1─┘└─ Sopro 2 ─┘
```

## 🎹 Síntese de Áudio

### Tipos de Onda

| Tipo | Fórmula | Som | Uso |
|------|---------|-----|-----|
| **sine** | Suave sinusoidal | Puro, cálido | Tons puros |
| **square** | Pulso 50% duty | Eletrônico, hollow | Synth retrô |
| **sawtooth** | Dente de serra | Áspero, bruto | Bipes tristes |
| **triangle** | Pulso 25% duty | Suave/áspero | Apitos, flautas |

### Envoltória ADSR

```
A = Attack (Ataque): Tempo para atingir volume máximo
D = Decay (Decaimento): Tempo até o sustain
S = Sustain (Sustentação): Volume mantido
R = Release (Liberação): Tempo até silêncio

  Volume
    ▲
    │     ╱╲
    │ A ╱  ╲ D
  S │╭─────╲──────╮
    ││      │      │ R
    │└──────────────╯
    ├──┼──────────────┼──
    0    Tempo →
```

**Arena Trívia usa ADR (sem S):**
```
Correto:   A rápido → D suave → silêncio
Incorreto: A rápido → D suave → silêncio
Apito:     A super rápido → R rápido (x2)
```

## 🔧 Implementação

### Inicialização

```javascript
function initAudio() {
  if (!audioCtx) {
    // Criar contexto (Chrome, Firefox, Safari)
    audioCtx = new (
      window.AudioContext || 
      window.webkitAudioContext
    )();
  }
}
```

### Função Principal

```javascript
function playSfx(type) {
  // 1. Validar
  if (gameState.soundMuted) return;
  
  try {
    // 2. Inicializar
    initAudio();
    
    // 3. Resume se necessário (HTTPS requer user gesture)
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    
    // 4. Criar som (ver tipos acima)
    if (type === 'correct') { ... }
    else if (type === 'incorrect') { ... }
    else if (type === 'whistle') { ... }
    
  } catch (err) {
    console.warn("Audio Context falhou:", err);
  }
}
```

### Controle de Volume

```javascript
function toggleMute() {
  gameState.soundMuted = !gameState.soundMuted;
  
  // Atualizar UI
  const btn = document.getElementById('btn-sound');
  if (gameState.soundMuted) {
    btn.classList.add('bg-red-500/10');
  } else {
    btn.classList.remove('bg-red-500/10');
  }
}
```

## 🐛 Troubleshooting

### Áudio não funciona

**Causa**: Navegador requer HTTPS ou interação do usuário

**Solução**:
```javascript
// Forçar resume no primeiro clique
document.addEventListener('click', () => {
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
});
```

### Som muito alto/baixo

**Ajustar volume:**
```javascript
// Aumentar
gain.gain.setValueAtTime(0.2, audioCtx.currentTime);

// Diminuir
gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
```

### Múltiplos sons simultâneos

**Evitar overlaps:**
```javascript
// Parar som anterior
if (currentOsc) currentOsc.stop();

// Criar novo
const newOsc = audioCtx.createOscillator();
```

### Navegador sem suporte

**Fallback:**
```javascript
if (!window.AudioContext && !window.webkitAudioContext) {
  console.warn("Web Audio API não suportado");
  gameState.soundMuted = true;  // Desativar
}
```

---

**Última atualização**: 2026-06-12
**Versão**: 1.0
**Compatibilidade**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+