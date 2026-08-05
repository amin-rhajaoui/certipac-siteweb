# Design System: Certipac — Édition DSFR-inspired

Référence : `CTP-DESIGN-2026-FR-002`  
Version : `v3.0`

## 0. Cadre légal & intégration DSFR

### Ce que nous faisons
Certipac adopte un **langage visuel dans la famille du Système de Design de l'État (DSFR)** : densités, filets, boutons à filet bas, focus rings, callouts à bandeau, header type service, neutres institutionnels, typographie Marianne-*like*.

### Ce que nous ne faisons pas
Le package npm `@gouvfr/dsfr` et les fontes **Marianne** / **Spectral** sont **réservés à la sphère État** (domaines `.gouv.fr`, agrément SIG). Leur utilisation par une entité privée est interdite par les [Modalités d'Utilisation du DSFR](https://github.com/GouvernementFR/dsfr/blob/main/doc/legal/cgu.md).

| Élément | Statut Certipac |
|---------|-----------------|
| `@gouvfr/dsfr` (npm) | **Non installé** — CGU + gate `@gouvfr/dsfr-token` |
| Fonte Marianne | **Non utilisée** — réservée à l'État |
| Bleu France `#000091` | **Non utilisé** comme identité (évite l'usurpation) |
| Motifs UI DSFR (boutons, callouts, focus, densités) | **Réinterprétés** en CSS propriétaire |
| Neutres DSFR-like (`#161616`, `#F6F6F6`, `#EEEEEE`…) | **Adoptés** pour la structure |

### Stack typographique
- **UI / titres :** `Source Sans 3` (alternative ouverte à Marianne, SIL OFL)
- **Mono :** `Source Code Pro`
- Chargement via Google Fonts dans `index.html`

### Comment Tailwind intervient
Tailwind v4 sert les utilitaires de layout. Les composants critiques (boutons, callouts, tags, focus) sont stylés via classes CSS maison (`ctp-btn`, `ctp-callout`, `ctp-tag`) calquées sur les motifs DSFR — **Tailwind ne combat pas le langage institutionnel**.

---

## 1. Ton visuel & atmosphère

**Ton :** Institutionnel français, sobre, opposable — sensation « site d'autorité » sans se faire passer pour un site `.gouv.fr`.

**Densité :** Corps à 16 px (DSFR). Sections `py-14 lg:py-20`. Alternance blanc / `#F6F6F6`.

**Interdits :** orbes, glassmorphism, gradients marketing, `rounded-2xl`, stat strips flottants, badges overlay, purple SaaS, mockups gadget, shadows lourdes.

---

## 2. Palette

### Marque Certipac (accents)
| Token | Hex | Rôle |
|-------|-----|------|
| Bleu Certipac | `#194296` | CTA primaires, liens, filets, titres d'eyebrow |
| Bleu Certipac foncé | `#143578` / `#0F285A` | Hover / active boutons |
| Vert Certipac | `#43AA43` | Accent marque, validations, point final titres |
| Vert Certipac foncé | `#2A7A2A` | Hover accent |

### Structure (neutres DSFR-like)
| Token | Hex | Rôle |
|-------|-----|------|
| Ink | `#161616` | Texte principal, footer, bandeau |
| Grey 200 | `#3A3A3A` | Texte secondaire fort |
| Grey 425 | `#666666` | Métadonnées, labels |
| Grey 625 | `#929292` | Texte muted |
| Grey border | `#DDDDDD` / `#CECECE` | Filets, séparateurs |
| Grey alt | `#EEEEEE` / `#F6F6F6` | Fonds sections / inputs |
| White | `#FFFFFF` | Fond principal |

### Support
| Token | Hex |
|-------|-----|
| Error | `#CE0500` / fond `#FFE9E6` |
| Success | `#18753C` / fond `#B8FEC9` |
| Warning | `#B34000` / fond `#FEE7C9` |
| Info | `#194296` / fond `#E3E3FD` |
| Focus | `#0A76F6` (ring DSFR-like) |

---

## 3. Typographie

| Usage | Spec |
|-------|------|
| H1 hero | `clamp(2rem, 4.5vw, 2.75rem)` / bold / lh 1.2 |
| H2 section | `clamp(1.5rem, 3.2vw, 2rem)` / bold / lh 1.25 |
| H3 | `1.125rem` / bold |
| Lede | `1.125rem–1.25rem` / `#3A3A3A` |
| Corps | `1rem` / lh 1.5 |
| Eyebrow | `0.875rem` / bold / uppercase / tracking 0.04em / bleu Certipac |
| Mono ref | Source Code Pro `0.75rem` uppercase |

Règles : point final vert optionnel ; pas d'italique décoratif ; pas de texte centré hors 404 / exceptions.

---

## 4. Composants critiques

### Boutons (`ctp-btn`)
Angles **0**, poids **500**, hauteurs `2 / 2.5 / 3 rem`, **filet bas inset 2px** (motif fr-btn). Variantes : primary, accent, secondary, tertiary (contour), ghost, onDark, danger.

### Callouts (`ctp-callout`)
Fond contrasté + **bandeau vertical 4px** (background-image), padding ~1.25–1.5 rem. Tons : info / success / warning / error / neutral.

### Tags (`ctp-tag`)
Pill DSFR-like (seule exception contrôlée au rayon 0), gras 14 px. Actif = fond bleu Certipac.

### Header
1. Bandeau ink (métadonnées)  
2. Zone service (logo + tagline + outils)  
3. Nav primaire avec filet bas actif  
4. BrandBar tricolore Certipac  

### Hero
Dateline (eyebrow + réf) → H1 → lede 20 px → CTA → `<dl>` métadonnées en filets. **Pas** de grille décorative.

### Footer
Fond ink, BrandBar, colonnes Produit / Ressources / Société, bandeau légal mono.

### BrandBar
3 px : bleu Certipac · vert Certipac · ink. Signature marque (pas Marianne).

---

## 5. Focus & accessibilité

```css
:focus-visible {
  outline: 2px solid #0A76F6;
  outline-offset: 2px;
}
```

Contraste AA visé sur textes et CTA. `prefers-reduced-motion` respecté.

---

## 6. Structure de page

```
<PageWrapper>
  <SEOHead />
  <Breadcrumb />
  <HeroSection … />
  <PartenairesStrip />
  <SectionWrapper tone="white|gray">…</SectionWrapper>
  <CTASection />
</PageWrapper>
```

---

## 7. À éviter

- ❌ Package / classes `fr-*` officielles DSFR en production privée  
- ❌ Fonte Marianne / logo Marianne / bleu France comme identité État  
- ❌ Orbes, glass, gradients marketing, rounded-2xl, shadows dramatiques  
- ❌ Purple SaaS, badges flottants, stat strips gadget  
- ❌ IBM Plex / Carbon comme langage dominant (remplacé)

---

## 8. Suite possible

- Harmoniser les pages personas / tarifs / contact sur les mêmes tokens  
- Extraire un mini kit `ctp-*` documenté (Storybook)  
- Si Certipac obtient un agrément État un jour : réévaluer l'intégration officielle `@gouvfr/dsfr`
