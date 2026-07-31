# Veloxa — Checkup Report

**Date**: 2026-07-31
**Mode**: `/design checkup`
**Score**: 35/60 — NEEDS WORK

---

## TL;DR

The surface is competent and consistent but generic. Accessibility and intentionality are the weakest vitals. The design system (CSS variables, component classes) is well-organized but filled with AI-default choices. No critical shipping blockers found, but the surface reads as template-derived rather than authored.

**Primary recommendation**: `/design deslop` to remove generic tells, then `/design recolor` and `/design relayout` for system-level fixes.

---

## Heuristic Scores

| # | Heuristic | Score | Status | Key Finding |
|---|---|---|---|---|
| 1 | Intentionality | 5/10 | WATCH | CSS system is coherent, but colors, layout, and effects are the domain default; nothing reads as a deliberate project-specific choice |
| 2 | Readability | 10/10 | HEALTHY | Good contrast, proper heading hierarchy, clamp-based sizes, adequate line heights; text is readable across contexts |
| 3 | Usability | 5/10 | WATCH | Navigation works, CTAs are visible, services are clickable cards; but heavy animation reliance and non-standard mobile menu transition (clip-path) are concerns |
| 4 | Responsiveness | 5/10 | WATCH | Auto-fit grids work, mobile breakpoint at 992px, testimonial slider has mobile variant; but hero has fixed min-h-screen, no iOS input zoom handling, no container queries or safe-area handling |
| 5 | Speed | 5/10 | WATCH | Two Google Fonts loaded, hero has 50+ decorative elements, lazy loading used for extended sections; the hero's particle overhead is concerning for low-end devices |
| 6 | Accessibility | 5/10 | WATCH | `prefers-reduced-motion` respected, aria-labels on menu button, focus-visible on slider; but no skip-nav link, animated counters lack accessible alternative, white/60 text may fail contrast, no global focus ring system |

---

## Cognitive Load / Risk

- **WATCH**: Intentionality is weak — the surface is competent but generic
- **WATCH**: Responsiveness needs iOS Safari input zoom handling and safe-area support
- **WATCH**: Accessibility is bare-minimum — no skip navigation, potential contrast failures, no screen-reader alternatives for particle effects
- **PASS**: Readability is healthy — type scale, contrast, and line heights are adequate

**Next modes**: `/design deslop`, `/design relayout`, `/design recolor`, `/design interaction` (for accessibility improvements)

---

## What's Working

- CSS custom property system is well-organized with clear naming
- Component classes are consistent and composable
- Heading hierarchy uses clamp-based responsive sizing
- Paragraph measure is within readable range
- Navigation has clear active state and hover feedback
- Footer structure is logical with services + company links

---

## Priority Issues

### P0 — No critical shipping blockers
No single element makes the site unusable or inaccessible. The surface ships, it just ships generic.

### P1 — Intentionality gap
The design reads as assembled from industry defaults: blue-purple primary, dark navy hero, glass effects, centered cards, gradient headlines. Every choice could be swapped into another agency site without breaking.

### P1 — Animation overhead
Hero section contains 25 floating dots, 3 blob orbs, 6 ring particles, 4 diamond particles, 3 shooting stars, 12 twinkle stars, a grid overlay, and a scroll indicator. This is 50+ animated elements on first paint. On lower-end devices this causes jank and battery drain.

### P2 — Mobile navigation transition
The `clip-path: circle()` transition for mobile menu is creative but non-standard and may cause rendering issues on some browsers. A standard slide or overlay would be more reliable.

### P2 — Accessibility gaps
No skip-to-content link, no visible focus ring system beyond the isolated slider button, and animated counters provide no text alternative for screen readers.

### P2 — Type character
Bricolage Grotesque + Outfit is a better-than-default pair, but the type system has no distinctive rhythm, no pull quote treatment, no leading/drop cap, no scale beyond the three heading clamps. It's correct but unvoiced.
