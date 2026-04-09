# Design System — BARP.HOFF. Advocacia

> Documento de referência visual do projeto BARP.HOFF. Todas as decisões de cor, tipografia, espaçamento e componentes devem seguir este guia.

---

## 1. Design Tokens

### 1.1 Cores — Paleta Oficial

> **Fonte de verdade:** Elementor Global Colors do site WordPress original (`barphoff.WordPress.2026-03-22.xml`).

#### Cores Globais do Sistema (Elementor)

| Token | Hex | ID Elementor | Uso | Amostra |
|-------|-----|-------------|-----|---------|
| `brand` | `#994B4B` | `primary` | **Cor principal.** Backgrounds de seção escura, links, badges, bordas, ícones | ![#994B4B](https://placehold.co/80x30/994B4B/994B4B) |
| `gold` | `#D5BE9F` | `accent` | **Accent dourado.** Bordas, textos accent, separadores, destaques | ![#D5BE9F](https://placehold.co/80x30/D5BE9F/D5BE9F) |
| `white` | `#FFFFFF` | `secondary` | Texto sobre fundo escuro, backgrounds claros | ![#FFFFFF](https://placehold.co/80x30/FFFFFF/CCCCCC) |
| `text` | `#000000` | `text` | Texto body padrão | ![#000000](https://placehold.co/80x30/000000/000000) |
| `gray` | `#CACACA` | custom | Elementos cinza neutro | ![#CACACA](https://placehold.co/80x30/CACACA/CACACA) |
| `gray-light` | `#DCDCDC` | `.bg-color-grey` | Backgrounds cinza claro | ![#DCDCDC](https://placehold.co/80x30/DCDCDC/DCDCDC) |

> **REGRA:** Seções escuras usam `#994B4B` (vinho primário). Nunca usar `#1A1A1A` (cinza-carvão) — não pertence à marca.

#### Dourado (Variantes)

| Token | Hex | Origem | Uso |
|-------|-----|--------|-----|
| `gold` | `#D5BE9F` | Elementor accent | Token principal: bordas, destaques, backgrounds semi-transparentes |
| `gold-50` | `rgba(213, 190, 159, 0.5)` | `.bg-color-gold` WP | Background dourado sutil |
| `taupe` | `#AF9879` | `.degradebarp2` | Stop intermediário do gradient secundário |
| `gold-warm` | `#EFBF78` | `.degradebarp` | Stop intermediário do gradient principal |

#### Gradients de Texto (originais WordPress)

```css
/* .degradebarp — gradient principal (títulos premium) */
background: linear-gradient(79.05deg, #994B4B -10%, #EFBF78 20.71%, #994B4B 99%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* .degradebarp2 — gradient secundário (textos de seção) */
background: linear-gradient(79.05deg, #994B4B -10%, #AF9879 20.71%, #994B4B 99%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### Neutros

| Token | Hex | Uso |
|-------|-----|-----|
| `bg-white` | `#FFFFFF` | Background padrão |
| `text` | `#000000` | Texto principal sobre fundo claro |
| `gray` | `#CACACA` | Elementos de suporte |
| `gray-light` | `#DCDCDC` | Backgrounds cinza claro alternado |

#### Funcional (WhatsApp)

| Token | Hex | Uso |
|-------|-----|-----|
| `wa` | `#25D366` | Botão flutuante WhatsApp (cor oficial) |

> O WordPress original usa `vivid-green-cyan` (default WP). O botão flutuante `#25D366` é a cor oficial do WhatsApp.

#### Overlays & Transparências

| Token | Valor | Uso |
|-------|-------|-----|
| `overlay-dark` | `rgba(153, 75, 75, 0.85)` | Sobre imagens para texto branco (base `#994B4B`) |
| `overlay-mid` | `rgba(153, 75, 75, 0.4)` | Overlay sutil sobre seções |
| `glow-gold` | `rgba(213, 190, 159, 0.18)` | Glow radial dourado |
| `shadow-sm` | `0 4px 16px rgba(0, 0, 0, 0.08)` | Cards em repouso |
| `shadow-md` | `0 12px 36px rgba(0, 0, 0, 0.15)` | Cards em hover |
| `border-warm` | `rgba(213, 190, 159, 0.20)` | Bordas douradas sutis |

---

### 1.1b Paleta Expandida — LPs de Conversão

> As landing pages em `public/styles.css` usam uma paleta derivada, otimizada para conversão. Estas cores **NÃO** são a identidade core — são variações para as LPs. Não modificar.

| Token LP | Hex | Uso nas LPs |
|----------|-----|-------------|
| `--bg-dark` | `#2a0a0f` | Background escuro premium |
| `--primary` | `#3d1017` | Overlays, acentos |
| `--primary-light` | `#5a1a22` | Gradients sutis |
| `--accent` | `#c4a97d` | Accent dourado alternativo |
| `--accent-warm` | `#d4b896` | Dourado mais claro |
| `--bg-warm` | `#faf8f5` | Off-white quente |
| `--text` | `#1a0508` | Texto com tom de vinho |
| `--secondary` | `#5c3a3f` | Texto secundário |
| `--muted` | `#9a7a7f` | Texto muted |
| `--wa` | `#10b981` | WhatsApp verde |

---

### 1.2 Tipografia

#### Font Stack

| Token | Font | Fallback | Uso |
|-------|------|----------|-----|
| `font-heading` | MozaicGEO | Outfit, system-ui | Títulos h1-h3, hero text |
| `font-sans` | Inter | system-ui, sans-serif | Body text, parágrafos, UI |
| `font-serif` | Prata | Georgia, serif | Citações, depoimentos (opcional) |

#### Escala Tipográfica

| Elemento | Desktop | Mobile | Weight | Font |
|----------|---------|--------|--------|------|
| Hero h1 | `text-5xl` (3rem) | `text-3xl` (1.875rem) | 700 (bold) | MozaicGEO |
| Section h2 | `text-4xl` (2.25rem) | `text-3xl` (1.875rem) | 700 (bold) | MozaicGEO |
| Card h3 | `text-xl` (1.25rem) | `text-lg` (1.125rem) | 600 (semibold) | MozaicGEO |
| Body | `text-base` (1rem) | `text-base` (1rem) | 400 (regular) | Inter |
| Small/Caption | `text-sm` (0.875rem) | `text-sm` | 400 | Inter |
| Section label | `text-sm` (0.875rem) | `text-sm` | 400, uppercase, tracking-widest | Inter |
| Nav links | `text-sm` (0.875rem) | — | 600 | Inter |

#### Estilo de Textos Especiais

| Classe | Descrição |
|--------|-----------|
| `.gradient-text` | Texto dourado degradê (títulos de seção) |
| `.gradient-text-hero` | Texto dourado com drop-shadow (hero) |
| `.gradient-text-2` | Texto vinho→dourado→vinho (sub-seções) |
| `.section-label` | Uppercase, tracking-widest, `text-brand` (pré-título de seção) |
| `.section-title` | `font-heading text-3xl font-bold text-gray-900 md:text-4xl` |

---

### 1.3 Espaçamento

| Contexto | Valor | Tailwind |
|----------|-------|----------|
| Seções verticais | 80px (desktop) / 48px (mobile) | `py-20` / `py-12` |
| Container max-width | 1280px | `max-w-7xl` |
| Container padding | 16px (mobile) / 24px (desktop) | `px-4 md:px-6` |
| Gap entre cards | 24px | `gap-6` |
| Card padding interno | 24px | `p-6` |
| Espaço entre seções internas | 48px | `space-y-12` |
| Margem título → conteúdo | 16px | `mb-4` |

### 1.4 Bordas & Raios

| Contexto | Valor | Tailwind |
|----------|-------|----------|
| Cards principais | 16px | `rounded-2xl` |
| Cards menores | 12px | `rounded-xl` |
| Botões | 8px | `rounded-lg` |
| Badges/Tags | 8px | `rounded-lg` |
| Avatar | 50% | `rounded-full` |
| Borda padrão cards | 1px `border-gray-100` ou `border-[#D5BE9F]/60` | — |

### 1.5 Motion & Animações

| Token | Valor | Uso |
|-------|-------|-----|
| `transition` | `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` | Hover em botões e cards |
| `fade-in-up` | `0.5s cubic-bezier(0.22, 1, 0.36, 1)` | Scroll reveal de seções |
| `fade-in-left` | `0.5s cubic-bezier(0.22, 1, 0.36, 1)` + blur | Entrada lateral esquerda |
| `fade-in-right` | `0.5s cubic-bezier(0.22, 1, 0.36, 1)` + blur | Entrada lateral direita |
| `bounce-in` | `0.6s cubic-bezier(0.22, 1, 0.36, 1)` | Títulos de seção (scale) |
| `marquee` | `20s linear infinite` | Ticker horizontal |
| `pulse-cta` | `2s ease-in-out infinite` | Botões CTA (idle pulse) |

> **Easing padrão:** `cubic-bezier(0.22, 1, 0.36, 1)` (spring) para entradas.
> **Easing hover:** `cubic-bezier(0.4, 0, 0.2, 1)` (standard Material) para interações.

---

## 2. Componentes

### 2.1 Header

| Propriedade | Valor |
|-------------|-------|
| Top bar | `bg-brand` (`#994B4B`), texto branco, 13px |
| Nav bar | `bg-white`, sticky após scroll (shadow-sm) |
| Logo | 160px width desktop, 130px mobile |
| Nav links | `text-sm font-semibold uppercase tracking-wider text-gray-800` |
| Dropdown | `bg-white rounded-xl shadow-lg border border-gray-100`, 220px width |
| CTA header | `bg-brand text-white rounded-lg px-5 py-2.5` |

#### Estados

| Estado | Visual |
|--------|--------|
| Default (top) | Transparente, sem shadow |
| Sticky (scroll) | `bg-white/95 backdrop-blur shadow-sm` |
| Mobile menu | Fullscreen overlay, slide-in da direita |

---

### 2.2 Botão WhatsApp (CTA inline)

**Classe:** `.btn-whatsapp`

| Propriedade | Valor |
|-------------|-------|
| Background | `linear-gradient(90deg, #348011, #6DC246, #348011)` |
| Texto | Branco, bold, `text-lg` |
| Padding | `px-10 py-5` |
| Border-radius | `rounded-lg` |
| Shadow | `0 4px 14px rgba(0, 168, 89, 0.25)` |

| Estado | Visual |
|--------|--------|
| Default | Gradient verde + shadow sutil |
| Hover | `translateY(-2px)` + shadow `0 6px 20px rgba(0, 168, 89, 0.40)` + gradient mais escuro |
| Pulse (idle) | `pulse-cta` animation (2s loop, box-shadow expand) |

---

### 2.3 Botão WhatsApp (Flutuante)

| Propriedade | Valor |
|-------------|-------|
| Posição | `fixed bottom-6 right-6 z-50` |
| Tamanho | `60x60px` |
| Background | `#25D366` (flat, cor oficial WhatsApp) |
| Border-radius | `rounded-full` |
| Ícone | SVG branco 32px |
| Aparece | Após scroll > 300px |

| Estado | Visual |
|--------|--------|
| Default | Verde flat + shadow-lg |
| Hover | `scale-110` + pulse ring verde `rgba(37, 211, 102, 0.7)` |
| Hidden | `opacity-0 translate-y-4 pointer-events-none` |

---

### 2.4 Card Área de Atuação

| Propriedade | Valor |
|-------------|-------|
| Background | `overflow-hidden rounded-2xl` |
| Borda | `border border-[#D5BE9F]/60` |
| Imagem | 100% width, `h-48 object-cover` |
| Título | `text-xl font-bold text-gray-900` |
| Descrição | `text-sm text-gray-600` |
| Link | `text-brand font-semibold` com seta `→` |
| Padding conteúdo | `p-6` |

| Estado | Visual |
|--------|--------|
| Default | Border `#D5BE9F/60` + shadow-sm |
| Hover | `-translate-y-2` + `border-[#D5BE9F]` (full) + `shadow-[0_12px_36px_rgba(61,16,23,0.25)]` |

---

### 2.5 Card Blog Post

| Propriedade | Valor |
|-------------|-------|
| Background | `bg-white rounded-2xl shadow-sm` |
| Imagem | `h-48 object-cover rounded-t-2xl` |
| Título | `text-lg font-bold` |
| Excerpt | `text-sm text-gray-600 line-clamp-3` |
| Data | `text-xs text-gray-400` |
| Categoria badge | `bg-brand/10 text-brand text-xs px-3 py-1 rounded-lg` |
| Padding conteúdo | `p-5` |

| Estado | Visual |
|--------|--------|
| Default | Shadow-sm, sem borda |
| Hover | `-translate-y-2` + `border border-[#D5BE9F]/40` + `shadow-[0_12px_36px_rgba(61,16,23,0.15)]` |

---

### 2.6 Card Review (Google)

| Propriedade | Valor |
|-------------|-------|
| Tamanho | `min-w-[300px] max-w-[340px]` |
| Background | `bg-white rounded-xl border border-gray-100 shadow-sm` |
| Avatar | `h-10 w-10 rounded-full bg-brand text-white font-bold` |
| Nome | `text-sm font-semibold text-gray-900` |
| Data | `text-xs text-gray-400` |
| Estrelas | 5x SVG `h-4 w-4 text-yellow-400` |
| Texto | `text-sm text-gray-600 leading-relaxed` |
| Ícone Google | SVG multi-color `h-5 w-5` |
| Padding | `p-6` |

---

### 2.7 Seção Hero

| Propriedade | Valor |
|-------------|-------|
| Background | `#994B4B` (vinho primário) |
| Overlay | Gradient `from-[#994B4B]/85 via-[#994B4B]/75 to-[#994B4B]/90` |
| Pattern | SVG hexagon `rgba(213, 190, 159, 0.06)` stroke |
| Glow | `.hero-glow` radial gold blur(40px) |
| Subtítulo | `.section-label` uppercase tracking |
| Título | `font-heading text-5xl font-bold text-white` com `.gradient-text-hero` |
| Descrição | `text-white/90 text-lg` |
| Height | `min-h-[90vh]` com foto equipe, ou `min-h-[400px]` sem foto |

---

### 2.8 Seção Escura (Áreas, CTA)

| Propriedade | Valor |
|-------------|-------|
| Background | `#994B4B` (vinho primário) |
| Gradients overlay | Sutis sobre o vinho primário |
| Pattern | SVG hexagon, opacidade 4-6% |
| Borda top | `h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent` |
| Texto | `text-white`, `text-white/80`, `text-white/50` |
| Títulos | `.gradient-text` dourado |

---

### 2.9 Seção Clara

| Propriedade | Valor |
|-------------|-------|
| Background | `#ffffff` ou `#faf8f5` (alternado) |
| Pré-título | `.section-label` → `text-brand uppercase tracking-widest` |
| Título | `.section-title` → `font-heading text-3xl md:text-4xl font-bold text-gray-900` |
| Descrição | `text-gray-600` |
| Padding | `py-20` desktop, `py-12` mobile |

---

### 2.10 Footer

| Propriedade | Valor |
|-------------|-------|
| Background | `bg-gray-900` |
| Logo | Branco, 140px |
| Texto | `text-gray-400` |
| Links | `text-gray-300 hover:text-white` |
| Redes sociais | `text-gray-400 hover:text-white` icons 20px |
| Bottom bar | `border-t border-gray-800`, `text-gray-500 text-xs` |
| Crédito | "Feito por Edu Santana..." → link WhatsApp |

---

## 3. Patterns

### 3.1 Hexagon Pattern (SVG)

Usado como overlay em seções escuras e hero.

```html
<svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hexagons" width="50" height="43.3" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
      <polygon points="25,0 50,14.4 50,43.3 25,28.9 0,43.3 0,14.4"
               fill="none" stroke="rgba(196,169,125,0.06)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#hexagons)"/>
</svg>
```

Variantes de opacidade:
- Seção escura: `rgba(196,169,125, 0.06)` (dourado sutil)
- Hero: `rgba(196,169,125, 0.04)` (quase invisível)
- Seção clara: `rgba(153, 75, 75, 0.03)` (vinho sutil — base `#994B4B`)

### 3.2 Gold Divider

Separador dourado gradiente entre seções.

```html
<div class="h-px bg-gradient-to-r from-transparent via-[#D5BE9F]/30 to-transparent" />
```

### 3.3 Scroll Reveal

Classe `animate-on-scroll` + intersection observer para `is-visible`.

```css
.animate-on-scroll { opacity: 0; }
.animate-on-scroll.is-visible { animation: fade-in-up 0.5s cubic-bezier(0.22,1,0.36,1) forwards; }
```

### 3.4 Hero Glow

Radial gradient dourado com blur, posicionado sobre o texto do hero.

```css
.hero-glow {
  position: absolute;
  width: 140%; height: 140%;
  top: 50%; left: 20%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle at center, rgba(196,169,125,0.18) 0%, rgba(196,169,125,0.05) 45%, transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}
```

---

## 4. Acessibilidade

| Requisito | Status |
|-----------|--------|
| Contraste texto brand (#994B4B) sobre branco | ✅ 4.6:1 (AA) |
| Contraste texto branco sobre brand (#994B4B) | ✅ 4.6:1 (AA) |
| Contraste gold (#D5BE9F) sobre brand (#994B4B) | ✅ Bom contraste |
| Contraste gold (#D5BE9F) sobre branco | ⚠️ 2.6:1 (decorativo apenas, não usar para texto body) |
| Contraste preto (#000) sobre branco | ✅ 21:1 (AAA) |
| `aria-label` em botões de ícone | ✅ WhatsApp, carousel arrows |
| `aria-hidden` em ícones decorativos | ✅ SVGs com `aria-hidden="true"` |
| Keyboard nav no dropdown | ✅ Tab/Enter/Escape |
| Skip-to-content | ❌ Não implementado |
| Focus visible | Padrão do browser (suficiente) |

> **REGRA:** `#D5BE9F` (gold) nunca como cor de texto body sobre fundo branco. Usar apenas decorativo (gradients, bordas, badges bg).

---

## 5. Do's and Don'ts

| ✅ Do | ❌ Don't |
|-------|---------|
| Usar `#994B4B` para todos backgrounds escuros do site | Usar `#1A1A1A` (cinza sem identidade) |
| Usar gradients originais do WP (`.degradebarp`, `.degradebarp2`) | Inventar gradients com 5+ stops não-originais |
| Usar `#000000` para texto body | Usar `#1a0508` ou outras variações de preto |
| Usar tokens do Tailwind config | Hardcodar hex diretamente nos TSX |
| Gold (`#D5BE9F`) apenas decorativo sobre branco | Usar gold como cor de texto legível sobre fundo claro |
| Botão flutuante = `#25D366` flat | Misturar cor do botão flutuante com gradient |
| Uma única identidade vinho (`#994B4B`) | Misturar cinza neutro com vinho |
| Manter LPs com sua paleta própria (não mexer) | Copiar cores das LPs pro site principal |

---

## 6. Arquivos de Referência

| Arquivo | Conteúdo |
|---------|----------|
| `tailwind.config.ts` | Tokens de cor, animações, fontes |
| `app/globals.css` | Classes utilitárias (.gradient-text, .btn-whatsapp, .hero-glow) |
| `public/styles.css` | CSS das LPs estáticas (referência original da marca) |
| `components/Header.tsx` | Navegação + top bar |
| `components/Footer.tsx` | Footer com links + redes |
| `components/WhatsAppButton.tsx` | Botão flutuante |
| `components/ReviewsCarousel.tsx` | Carousel de reviews Google |

---

*Última atualização: 2026-04-07 — Paleta corrigida com base no WordPress original (Elementor)*
