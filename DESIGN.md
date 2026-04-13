# Design System: PACIZZY

## 1. Visual Theme & Atmosphere

**Mood:** Dark, professional, premium — a deep navy cosmos that evokes trust and technological sophistication. The interface feels like a polished SaaS dashboard with a nocturnal elegance.

**Density:** Generously spaced — sections breathe with ample padding (80–112px vertically on desktop). Content is never cramped; whitespace acts as a structural element.

**Aesthetic Philosophy:** "Professional tools, premium feel." The design borrows from modern fintech/SaaS aesthetics: dark backgrounds, vivid emerald-green accents, glass-morphism in the navbar, and subtle depth via layered shadows. It speaks to skilled tradespeople (artisans RGE) who want to feel they're using enterprise-grade software, not a cobbled-together tool.

---

## 2. Color Palette & Roles

### Primary — Emerald Jewel
| Token | Hex | Role |
|-------|-----|------|
| `primary-500` | `#10B981` | **Brand signature.** Used for CTA buttons, active nav states, highlighted text, and icon accents. This is the color that says "PACIZZY." |
| `primary-600` | `#059669` | **Hover / pressed state.** Deepened emerald for interactive feedback. |
| `primary-100` | `#0D2E23` | **Tinted background.** Badge backgrounds, hover overlays (`bg-primary-500/10`). |
| `primary-50` | `#071A14` | **Deepest tint.** Subtle background zones. |

### Accent — Electric Cyan
| Token | Hex | Role |
|-------|-----|------|
| `accent-500` | `#06B6D4` | **Secondary actions.** "Demander une démo" buttons, highlighted plan check marks, decorative blur orbs. |
| `accent-400` | `#22D3EE` | **Bright pop.** Testimonial avatar gradient endpoint, bright accents. |
| `accent-100` | `#0C3544` | **Tinted background** for accent badges. |

### Warm — Sunlit Amber
| Token | Hex | Role |
|-------|-----|------|
| `amber-400` | `#F59E0B` | **Star ratings** and trust signals. A warm counterpoint to the cool palette. |
| `amber-100` | `#332A0D` | **Amber badge background.** "Le plus populaire" pricing badge. |

### Surface — Midnight Navy Scale (Dark Theme)
| Token | Hex | Role |
|-------|-----|------|
| Body BG | `#0A0F1C` | **Canvas.** The deepest background, almost black with a blue tint. |
| `surface-50` | `#0F1724` | **Elevated surfaces.** Card backgrounds, section alternation, footer. |
| `surface-100` | `#1E293B` | **Component fill.** Card bodies, input backgrounds, hover zones. |
| `surface-200` | `#334155` | **Borders and dividers.** Subtle 1px lines separating sections. |
| `surface-500` | `#94A3B8` | **Secondary text.** Body copy, nav links, descriptions. |
| `surface-700` | `#CBD5E1` | **Primary body text.** Default text color. |
| `surface-800` | `#E2E8F0` | **Emphasized text.** Subheadings, card titles. |
| `surface-900` | `#FFFFFF` | **Maximum contrast.** Hero headings, pricing numbers. |

---

## 3. Typography Rules

**Font Family:** Inter — a geometric sans-serif optimized for screens, loaded at weights 300–900 from Google Fonts.

**Smoothing:** Antialiased on both WebKit and Mozilla for crisp rendering on dark backgrounds.

**Hierarchy:**
| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| **Display / H1** | `text-4xl` → `text-6xl` (responsive) | Extrabold (800) | Hero titles. Tight tracking (`tracking-tight`). |
| **Section / H2** | `text-3xl` → `text-4xl` | Bold (700) | Section headings. |
| **Card / H3** | `text-lg` → `text-2xl` | Semibold–Bold (600–700) | Card titles, feature names. |
| **Body** | `text-base` → `text-lg` | Regular (400) | Paragraphs, descriptions. Relaxed leading (`leading-relaxed`). |
| **Small / Label** | `text-sm` | Medium (500) | Badges, nav links, feature lists. |

**Selection Color:** White text on Emerald (`#10B981`) background — reinforces brand on every text selection.

---

## 4. Component Stylings

### Buttons
- **Shape:** Gently rounded corners (`rounded-lg`, 12px)
- **Motion:** Subtle spring on interaction — scales to 1.02 on hover, 0.98 on press
- **Primary:** Solid emerald fill (`#10B981`) with white text, soft shadow. Deepens to `#059669` on hover.
- **Secondary:** Solid cyan fill (`#06B6D4`) with white text.
- **Outline:** 2px emerald border with emerald text. Background tints on hover (`bg-primary-500/10`).
- **Ghost:** Invisible until hovered — text transitions to emerald, background to `surface-100`.
- **Sizes:** Small (32px height), Medium (44px height), Large (56px height).

### Cards / Containers
- **Shape:** Generously rounded corners (`rounded-xl`, 16px)
- **Background:** `surface-100` (`#1E293B`) — one step above the canvas
- **Border:** 1px `surface-200` (`#334155`) — a whisper-thin divider
- **Shadow:** Soft diffused shadow at rest, deepens on hover
- **Motion:** Cards float upward 4px on hover with a 200ms ease

### Badges
- **Shape:** Pill-shaped (`rounded-full`)
- **Size:** Compact — `px-3 py-1 text-sm`
- **Variants:** Each uses a tinted background with matching text:
  - Primary: Dark emerald bg + emerald text
  - Accent: Dark cyan bg + cyan text
  - Amber: Dark gold bg + amber text

### Pricing Cards
- **Default:** Standard card styling
- **Highlighted:** Gradient emerald background (`from-primary-600 to-primary-800`), elevated shadow, 2px emerald ring, scaled up 5% (`scale-105`)
- **Badge:** Floats above the card at `-top-3`, centered

### Testimonial Cards
- **Avatar:** 40px circle with emerald-to-cyan gradient, displaying the initial letter in white
- **Stars:** Filled amber stars (`fill-amber-400`)
- **Quote:** Body text in surface-500 with relaxed leading

### Form Inputs
- **Shape:** `rounded-lg` with 1px `surface-200` border
- **Background:** `surface-50` (darkest elevated surface)
- **Focus:** Emerald border + 2px emerald ring at 20% opacity
- **Placeholder:** `surface-400` (very muted)

---

## 5. Layout Principles

### Container
- **Max width:** 80rem (`max-w-7xl`) — 1280px
- **Horizontal padding:** 16px → 24px → 32px (responsive: `px-4 sm:px-6 lg:px-8`)

### Section Spacing
- **Vertical padding:** `py-20 lg:py-28` (80–112px) — sections are tall and confident
- **Hero is taller:** `py-24 lg:py-36` (96–144px)
- **Alternating backgrounds:** Sections alternate between `surface-50` and transparent (canvas)

### Grid System
- **Standard:** CSS Grid with `gap-8` (32px) to `gap-10` (40px)
- **Feature grids:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Pricing:** `grid-cols-1 md:grid-cols-3` with the center card scaled up
- **Footer:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-5`

### Navbar
- **Fixed** at the top with `z-50`
- **Height:** 72px (`h-18`)
- **Scroll state:** Transparent → glass-morphism (`bg-[#0A0F1C]/80 backdrop-blur-lg`) with soft shadow and bottom border
- **Breakpoint:** Desktop links at `lg` (1024px), hamburger below

---

## 6. Depth & Elevation System

Three tiers of shadow, all using dark rgba values suited to the dark theme:

| Level | Token | Character | Usage |
|-------|-------|-----------|-------|
| **Ground** | `shadow-soft` | Whisper-soft diffused glow | Buttons, cards at rest, scrolled navbar |
| **Raised** | `shadow-card` | Medium depth with wider spread | Pricing cards, prominent containers |
| **Floating** | `shadow-elevated` | Deep, dramatic lift (60px spread) | Highlighted pricing card, hero dashboard mock |

---

## 7. Motion & Animation Language

**Easing:** Custom cubic-bezier `[0.22, 1, 0.36, 1]` — energetic start, gentle settle. Used consistently across all animations.

| Animation | Behavior | Duration | Usage |
|-----------|----------|----------|-------|
| **fadeUp** | Opacity 0→1, Y +30→0 | 0.6s | Default entrance for sections, cards |
| **fadeIn** | Opacity 0→1 | 0.5s | Badges, subtle elements |
| **slideUp** | Opacity 0→1, Y +60→0 | 0.5s | Hero children (heavier entrance) |
| **slideDown** | Height 0→auto + fade | 0.3s in / 0.2s out | Mobile menu, accordions |
| **pageTransition** | Opacity + Y ±20 | 0.4s in / 0.3s out | Route changes via AnimatePresence |
| **stagger** | 0.1s delay per child | — | Feature grids, pricing cards, testimonials |
| **hover lift** | Y -4px | 0.2s | Cards on hover |
| **button spring** | Scale 1.02 / 0.98 | instant | Buttons on hover/tap |

**Trigger:** Most scroll animations use `whileInView` with `viewport={{ once: true, margin: '-80px' }}` — elements animate in once, slightly before entering view.

---

## 8. Decorative Elements

### Background Orbs
Large blurred circles (400–500px) using `blur-3xl` with semi-transparent primary/accent colors (30% opacity). They create a cosmic glow effect behind hero sections and CTAs. The hero uses parallax scrolling on these orbs via `useScroll`/`useTransform`.

### Gradients
- **CTA Section:** `bg-gradient-to-r from-primary-600 to-primary-800` — a rich horizontal emerald gradient
- **Highlighted Pricing:** `bg-gradient-to-b from-primary-600 to-primary-800` — vertical emerald gradient
- **Avatars:** `bg-gradient-to-br from-primary-500 to-accent-500` — emerald-to-cyan diagonal
