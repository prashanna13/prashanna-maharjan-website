# Project Brain

## Mission

Act as the primary software engineering agent for this project. Understand the
existing code before changing it, implement the smallest production-ready
solution, preserve existing behavior, and verify relevant changes.

Priorities:

**Correctness > requirement compliance > project consistency > security and
reliability > maintainability > token efficiency > minimal output**

## Project Snapshot

- **Application:** Personal photography portfolio
- **Stack:** React 19, Vite, JavaScript/JSX, CSS
- **Routing:** `react-router-dom`
- **Motion:** GSAP with ScrollTrigger and Lenis smooth scrolling
- **3D:** Three.js with model components and assets in `public/`
- **Entry point:** `src/main.jsx`
- **Application shell:** `src/App.jsx`
- **Routes:** selected work (`/`), homepage (`/homepage`), about, projects, and contact
- **Deployment:** GitHub Pages through `.github/workflows/deploy.yml`

## Repository Map

- `src/components/` — shared UI and 3D model components
- `src/pages/` — route-level pages and page-specific CSS
- `src/data/projects.js` — project content and metadata
- `src/assets/` — imported application assets
- `public/` — static photography, 3D models, textures, and icons
- `src/index.css` and `src/App.css` — global and shell-level styling
- `package.json` — scripts and dependencies

## Engineering Rules

### Understand Before Building

1. Inspect the smallest relevant set of files first.
2. Check README, configuration, workflows, and existing patterns before making
   assumptions.
3. Treat explicit user requirements and project documentation as the source of
   truth.
4. Trace only direct dependencies required for the change; do not scan the
   entire repository without a reason.

### Plan and Implement

1. Identify the minimum files that must change.
2. Reuse existing components, utilities, data structures, styles, and behavior.
3. Prefer focused edits over rewrites or new abstractions.
4. Preserve routes, responsive behavior, accessibility, animation behavior, and
   existing visual intent unless the requirement changes them.
5. Avoid new dependencies when the current stack is sufficient.
6. Keep error handling explicit; do not silently swallow failures or add broad
   catches.
7. Keep JSX and JavaScript type-safe in practice: use existing data shapes,
   guards, and naming conventions rather than unnecessary casts or duplication.
8. Add or update tests only when the project has an applicable testing
   structure or meaningful verification requires them.

### Debugging

1. Identify the actual failure and inspect the relevant error or behavior.
2. Trace the failing function and its immediate dependencies.
3. Reproduce or logically verify the root cause.
4. Apply the smallest safe fix.
5. Check related behavior after the fix.

### Frontend-Specific Guidance

- Use existing GSAP and Lenis patterns for motion; avoid introducing a second
  animation system.
- Respect reduced-motion and avoid adding motion that harms usability.
- Keep images and 3D assets in their established locations and preserve
  existing asset paths.
- Maintain semantic HTML, keyboard access, clear focus states, and useful ARIA
  labels for interactive controls.
- Keep route behavior compatible with GitHub Pages deployment.
- Prefer page-specific CSS files for page styles and shared files for global or
  shell styles.

## Validation

Run only checks relevant to the change:

```bash
npm run lint
npm run build
```

Use targeted checks first, then escalate only when needed. If a check cannot be
run, report that clearly along with the reason.

## Change Workflow

1. Understand the request and identify functional requirements, preserved
   behavior, edge cases, and constraints.
2. Inspect relevant files and existing documentation.
3. Decide the smallest correct implementation.
4. Edit only the required files.
5. Run relevant lint/build checks.
6. Review the final diff for unrelated changes.
7. Report what changed, why, verification results, and any remaining risks or
   assumptions.

## Output Format

After completing a task, provide:

1. A concise summary of the modified files or unified diff.
2. A brief explanation of what changed and why.
3. Verification performed and its result.
4. Remaining risks, assumptions, or limitations only when applicable.

Do not provide a full project summary unless explicitly requested.
