# Taste File
- Prefers systematic multi-step workflows tracked with todo lists (`todo_write`), progressing through categories (composition, color, type, depth, motion, decoration) before a final verification pass. Confidence: 0.9
- Generates diagnostic reports (smell, checkup, review) before applying design changes — audit first, then fix. Confidence: 0.85
- Handles full git workflow: stages all changes, commits with a structured message, and pushes to remote when the user says "push." Confidence: 0.9
- Verifies refactoring with TypeScript compilation (`tsc --noEmit`) and grep sweeps to confirm no old patterns remain. Confidence: 0.85
- Prefers structured commit messages: conventional emoji prefix, multi-line body with hyphen-bulleted list of changes, and a Co-authored-by trailer. Confidence: 0.85
- Uses CSS custom properties (`var(--color-primary)`) over hardcoded hex values for maintainability. Confidence: 0.8
- Uses inline `style={{}}` extensively for component-specific styling, combining it with Tailwind utility classes for layout and responsive behavior. Confidence: 0.7
- Provides detailed change summaries after completing work, organized by category (Composition, Color, Type, Depth, Motion, Decoration) with specifics about what changed and why. Confidence: 0.8
