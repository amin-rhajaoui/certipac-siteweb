# Design System: Certipac — Édition 2026

Référence : `CTP-DESIGN-2026-FR-001`
Version : `v2.0`

## 1. Ton visuel & atmosphère

**Ton :** Institutionnel, officiel, rassurant — l'interface d'un acteur public français sérieux. L'utilisateur doit sentir qu'il manipule un produit de conformité, pas un SaaS marketing.

**Références visuelles :** sites gouv.fr (DINUM, Transition écologique), IBM Carbon Design System, brand books institutionnels (filets tricolores, typographie monospace pour les références, tableaux denses, documents d'autorité).

**Densité :** Mesurée, informative. Le texte est serré sans être écrasé. Espacement vertical sections : `64–96px` desktop. Les sections alternent blanc / gris `#F4F4F4` pour rythmer la lecture sans effet de carte.

**Philosophie :** « La conformité n'est pas marketing. » On privilégie la lisibilité, la référence numérotée, la trace horodatée. Les éléments décoratifs (dégradés, shadows lourdes, glassmorphism) sont bannis.

---

## 2. Palette de couleurs

### Couleurs de marque
| Token | Hex | Rôle |
|-------|-----|------|
| Bleu Certipac | `#194296` | Couleur principale — liens, titres numérotés, rails gauches, CTA primaires |
| Bleu Certipac foncé | `#0F2E73` | Hover des CTA bleus |
| Bleu tinté | `#F0F4FC` | Fond des zones "info", icônes de contact |
| Vert Certipac | `#43AA43` | Couleur d'accent — point final des titres, validations, boutons success |
| Vert Certipac foncé | `#2A7A2A` | Texte sur fond clair lorsqu'on veut une couleur "success" contrastée |
| Vert tinté | `#DEFBE6` | Fond des Callouts success, zones de validation |
| Ink | `#161616` | Couleur de texte principale, arrière-plans noirs (CTA, tables) |

### Échelle de gris (Carbon-like)
| Token | Hex | Rôle |
|-------|-----|------|
| `gray-10` | `#F4F4F4` | Fond alternatif des sections |
| `gray-20` | `#E0E0E0` | Bordures, séparateurs, grilles avec `gap-px` |
| `gray-30` | `#C6C6C6` | Texte inactif sur fond sombre |
| `gray-50` | `#8D8D8D` | Texte secondaire sur fond sombre |
| `gray-60` | `#6F6F6F` | Métadonnées, références monospace |
| `gray-70` | `#525252` | Texte secondaire sur fond clair (lede, descriptions) |
| `gray-80` | `#393939` | Texte courant |
| `gray-100` | `#161616` | Ink = texte principal |

### Couleurs de support (statuts)
| Token | Hex | Rôle |
|-------|-----|------|
| Success | `#24A148` | Bordure Callouts success |
| Success light | `#DEFBE6` | Fond Callouts success, cellules "À faire" |
| Info | `#194296` | Bordure Callouts info |
| Info light | `#EDF5FF` | Fond Callouts info |
| Warning | `#F1C21B` | Bordure Callouts warning |
| Warning light | `#FCF4D6` | Fond Callouts warning |
| Danger | `#DA1E28` | Bordure Callouts error, code 404, cellules "À éviter" |
| Danger light | `#FFF1F1` | Fond Callouts error |

### Couleur de dark hero
| Token | Hex | Rôle |
|-------|-----|------|
| `#0A1A3C` | Fond des hero sombres (rare — utilisé pour les CTA sombres) |
| `#1A2B4A` | Bordures / séparateurs sur fond `#0A1A3C` |

---

## 3. Règles typographiques

### Familles
- **Titres, UI :** `IBM Plex Sans` (régulier 400, semi-bold 600, bold 700)
- **Monospace (références, métadonnées, numérotations) :** `IBM Plex Mono` (400, 500)
- Font fallback : `system-ui, sans-serif`

### Échelle & usages
| Usage | Classe Tailwind | Remarques |
|-------|----------------|-----------|
| H1 hero | `text-[clamp(2rem,5vw,3rem)] leading-[1.08] font-bold tracking-tight` | Point vert final `.text-[#43AA43]` |
| H2 section | `text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-bold tracking-tight` | Filet bleu 2×12px dessous |
| H3 carte | `text-[15px] font-semibold leading-[1.3]` | Ink `#161616` |
| Lede | `text-[17px] leading-[1.55]` ou `text-[15px] leading-[1.65]` | Gris `#525252` |
| Corps | `text-[14px] leading-[1.7]` | Gris `#393939` |
| Table dense | `text-[13.5px]` | - |
| Mono eyebrow | `font-mono text-[11px] uppercase tracking-[0.12em] font-semibold` | Bleu `#194296` |
| Mono reference | `font-mono text-[11px] uppercase tracking-[0.08em]` | Gris `#525252` |
| Mono metadata | `font-mono text-[10px] uppercase tracking-[0.12em]` | Gris `#525252` |

### Règles d'or
1. Les **eyebrows et références** sont TOUJOURS en mono uppercase avec tracking élargi.
2. Les **titres principaux** portent un **point final vert** `.text-[#43AA43]` pour ponctuer le ton d'autorité.
3. Un mot clé dans un titre peut basculer en vert via `highlight` (ex. « Votre expertise métier, *notre cadre conforme* »).
4. Pas d'italique décoratif. Pas de texte centré sauf exception (404, CTA finaux).

---

## 4. Grille, espacement, rayons

### Layout
- Container standard : `max-w-7xl` (`Container` composant, variantes `narrow`, `wide`).
- Breakpoints Tailwind standard (`sm 640`, `md 768`, `lg 1024`, `xl 1280`).
- Grid institutionnelle : `grid-cols-12` ou fractions (4/4/4, 3/4/5 pour les comparaisons).

### Espacement vertical des sections
- `py-16 lg:py-20` (soit 64–80 px)
- Pour sections denses / de table : `py-12 lg:py-16`.

### Rayons (border-radius)
- Global : **rayons très faibles** — `rounded-[2px]` ou `rounded-none`.
- Les cartes et boutons n'ont **jamais** de `rounded-xl` ou `rounded-2xl`.
- Les inputs Carbon-like ont un fond gris avec bordure bas seulement.

### Séparateurs
- Bordures fines : `border border-[#E0E0E0]`.
- Grilles "feuille" : `grid gap-px bg-[#E0E0E0]` avec enfants `bg-white` (produit un quadrillage officiel).

### Shadows
- **Pas de shadow** sur les cartes institutionnelles. La profondeur vient des bordures.
- Shadow autorisée uniquement : navbar sticky légère si besoin.

---

## 5. Composants clés

### BrandBar tricolore
Barre 3 pixels de haut, tiers bleu `#194296`, tiers vert `#43AA43`, tiers ink `#161616`. Apparaît en haut de navbar, en séparation hero / contenu, et en haut du CTA final.

### InstitutionalBanner
Bandeau noir au-dessus de la navbar principale : gauche « Transition énergétique · Conformité documentaire », droite « Édition 2026 · Document de référence ». Typo mono 11 px uppercase.

### Navbar
3 niveaux : InstitutionalBanner (noir) → navigation (blanc, logo + liens + CTA) → BrandBar tricolore. Liens en mono uppercase tracking-[0.08em]. Dropdown "Pour qui" avec numérotation mono `01. / 02. / 03.`.

### HeroSection
Structure :
1. Dateline en haut : eyebrow mono bleu gauche, référence mono droite, séparées par border-bottom `#E0E0E0`.
2. H1 avec highlight vert optionnel et point vert final.
3. Description (max-w-xl).
4. 2 CTA optionnels.
5. `<dl>` metadata 4 colonnes (`dt` mono 10px, `dd` semibold 14px), séparée par border-top.
6. Colonne droite optionnelle (DashboardMockup).

### SectionHeader
Bloc titre réutilisable :
- Ligne mono : `number` gris + `eyebrow` bleu uppercase.
- Titre H2.
- Filet `h-[2px] w-12 bg-[#194296]` sous le titre.
- Lede optionnel (max-w-2xl).

### PricingCard
Rectangulaire `rounded-[2px]`. Variante `highlighted=true` : fond bleu `#194296`, texte blanc, check marks vert clair. Variante normale : blanc, bordure `#E0E0E0`.
- Header : badge mono référence + badge "Le plus populaire" ink.
- Prix en `text-[44px]` avec € et période mono.
- Liste features avec `Check` vert strokeWidth 2.5.

### FeatureCard (via FeatureGrid)
Carte avec rail coloré à gauche (3px), mono eyebrow, titre H3, description. Disposition 2/3/4 colonnes via `FeatureGrid`.

### StepCard / Parcours cards
Carte avec **top-border 3px** coloré (bleu ou vert selon persona). Mono « Étape 01 » en haut, icône discrète, titre, description, puis flèche → résultat en vert mono.

### Callout
Aside avec **left-border 3px** (variantes info/success/warning/error/neutral). Fond tinté léger. Titre en gras + référence mono à droite. Texte dense 14 px line-height 1.6. Remplace les anciennes alert boxes rondes.

### ComparisonRow (brand book p. 10)
3 colonnes responsive :
- Contexte (fond blanc, 3/12).
- « À faire » (fond `#DEFBE6`, rail vert `#24A148`, 4/12).
- « À éviter » (fond `#FFF1F1`, rail rouge `#DA1E28`, texte barré).

### DashboardMockup
Mockup institutionnel clair (pas de gradient dark). Table dense avec références `CTP-2026-XXXX`, statut mono (colorés), numéros mono.

### TestimonialCard
Rail gauche 3px. Mono reference en haut. Guillemets institutionnels (pas de quote décoratif). Bloc auteur en bas sur border-top.

### StatCounter
Pas de carte. Seulement : top-border mince `#E0E0E0`, reference mono, valeur `text-[48px]` tabular-nums, label compact.

### CTASection
Fond `#161616`. BrandBar en haut. 2 colonnes : gauche titre + description, droite bouton primaire blanc. Pas de fioritures.

### Footer
Fond `#161616`, 4 colonnes : identité (logo, référence, description), Produit, Ressources, Légal. Bandeau bas avec BrandBar, copyright, REGULATORY_FRAMES en mono.

### PartenairesStrip
Bandeau entre hero et contenu. Logos partenaires (ANAH, MaPrimeRénov', CEE, RGE) en grille neutre, fond gris `#F4F4F4`, libellé mono à gauche.

### Breadcrumb
Fil d'ariane institutionnel : `Accueil / Pour qui / {page}`. Mono uppercase 10px, séparateur `/`. Placé juste sous la navbar.

### Accordion
Version Carbon : pas de fond coloré, lignes fines `#E0E0E0`, numérotation mono à gauche de la question, chevron discret à droite.

### Inputs
Style Carbon : fond `#F4F4F4`, pas de bordure top/left/right, seulement border-bottom `#8D8D8D` qui devient bleu `#194296` au focus. Labels mono 11px uppercase.

### Buttons
Variants :
- `primary` : fond `#194296`, texte blanc.
- `accent` : fond `#43AA43`, texte blanc.
- `secondary` : fond `#161616`, texte blanc.
- `tertiary` : transparent + bordure `#161616`, texte ink.
- `ghost` : transparent, texte bleu, sans bordure.
- `onDark` : blanc, texte ink (utilisé sur fond sombre).
- `danger` : fond `#DA1E28`.
Tailles : `sm`, `md` (défaut), `lg`. Rayon `rounded-[2px]`.

---

## 6. Iconographie

- **Pack :** `lucide-react` exclusivement.
- **Trait :** `strokeWidth={1.75}` en général, `2` pour boutons et CTA, `2.5` pour les check marks verts.
- **Taille :** `h-4 w-4` (16 px) dans les cartes, `h-5 w-5` (20 px) dans les zones mises en valeur. Pas de grandes icônes décoratives.
- **Couleur :** `text-[#525252]` par défaut, `text-[#194296]` quand l'icône indique un canal bleu, `text-[#43AA43]` pour validation/confirmation.

---

## 7. Motion

- Librairie : `motion/react` (successor de framer-motion).
- **Philosophie :** la conformité est sobre. On évite les animations narratives.
- `fadeUp` : opacity 0→1, translateY 12 → 0, duration 0.4, ease out. Utilisé exceptionnellement (hero, titres).
- Pas d'animation sur les cartes d'info, les tableaux, les callouts, les stats.
- Hover : `transition-colors` sur les liens/boutons, rien de plus.

---

## 8. Images et logos

- Logo principal : `logo/CertiPac.svg` (version claire sur fond clair).
- Logo blanc : `logo/CertiPac-white.svg` (fond sombre).
- Icône : `logo/CertiPac-icon.svg` + version blanche `CertiPac-icon-white.svg`.
- Logos partenaires officiels : `logo/logo-anah.svg`, `logo-maprimerenov.svg`, `logo-cee.svg`, `logo-rge.svg` — référencés dans `PartenairesStrip`.
- Favicon : icône Certipac, `index.html`.
- **Jamais** de photos stock, d'illustrations 3D ou de dégradés décoratifs. Le visuel principal est la typographie et la structure de grille.

---

## 9. Contenu & ton de voix

- **Formel, informatif, opposable.**
- Utiliser le vocabulaire officiel : « MaPrimeRénov' » (apostrophe droite), « ANAH », « CEE », « RGE », « fiches d'opération standardisées ».
- Éviter « super », « facile », « rapide » sans preuve. Préférer des chiffres opposables : « 98 % des dossiers acceptés au dépôt ».
- Les titres et sous-sections portent une numérotation `01 — Titre`, `02 — Titre`.
- Les références produit sont en mono : `CTP-PERSONA-01`, `Formule · 01`, `Réf · 01`, `TÉMOIGNAGE · 01`.
- Les dates affichées en mono uppercase : « 15 MARS 2026 ».

---

## 10. Responsive

- Grilles principales : `grid-cols-1 md:grid-cols-2 lg:grid-cols-N`.
- Hero metadata `dl` : `grid-cols-2 sm:grid-cols-4`.
- Parcours (5 étapes) : `grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px`.
- Sections `py-12 lg:py-20` adaptables.
- Container : pleine largeur sur mobile (padding horizontal géré par `Container`), `max-w-7xl` sur desktop.
- Navbar mobile : menu drawer depuis la droite, accordions pour les sous-menus « Pour qui ».
- Les tableaux (Tarifs, Comparaison) : `overflow-x-auto` sur mobile, en-têtes sombres pour rester lisibles.

---

## 11. Structure des pages

Toutes les pages suivent le gabarit institutionnel :

```
<PageWrapper>
  <SEOHead ... />
  <Breadcrumb items={...} />
  <HeroSection eyebrow reference title highlight description primaryCTA secondaryCTA metadata />
  <PartenairesStrip />                      {/* optionnel sur pages produit/personas */}
  <SectionWrapper tone="white|gray">
    <SectionHeader number="01 — …" eyebrow title lede />
    {/* contenu */}
  </SectionWrapper>
  …
  <CTASection title description />
</PageWrapper>
```

L'alternance des tons `white` / `gray` rythme la lecture.

---

## 12. À éviter (brand guard-rails)

- ❌ Dégradés multi-couleurs, blobs, orbes, glassmorphism.
- ❌ `rounded-2xl`, `rounded-3xl`, shadows lourdes (`shadow-xl`, `shadow-2xl`).
- ❌ Emojis dans les pages publiques (sauf demande explicite utilisateur).
- ❌ Tonalités marketing enthousiastes (« Oups ! », « Incroyable »).
- ❌ Photos stock, illustrations décoratives colorées.
- ❌ Polices « fun » (Inter Variable italique, Roboto Slab, etc.).
- ❌ Couleurs hors palette (pas de purple, pink, teal personnalisés).
