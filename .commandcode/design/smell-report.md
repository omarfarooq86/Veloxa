# Veloxa — Smell Report

**Date**: 2026-07-31
**Mode**: `/design smell`
**Score**: 0/10 — IDENTITY FAILURE

---

## TL;DR

Every odor in the catalog is present on this surface. The design is the digital marketing agency archetype: dark navy hero with blue gradient and particle effects, centered layout throughout, pill badges above every heading, glass/blur effects without a depth system, oversized stat monuments, and a blue-purple primary. This is not a design that made choices — it's a design that accepted defaults.

**Primary recommendation**: `/design deslop` — remove every generic tell and replace with project-specific decisions.

---

## Heuristic Scores

| # | Heuristic | Score | Key Finding |
|---|---|---|---|
| 1 | Tech Gradient | 0/1 | Hero uses `#4d7cff → #3b82f6 → #0ea5e9` blue-to-cyan gradient on headline; CSS defines three gradient-text classes all in the blue-cyan spectrum |
| 2 | Generic Tech Hue | 0/1 | Primary `#1e4aff` is the default blue-purple for anything technical; secondary `#059669` is the generic "growth/trust" green; the domain default for agency sites |
| 3 | Feature Tile Grid | 0/1 | Services section is a 2×2 equal grid (icon, heading, one sentence, "Learn More"); Industries uses same uniform grid pattern; no hierarchy, no priority |
| 4 | Accent Rail | 0/1 | ServiceCard has `via-primary/20` accent line on hover; testimonial cards use `border-left: 3px` in active state; industry cards have `via-primary/20` gradient accent line |
| 5 | Unearned Blur | 0/1 | Navbar `blur(24px)`, card-stat `blur(12px)`, glass classes `blur(20px/16px)`, hero badge `blur-sm`, trust indicators `blur-sm` — frosting applied everywhere without a committed depth system |
| 6 | Stat Monument | 0/1 | Four oversized numbers (250%, 500+, $1.2B, 98%) with gradient text treatment; no context, no proof, no case language — pure monument |
| 7 | Icon Topper | 0/1 | Every section heading is preceded by a pill badge: "By the Numbers" (Star), "What We Do", "Case Study" (Star), "Verticals", "Testimonials", "Trusted By", "Get Started" |
| 8 | Bounce Everywhere | 0/1 | Hero has 50+ decorative animated elements (blob orbs, floating dots, rings, diamonds, shooting stars, twinkles, grid, scroll indicator); every card scales on hover; stat counters animate; CSS has 12+ keyframe animations |
| 9 | Default Type | 0/1 | Bricolage Grotesque + Outfit — a common AI-picked font pair with a basic clamp-based scale; no distinctive typographic voice or character moments |
| 10 | Center Stack | 0/1 | Every section — hero, stats, services, case study, industries, testimonials, clients, CTA — uses centered text alignment as the default composition |

---

## Domain Default Trap

Digital marketing agency → blue primary, dark navy hero, glass morphism, centered layout, gradient text, particle effects. The visual direction could be guessed before opening the page.

---

## Cognitive Load / Risk

- **FAIL**: All 10 odor categories triggered — this is an identity failure, not cosmetic cleanup
- **FAIL**: Domain default trap fully active — palette, layout, and type are all predictable from industry alone
- **FAIL**: Eleven sections all share the same centered heading pattern with pill badges

**Next modes**: `/design deslop` (primary), `/design recolor`, `/design relayout`

---

## What's Working

- The CSS custom property system is well-organized and consistent
- Component class naming (`.card`, `.btn`, `.badge`, `.glass`) is coherent
- `prefers-reduced-motion` is respected
- Fonts are custom and loaded intentionally (not default system fonts)
- Responsive utilities exist (clamp headings, mobile menu breakpoint)

---

## Priority Issues

### P0 — Identity Failure (all odors active)
Every smell in the catalog is detected. The surface reads as generated, not authored. The fix is not swapping individual elements — it's a systemic rethinking of composition, color, and hierarchy. Start with `/design deslop`.

### P0 — Domain Default Trap
The blue-primary + dark-navy-hero + glass + centered-layout formula is the median agency landing page template. The palette needs a project-level justification, not the industry reflex.

### P1 — Center Stack as Default
Eleven centered sections in sequence. The composition never chooses tension, asymmetry, editorial pacing, or any work-pattern-driven layout.

### P1 — Feature Tile Grid Without Priority
Services (4 cards, 2×2 equal) and Industries (equal cards) treat every item as equally important. No lead feature, no rhythm variation.

### P2 — Bounce Everywhere
Hero has 50+ decorative animated elements that serve no interaction purpose. The particle system, orbs, shooting stars, and ring pulses are pure visual noise.

### P2 — Unearned Blur
Glass effects sprinkled across the surface (navbar, stat cards, hero elements, logo marquee) without a purpose or depth rationale. Remove blur where it's decoration; build a real elevation system where depth matters.
